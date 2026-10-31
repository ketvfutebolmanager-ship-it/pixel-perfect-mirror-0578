import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import { VERIFIED_PLAYERS_2026 } from "@/modules/players/database";

export const Route = createFileRoute("/clubes")({
  head: () => ({ meta: [
    { title: "Clubes — KE TV Futebol Manager" },
    { name: "description", content: "Clubes brasileiros, elencos e estatísticas." },
  ] }),
  component: Page,
});

const divisions: BrazilianDivision[] = ["Série A", "Série B", "Série C", "Série D"];

function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const [search, setSearch] = useState("");
  const clubs = useMemo(() => getClubsByDivision(division).filter(club =>
    club.name.toLocaleLowerCase("pt-BR").includes(search.toLocaleLowerCase("pt-BR"))
  ), [division, search]);

  return (
    <>
      <PageHeader kicker="Competições · Clubes" title="Clubes">
        Escolha uma divisão e abra um clube para consultar o elenco cadastrado e acessar as estatísticas dos atletas.
      </PageHeader>
      <div className="mb-5 grid gap-3 sm:grid-cols-[1fr_2fr]">
        <label className="text-sm font-semibold">Divisão
          <select value={division} onChange={e => setDivision(e.target.value as BrazilianDivision)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3">
            {divisions.map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold">Buscar clube
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Digite o nome do clube..." className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3" />
        </label>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-xl font-bold uppercase">{division}</h2>
        <span className="text-xs text-muted-foreground">{clubs.length} clubes</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map(club => {
          const count = VERIFIED_PLAYERS_2026.filter(player => player.clubId === club.id).length;
          return (
            <article key={club.id} className="rounded-md border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-3">
                <div><h3 className="font-display text-lg font-bold uppercase">{club.name}</h3><p className="text-xs text-muted-foreground">{club.state}{club.group ? ` · Grupo ${club.group.replace("A", "")}` : ""}</p></div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-black text-primary">{club.name.split(/\\s+/).map(part => part[0]).slice(0,3).join("")}</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">{count ? `${count} atletas cadastrados` : "Elenco aguardando cadastro"}</span>
                <Link to="/jogadores" className="rounded-md bg-primary px-3 py-2 text-xs font-bold text-primary-foreground">Ver elenco e estatísticas</Link>
              </div>
            </article>
          );
        })}
      </div>
      {!clubs.length && <p className="rounded-md border border-dashed border-border p-6 text-sm text-muted-foreground">Nenhum clube encontrado com esse nome.</p>}
    </>
  );
}
