-- KE TV Football Manager — planned PostgreSQL schema (Supabase compatible).
-- Not applied yet. Apply as a migration once the cloud database is enabled.
-- Reference data (clubs, players, competitions...) is public read-only.
-- Career data is private per user via RLS.

create table public.coaches (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  nationality text,
  created_at timestamptz not null default now()
);

create table public.stadiums (
  id uuid primary key default gen_random_uuid(),
  name text not null, city text, state char(2), capacity int,
  source_url text -- provenance of real data
);

create table public.clubs (
  id uuid primary key default gen_random_uuid(),
  name text not null, short_name text, state char(2),
  crest_url text, crest_license text,
  stadium_id uuid references public.stadiums(id),
  source_url text
);

create table public.players (
  id uuid primary key default gen_random_uuid(),
  full_name text not null, known_as text, birth_date date,
  position text not null, nationality text,
  photo_url text, photo_license text,
  source_url text
);

create table public.competitions (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null, name text not null, level int not null
);

create table public.seasons (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id),
  year int not null,
  regulation jsonb not null default '{}', -- phases, groups, promotion/relegation counts
  unique (competition_id, year)
);

create table public.season_clubs (
  season_id uuid references public.seasons(id) on delete cascade,
  club_id uuid references public.clubs(id),
  primary key (season_id, club_id)
);

create table public.contracts (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references public.players(id),
  club_id uuid not null references public.clubs(id),
  starts_on date, ends_on date, salary numeric
);

create table public.careers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  coach_id uuid not null references public.coaches(id) on delete cascade,
  club_id uuid not null references public.clubs(id),
  current_year int not null,
  state jsonb not null default '{}', -- finances, tactics, squad overrides
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.matches (
  id uuid primary key default gen_random_uuid(),
  season_id uuid not null references public.seasons(id),
  career_id uuid references public.careers(id) on delete cascade, -- null = real fixture
  round text, home_club_id uuid references public.clubs(id), away_club_id uuid references public.clubs(id),
  kickoff_at timestamptz
);

create table public.results (
  match_id uuid primary key references public.matches(id) on delete cascade,
  home_goals int not null, away_goals int not null, events jsonb not null default '[]'
);

create table public.standings (
  id uuid primary key default gen_random_uuid(),
  season_id uuid not null references public.seasons(id),
  career_id uuid references public.careers(id) on delete cascade,
  club_id uuid not null references public.clubs(id),
  grp text, played int default 0, won int default 0, drawn int default 0, lost int default 0,
  goals_for int default 0, goals_against int default 0, points int default 0
);

create table public.transfers (
  id uuid primary key default gen_random_uuid(),
  career_id uuid references public.careers(id) on delete cascade,
  player_id uuid not null references public.players(id),
  from_club_id uuid references public.clubs(id), to_club_id uuid references public.clubs(id),
  fee numeric, transfer_date date
);

-- Grants
grant select on public.stadiums, public.clubs, public.players, public.competitions,
  public.seasons, public.season_clubs, public.contracts to anon, authenticated;
grant select, insert, update, delete on public.coaches, public.careers to authenticated;
grant select, insert, update, delete on public.matches, public.results, public.standings, public.transfers to authenticated;
grant select on public.matches, public.results, public.standings, public.transfers to anon;
grant all on all tables in schema public to service_role;

-- RLS
alter table public.stadiums enable row level security;
alter table public.clubs enable row level security;
alter table public.players enable row level security;
alter table public.competitions enable row level security;
alter table public.seasons enable row level security;
alter table public.season_clubs enable row level security;
alter table public.contracts enable row level security;
alter table public.coaches enable row level security;
alter table public.careers enable row level security;
alter table public.matches enable row level security;
alter table public.results enable row level security;
alter table public.standings enable row level security;
alter table public.transfers enable row level security;

create policy "public read" on public.stadiums for select using (true);
create policy "public read" on public.clubs for select using (true);
create policy "public read" on public.players for select using (true);
create policy "public read" on public.competitions for select using (true);
create policy "public read" on public.seasons for select using (true);
create policy "public read" on public.season_clubs for select using (true);
create policy "public read" on public.contracts for select using (true);

create policy "own coaches" on public.coaches for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own careers" on public.careers for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Career-scoped rows: real rows (career_id null) are public; simulated rows belong to the career owner.
create function public.owns_career(_career uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.careers where id = _career and user_id = auth.uid())
$$;

create policy "read real or own" on public.matches for select using (career_id is null or public.owns_career(career_id));
create policy "write own" on public.matches for all to authenticated using (public.owns_career(career_id)) with check (public.owns_career(career_id));
create policy "read real or own" on public.standings for select using (career_id is null or public.owns_career(career_id));
create policy "write own" on public.standings for all to authenticated using (public.owns_career(career_id)) with check (public.owns_career(career_id));
create policy "read real or own" on public.transfers for select using (career_id is null or public.owns_career(career_id));
create policy "write own" on public.transfers for all to authenticated using (public.owns_career(career_id)) with check (public.owns_career(career_id));
create policy "read via match" on public.results for select using (
  exists (select 1 from public.matches m where m.id = match_id and (m.career_id is null or public.owns_career(m.career_id))));
create policy "write via match" on public.results for all to authenticated using (
  exists (select 1 from public.matches m where m.id = match_id and public.owns_career(m.career_id)));
