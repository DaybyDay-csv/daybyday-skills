// Seed del catálogo estático a Supabase (tablas projects + project_assets).
//
// Uso: node scripts/seed-supabase.mjs
//   1. Lee SERVICE_KEY de .env.supabase (no va a código cliente ni a commits: solo este script la lee).
//   2. Lee scripts/catalog.json — volcado de src/data/projects.ts generado con:
//        node_modules/.bin/vite-node -e "
//          import { writeFileSync } from 'node:fs';
//          import { PROJECTS } from './src/data/projects';
//          writeFileSync('scripts/catalog.json', JSON.stringify(PROJECTS.map(p => ({
//            slug: p.slug, title: p.title, client: p.client, industry: p.industry,
//            category: p.category, track: p.track, location: p.location ?? null,
//            summary: p.summary, description: p.description, services: p.services,
//            sort_order: p.order, assets: p.assets,
//          })), null, 2));
//        "
//      Regenerarlo si se edita projects.ts.
//   3. Upsert idempotente: proyectos por slug (on conflict do update); los assets se
//      reemplazan por proyecto (delete + insert), que es el seed que espera el catálogo.
//   4. NO sube ficheros: las URLs de media (/media/..., con sus ?v=2) van tal cual.
//
// Mapping (src/data/useProjects.ts mapAsset/mapProject es la inversa):
//   projects:  { slug, title, client, industry, category, track, summary, description,
//                services, location ?? null, sort_order = order }
//   assets:    { project_id, kind, orientation, video_url = mp4 ?? null,
//                video_portrait_url = portraitMp4 ?? null, poster_url = poster ?? '',
//                poster_portrait_url = portraitPoster ?? null, alt = alt ?? '',
//                sort_order = índice (el cover es el asset 0) }

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@supabase/supabase-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// 1. Service key desde .env.supabase
const envFile = readFileSync(join(ROOT, ".env.supabase"), "utf8");
const envValue = (key) => {
  const line = envFile.split("\n").find((l) => l.startsWith(`${key}=`));
  if (!line) throw new Error(`Falta ${key} en .env.supabase`);
  return line.slice(key.length + 1).trim();
};
const SUPABASE_URL = envValue("SUPABASE_URL");
const SERVICE_KEY = envValue("SUPABASE_SERVICE_KEY");

// 2. Catálogo
const catalog = JSON.parse(readFileSync(join(__dirname, "catalog.json"), "utf8"));
if (!Array.isArray(catalog) || catalog.length === 0) {
  throw new Error("catalog.json vacío o malformado — regenera el volcado de src/data/projects.ts");
}
console.log(`Catálogo: ${catalog.length} proyectos`);

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

// 3. Upsert de proyectos (idempotente por slug)
const projectRows = catalog.map((p) => ({
  slug: p.slug,
  title: p.title,
  client: p.client,
  industry: p.industry,
  category: p.category,
  track: p.track,
  summary: p.summary,
  description: p.description,
  services: p.services,
  location: p.location ?? null,
  sort_order: p.sort_order,
}));

{
  const { error } = await supabase
    .from("projects")
    .upsert(projectRows, { onConflict: "slug" });
  if (error) throw new Error(`Upsert projects: ${error.message} (${error.code})`);
}
console.log(`projects upsert: ${projectRows.length} filas`);

// ids por slug (la FK de assets los necesita)
const slugToId = new Map();
{
  const { data, error } = await supabase.from("projects").select("id, slug");
  if (error) throw new Error(`select projects: ${error.message}`);
  for (const row of data ?? []) slugToId.set(row.slug, row.id);
  for (const slug of catalog.map((p) => p.slug)) {
    if (!slugToId.has(slug)) throw new Error(`Proyecto sin id tras upsert: ${slug}`);
  }
}

// Assets: delete + insert por proyecto (idempotente). RLS no aplica a la service key.
let assetCount = 0;
for (const p of catalog) {
  const projectId = slugToId.get(p.slug);

  const { error: delError } = await supabase
    .from("project_assets")
    .delete()
    .eq("project_id", projectId);
  if (delError) throw new Error(`Delete assets ${p.slug}: ${delError.message}`);

  const assetRows = p.assets.map((a, index) => ({
    project_id: projectId,
    kind: a.kind,
    orientation: a.orientation,
    video_url: a.mp4 ?? null,
    video_portrait_url: a.portraitMp4 ?? null,
    poster_url: a.poster ?? "",
    poster_portrait_url: a.portraitPoster ?? null,
    alt: a.alt ?? "",
    sort_order: index + 1,
  }));

  if (assetRows.length === 0) {
    console.warn(`  ${p.slug}: SIN assets (el site no lo publicaría)`);
    continue;
  }

  const { error: insError } = await supabase
    .from("project_assets")
    .insert(assetRows);
  if (insError) throw new Error(`Insert assets ${p.slug}: ${insError.message}`);
  assetCount += assetRows.length;
  console.log(`  ${p.slug}: ${assetRows.length} assets`);
}
console.log(`project_assets insert: ${assetCount} filas`);

// 4. Verificación: los conteos que pide el seed
const verify = {
  async count(table) {
    const { count, error } = await supabase.from(table).select("*", { count: "exact", head: true });
    if (error) throw new Error(`count ${table}: ${error.message}`);
    return count;
  },
  async assetsOf(slug) {
    const projectId = slugToId.get(slug);
    const { count, error } = await supabase
      .from("project_assets")
      .select("*", { count: "exact", head: true })
      .eq("project_id", projectId);
    if (error) throw new Error(`count assets ${slug}: ${error.message}`);
    return count;
  },
};

const totalProjects = await verify.count("projects");
const totalAssets = await verify.count("project_assets");
const danielAssets = await verify.assetsOf("daniel-fernandez");
const runningAssets = await verify.assetsOf("running");

const checks = [
  ["projects == 15", totalProjects === 15, `${totalProjects}`],
  ["daniel-fernandez == 1 asset", danielAssets === 1, `${danielAssets}`],
  ["running == 23 assets", runningAssets === 23, `${runningAssets}`],
  ["assets totales == suma del catálogo", totalAssets === assetCount, `${totalAssets}`],
];
let ok = true;
for (const [name, pass, detail] of checks) {
  console.log(`${pass ? "OK" : "FALLO"}  ${name} (${detail})`);
  ok = ok && pass;
}
if (!ok) {
  process.exitCode = 1;
  throw new Error("La verificación del seed no cuadra");
}
console.log("Seed verificado.");
