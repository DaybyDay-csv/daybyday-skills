import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import type { Project } from "@/data/types";
import { TRACKS, categoryLabel } from "@/data/categories";
import StreamVideo from "./StreamVideo";

interface Props {
  project: Project;
  index: number;
  total: number;
  active: boolean;
  preload: boolean;
  onActive: (index: number) => void;
}

const norm = (v: string) => v.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Línea bajo el título: el cliente, salvo que se llame igual que el proyecto. */
const sublineOf = (project: Project) =>
  norm(project.client) === norm(project.title) ? project.industry : project.client;

/**
 * Un proyecto = una sección de 200svh con dos capas sticky:
 *
 * 1. Ancla del título (primer hijo, h-0): se clava en el centro en cuanto el
 *    panel empieza a entrar y no se suelta hasta el final de la sección. El
 *    borde inferior de la sección la empuja hacia arriba y viaja con la
 *    costura → el título saliente queda cortado por el panel siguiente.
 * 2. Wrap del vídeo: sticky a pantalla completa; corre detrás del título.
 *
 * La sección aísla su stacking (isolation), así que el panel entrante pinta
 * por encima del título saliente: corte físico, sin fundidos ni degradados.
 */
const ReelPanel = ({ project, index, total, active, preload, onActive }: Props) => {
  const track = TRACKS[project.track];
  const wrapRef = useRef<HTMLDivElement>(null);

  // Activa este vídeo cuando su wrap cruza el 50% de la pantalla: el mismo
  // instante en que la costura pasa por el centro y el título cambia de dueño.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) onActive(index);
        }
      },
      { threshold: [0.5] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index, onActive]);

  const meta = [categoryLabel(project.category), project.industry]
    .filter((v, i, all) => v && all.findIndex((x) => norm(x) === norm(v)) === i)
    .join(" · ");
  // si la línea de abajo repite el eyebrow, no se pinta
  const subline = sublineOf(project);
  const showSubline = !meta.split(" · ").some((part) => norm(part) === norm(subline));

  return (
    <section
      className="reel-panel group"
      aria-label={`${project.title} — ${project.industry}`}
    >
      {/* Ancla del título: mientras la sección no llega al top, el bloque
          cuelga 50svh por debajo → el título entra DESDE ABAJO pegado al
          scroll (misma velocidad que el borde que come al saliente) y
          aterriza a media altura cuando su panel cubre la pantalla, donde el
          sticky lo clava. Alineado a la izquierda: el centro del vídeo queda
          libre. Siempre pinta sobre su propio vídeo; la sección entrante
          cubre al saliente por orden DOM. Sin fades — solo física. */}
      <div className="sticky top-0 z-20 h-0">
        <div className="pointer-events-none absolute inset-x-0 top-[50svh] -translate-y-1/2">
          <div className="mx-auto flex max-w-[1440px] justify-start px-6 md:px-10">
            <div className="anim-stagger flex flex-col items-start text-left">
              <p className="reel-sub mb-3 font-body text-[11px] uppercase tracking-[0.32em] text-[hsl(var(--primary))]">
                {meta}
              </p>
              <h2 className="reel-title editorial text-3xl font-light leading-[0.95] text-white sm:text-4xl md:text-5xl">
                {project.title}
              </h2>
              {showSubline && (
                <p className="reel-sub mt-3 font-body text-sm text-white/85 md:text-base">
                  {subline}
                </p>
              )}
              <span className="reel-sub mt-6 inline-flex items-center border border-white/30 px-5 py-2 font-body text-[10px] font-medium uppercase tracking-[0.22em] text-white/85">
                View work
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vídeo: pega durante el recorrido de la sección y sale con la costura */}
      <div
        ref={wrapRef}
        className="sticky top-0 z-10 h-[100svh] w-full overflow-hidden bg-black"
      >
        <StreamVideo
          asset={project.cover}
          active={active}
          preload={preload}
          className="anim-video transition-transform duration-[2.4s] ease-out group-hover:scale-[1.03]"
        />

        {/* Apertura: el vídeo entra desde negro (fill backwards → nunca queda tapando) */}
        <div className="anim-overlay pointer-events-none absolute inset-0 z-[5] bg-black" />

        {/* Pie: contador y pista de scroll en el primer panel */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:px-10 md:pb-7">
          <p className="reel-sub font-body text-[11px] uppercase tracking-[0.3em] text-white/60">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          {index === 0 && (
            <span className="reel-sub flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.3em] text-white/60">
              Scroll
              <ArrowDown className="h-3 w-3 animate-bounce" strokeWidth={1.25} />
            </span>
          )}
        </div>

        {/* Toda la pantalla lleva al proyecto */}
        <Link
          to={`${track.path}/${project.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`Ver proyecto ${project.title}`}
        />
      </div>
    </section>
  );
};

export default ReelPanel;
