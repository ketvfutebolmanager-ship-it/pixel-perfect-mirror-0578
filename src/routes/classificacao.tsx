import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import type { MatchResult } from "@/modules/matches/simulate";

const CREST_FILES: Record<string, string> = {
  "Athletico Paranaense":"Athletico Paranaense.png","Atlético Mineiro":"Atlético Mineiro.png",Bahia:"Bahia.png",Botafogo:"Botafogo.png",Chapecoense:"Chapecoense.png",Corinthians:"Corinthians.png",Coritiba:"Coritiba.png",Cruzeiro:"Cruzeiro.png",Flamengo:"Flamengo.png",Fluminense:"Fluminense.png","Grêmio":"Grêmio.png",Internacional:"Internacional.png",Mirassol:"Mirassol.png",Palmeiras:"Palmeiras.png","Red Bull Bragantino":"Red Bull Bragantino.png",Remo:"Remo.png",Santos:"Santos.png","São Paulo":"São Paulo.png","Vasco da Gama":"Vasco da Gama.png",Vitória:"Vitória.png"
};
function crestUrl(name: string) {
  const file = CREST_FILES[name];
  return file ? `https://raw.githubusercontent.com/Lobobinho/Escudos-dos-Clubes-do-Brasileirao-2026/master/${encodeURIComponent(file)}` : null;
}

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
type ClubStanding = { played: number; wins: number; draws: number; losses: number; goalsFor: number; goalsAgainst: number; points: number };
function readStandings(division: BrazilianDivision, season: number, groupName?: string): Map<string, ClubStanding> {
  const prefix = "ketvfm-season-results:" + division + ":" + season + ":";
  const standings = new Map<string, ClubStanding>();
  getClubsByDivision(division)
    .filter((club) => !groupName || club.group === groupName)
    .forEach((club) => standings.set(club.id, { played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }));
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (!key?.startsWith(prefix) || (groupName && !key.endsWith(":" + groupName)) || (!groupName && division === "Série D")) continue;
    let results: Record<string, MatchResult> = {};
    try { results = JSON.parse(window.localStorage.getItem(key) ?? "{}"); } catch { results = {}; }
    Object.values(results).forEach((match) => {
      const home = standings.get(match.home.id);
      const away = standings.get(match.away.id);
      if (!home || !away) return;
      home.played += 1; away.played += 1;
      home.goalsFor += match.homeGoals; home.goalsAgainst += match.awayGoals;
      away.goalsFor += match.awayGoals; away.goalsAgainst += match.homeGoals;
      if (match.homeGoals > match.awayGoals) { home.wins += 1; home.points += 3; away.losses += 1; }
      else if (match.awayGoals > match.homeGoals) { away.wins += 1; away.points += 3; home.losses += 1; }
      else { home.draws += 1; away.draws += 1; home.points += 1; away.points += 1; }
    });
  }
  return standings;
}


function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const clubs = getClubsByDivision(division);
  const groups = division === "Série D"
    ? [...new Set(clubs.map((club) => club.group).filter(Boolean))].sort()
    : [undefined];

  return (
    <>
      <PageHeader kicker="Competições · Temporada 2026" title="Classificação">
        Classificação dinâmica: pontos, jogos, vitórias, empates, derrotas e saldo atualizados pelos resultados salvos da temporada.
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
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Resultados da temporada</span>
      </div>
      {groups.map((group) => {
        const groupClubs = group ? clubs.filter((club) => club.group === group) : clubs;
        const stats = readStandings(division, 2026, group);
        const orderedClubs = [...groupClubs].sort((a, b) => {
          const x = stats.get(a.id)!; const y = stats.get(b.id)!;
          return y.points - x.points || (y.goalsFor - y.goalsAgainst) - (x.goalsFor - x.goalsAgainst) || y.goalsFor - x.goalsFor || y.wins - x.wins || a.name.localeCompare(b.name, "pt-BR");
        });
        return (
          <section key={group ?? "unica"} className="mb-6 overflow-hidden rounded-md border border-border bg-card">
            {group && <h3 className="border-b border-border bg-muted px-4 py-3 font-display text-lg font-bold uppercase">Grupo {group.replace("A", "")}</h3>}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
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
                  {orderedClubs.map((club, index) => {
                    const row = stats.get(club.id)!;
                    const highlighted = division === "Série A" ? index >= orderedClubs.length - 4 : division !== "Série D" && (index < 4 || index >= orderedClubs.length - 4);
                    return <tr key={club.id} className={`border-t border-border/70 transition-colors hover:bg-primary/5 ${highlighted ? (division === "Série A" || index >= orderedClubs.length - 4 ? "bg-red-500/10" : "bg-emerald-500/10") : ""}`}>
                      <td className="px-3 py-3 text-center font-bold tabular-nums text-muted-foreground">{index + 1}</td>
                      <td className="px-3 py-3"><div className="flex items-center gap-3">
                        {crestUrl(club.name) ? <img src={crestUrl(club.name)!} alt={`Escudo do ${club.name}`} className="h-8 w-8 shrink-0 object-contain" /> : <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black text-primary">{club.name.split(/\\s+/).map((part) => part[0]).slice(0, 3).join("")}</span>}
                        <span className="font-semibold">{club.name}</span><span className="text-xs text-muted-foreground">{club.state}</span>
                      </div></td>
                      {[row.points,row.played,row.wins,row.draws,row.losses,row.goalsFor,row.goalsAgainst,row.goalsFor-row.goalsAgainst].map((value, cell) => <td key={cell} className="px-2 py-3 text-center tabular-nums">{value}</td>)}
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
      <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
        {division === "Série A" ? <><span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-emerald-500/40"/> Zona de classificação continental (a definir pelo regulamento)</span><span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-red-500/40"/> Zona de rebaixamento (4 últimos)</span></> : division === "Série B" || division === "Série C" ? <><span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-emerald-500/40"/> Zona de acesso (4 primeiros)</span><span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-red-500/40"/> Zona de rebaixamento (4 últimos)</span></> : <span>A Série D é organizada por grupos e fases; as zonas serão aplicadas conforme o regulamento específico.</span>}
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">A classificação considera os resultados simulados e salvos no modo carreira deste navegador.</p>
    </>
  );
}
