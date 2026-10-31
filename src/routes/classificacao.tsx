import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";

export const Route = createFileRoute("/classificacao")({
  head: () => ({
    meta: [
      { title: "Classificação — KE TV Football Manager" },
      { name: "description", content: "Tabelas das Séries A, B, C e D." },
      { property: "og:title", content: "Classificação — KE TV Football Manager" },
      { property: "og:description", content: "Tabelas das Séries A, B, C e D." },
    ],
  }),
  component: Page,
});

const DIVISIONS: BrazilianDivision[] = ["Série A", "Série B", "Série C", "Série D"];

function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const clubs = getClubsByDivision(division);
  const groups = division === "Série D"
    ? [...new Set(clubs.map((club) => club.group).filter(Boolean))].sort()
    : [undefined];

  return (
    <>
      <PageHeader kicker="Competições · Temporada 2026" title="Classificação">
        Tabela de clubes cadastrados por divisão. Os números começam zerados e serão atualizados quando os resultados das partidas forem integrados.
      </PageHeader>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Selecionar divisão">
        {DIVISIONS.map((item) => (
          <button key={item} type="button" onClick={() => setDivision(item)} aria-pressed={division === item}
            className={`rounded-md border px-5 py-2.5 text-sm font-bold transition-colors ${division === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-2xl font-bold uppercase">{division} · 2026</h2>
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Tabela inicial · sem resultados</span>
      </div>
      {groups.map((group) => {
        const groupClubs = group ? clubs.filter((club) => club.group === group) : clubs;
        return (
          <section key={group ?? "unica"} className="mb-6 overflow-hidden rounded-md border border-border bg-card">
            {group && <h3 className="border-b border-border bg-muted px-4 py-3 font-display text-lg font-bold uppercase">Grupo {group.replace("A", "")}</h3>}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-muted/80 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-3 text-center">Pos.</th>
                    <th className="px-3 py-3">Clube</th>
                    <th className="px-2 py-3 text-center">P</th>
                    <th className="px-2 py-3 text-center">J</th>
                    <th className="px-2 py-3 text-center">V</th>
                    <th className="px-2 py-3 text-center">E</th>
                    <th className="px-2 py-3 text-center">D</th>
                    <th className="px-2 py-3 text-center">GP</th>
                    <th className="px-2 py-3 text-center">GC</th>
                    <th className="px-2 py-3 text-center">SG</th>
                  </tr>
                </thead>
                <tbody>
                  {groupClubs.map((club, index) => (
                    <tr key={club.id} className="border-t border-border/70 transition-colors hover:bg-primary/5">
                      <td className="px-3 py-3 text-center font-bold tabular-nums text-muted-foreground">{index + 1}</td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black text-primary">{club.name.split(/\\s+/).map((part) => part[0]).slice(0, 3).join("")}</span>
                          <span className="font-semibold">{club.name}</span>
                          <span className="text-xs text-muted-foreground">{club.state}</span>
                        </div>
                      </td>
                      {[0, 0, 0, 0, 0, 0, 0, 0].map((value, cell) => <td key={cell} className="px-2 py-3 text-center tabular-nums">{value}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
      <p className="text-xs leading-relaxed text-muted-foreground">Importante: esta é a tabela inicial de cadastro, não uma classificação oficial da CBF. Pontos, jogos, vitórias, empates, derrotas e gols estão zerados porque o calendário oficial e os resultados ainda não foram conectados ao simulador.</p>
    </>
  );
}
