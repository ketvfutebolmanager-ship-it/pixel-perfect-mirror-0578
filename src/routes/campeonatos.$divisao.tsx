import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/AppShell";
import { getDivision } from "@/modules/competitions/divisions";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";

export const Route = createFileRoute("/campeonatos/$divisao")({
  loader: ({ params }) => {
    const division = getDivision(params.divisao);
    if (!division) throw notFound();
    return { division };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.division.name ?? "Campeonato";
    const desc = `${name} 2026: clubes e tabela da divisão.`;
    return { meta: [
      { title: `${name} 2026 — KE TV Football Manager` },
      { name: "description", content: desc },
      { property: "og:title", content: `${name} 2026 — KE TV Football Manager` },
      { property: "og:description", content: desc },
    ] };
  },
  component: Page,
});

function Page() {
  const { division } = Route.useLoaderData();
  const clubs = getClubsByDivision(division.name as BrazilianDivision);
  const groups = division.name === "Série D"
    ? [...new Set(clubs.map((club) => club.group).filter(Boolean))].sort()
    : [undefined];

  return (
    <>
      <PageHeader kicker={`Brasileirão ${division.season} · Nível ${division.level}`} title={division.name}>
        {division.format}
        <span className="mt-2 block text-xs text-muted-foreground">Clubes cadastrados nesta divisão. Classificação inicial sem resultados importados.</span>
      </PageHeader>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-2xl font-bold uppercase">Tabela · {division.name}</h2>
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{clubs.length} clubes</span>
      </div>
      {groups.map((group) => {
        const groupClubs = group ? clubs.filter((club) => club.group === group) : clubs;
        return (
          <section key={group ?? "geral"} className="mb-6 overflow-hidden rounded-md border border-border bg-card">
            {group && <h3 className="border-b border-border bg-muted px-4 py-3 font-display text-lg font-bold uppercase">Grupo {group.replace("A", "")}</h3>}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="bg-muted/80 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-3 text-center">Pos.</th><th className="px-3 py-3">Clube</th>
                    <th className="px-2 py-3 text-center">P</th><th className="px-2 py-3 text-center">J</th>
                    <th className="px-2 py-3 text-center">V</th><th className="px-2 py-3 text-center">E</th>
                    <th className="px-2 py-3 text-center">D</th><th className="px-2 py-3 text-center">GP</th>
                    <th className="px-2 py-3 text-center">GC</th><th className="px-2 py-3 text-center">SG</th>
                  </tr>
                </thead>
                <tbody>
                  {groupClubs.map((club, index) => (
                    <tr key={club.id} className="border-t border-border/70 transition-colors hover:bg-primary/5">
                      <td className="px-3 py-3 text-center font-bold tabular-nums text-muted-foreground">{index + 1}</td>
                      <td className="px-3 py-3"><div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black text-primary">{club.name.split(/\\s+/).map((part) => part[0]).slice(0, 3).join("")}</span>
                        <span className="font-semibold">{club.name}</span><span className="text-xs text-muted-foreground">{club.state}</span>
                      </div></td>
                      {[0, 0, 0, 0, 0, 0, 0, 0].map((value, cell) => <td key={cell} className="px-2 py-3 text-center tabular-nums">{value}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
      <p className="text-xs leading-relaxed text-muted-foreground">Esta é a tabela inicial dos clubes cadastrados, não a classificação oficial da CBF. Os indicadores estão zerados; serão atualizados quando calendário, partidas e resultados forem conectados ao sistema.</p>
    </>
  );
}
