-- Migration: portfolio backend — projects, project_assets, storage bucket "media"
-- Target: Supabase project ipzyuuocnaaebvhvmllm
-- Run manually in the Supabase dashboard SQL Editor (not executed by script).

-- ============================================================
-- 1. Table: public.projects
-- ============================================================
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  client text not null default '',
  industry text not null default '',
  category text not null,
  track text not null check (track in ('production','personal-branding')),
  summary text not null default '',
  description text not null default '',
  services text[] not null default '{}',
  location text,
  sort_order int not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- 2. Table: public.project_assets
-- ============================================================
create table public.project_assets (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  kind text not null check (kind in ('video','photo')),
  orientation text not null check (orientation in ('landscape','portrait')),
  video_url text,
  video_portrait_url text,
  poster_url text not null default '',
  poster_portrait_url text,
  alt text not null default '',
  sort_order int not null default 100,
  created_at timestamptz not null default now()
);

-- ============================================================
-- 3. Enable Row Level Security on both tables
-- ============================================================
alter table public.projects enable row level security;
alter table public.project_assets enable row level security;

-- ============================================================
-- 4. Policies: public.projects
-- ============================================================
-- Public read
drop policy if exists "Public read projects" on public.projects;
create policy "Public read projects"
  on public.projects for select
  using (true);

-- Authenticated writes
drop policy if exists "Authenticated insert projects" on public.projects;
create policy "Authenticated insert projects"
  on public.projects for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated update projects" on public.projects;
create policy "Authenticated update projects"
  on public.projects for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated delete projects" on public.projects;
create policy "Authenticated delete projects"
  on public.projects for delete
  to authenticated
  using (true);

-- ============================================================
-- 5. Policies: public.project_assets
-- ============================================================
-- Public read
drop policy if exists "Public read project_assets" on public.project_assets;
create policy "Public read project_assets"
  on public.project_assets for select
  using (true);

-- Authenticated writes
drop policy if exists "Authenticated insert project_assets" on public.project_assets;
create policy "Authenticated insert project_assets"
  on public.project_assets for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated update project_assets" on public.project_assets;
create policy "Authenticated update project_assets"
  on public.project_assets for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated delete project_assets" on public.project_assets;
create policy "Authenticated delete project_assets"
  on public.project_assets for delete
  to authenticated
  using (true);

-- ============================================================
-- 6. Storage bucket "media"
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media','media',true)
on conflict do nothing;

-- ============================================================
-- 7. Storage policies on storage.objects for bucket "media"
-- ============================================================
-- Public read
drop policy if exists "Public read media bucket" on storage.objects;
create policy "Public read media bucket"
  on storage.objects for select
  using (bucket_id = 'media');

-- Authenticated writes
drop policy if exists "Authenticated insert media bucket" on storage.objects;
create policy "Authenticated insert media bucket"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'media');

drop policy if exists "Authenticated update media bucket" on storage.objects;
create policy "Authenticated update media bucket"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'media')
  with check (bucket_id = 'media');

drop policy if exists "Authenticated delete media bucket" on storage.objects;
create policy "Authenticated delete media bucket"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'media');
