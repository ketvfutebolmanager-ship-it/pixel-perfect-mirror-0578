import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import type { MatchResult } from "@/modules/matches/simulate";

const CREST_FILES: Record<string, string> = {
  "Athletico Paranaense":"Athletico Paranaense.png","Atlético Mineiro":"Atlético Mineiro.png",Bahia:"Bahia.png",Botafogo:"Botafogo.png",Chapecoense:"Chapecoense.png",Corinthians:"Corinthians.png",Coritiba:"Coritiba.png",Cruzeiro:"Cruzeiro.png",Flamengo:"Flamengo.png",Fluminense:"Fluminense.png","Grêmio":"Grêmio.png",Internacional:"Internacional.png",Mirassol:"Mirassol.png",Palmeiras:"Palmeiras.png","Red Bull Bragantino":"Red Bull Bragantino.png",Remo:"Remo.png",Santos:"Santos.png","São Paulo":"São Paulo.png","Vasco da Gama":"Vasco da Gama.png",Vitória:"Vitória.png"
};
const FOOTYLOGOS_SLUGS: Record<string, string> = {
  "América Mineiro":"america-mineiro","Athletic Club":"athletic","Atlético Goianiense":"atletico-goianiense","Avaí":"avai-fc","Botafogo de Ribeirão Preto":"botafogo-sp","Ceará":"ceara-sc","CRB":"crb","Criciúma":"criciuma","Novorizontino":"gremio-novorizontino","Operário Ferroviário":"operario-ferroviario","Botafogo da Paraíba":"botafogo-pb","Ferroviária":"ferroviaria","Inter de Limeira":"inter-de-limeira","Maranhão":"maranhao","Maringá":"maringa","Paysandu":"paysandu","Volta Redonda":"volta-redonda","Ypiranga":"ypiranga",
  "ABC":"abc-fc","ABECAT":"abecat-ouvidorense","Água Santa":"agua-santa","Águia de Marabá":"aguia-de-maraba","Altos":"altos","America-RJ":"america-rj","América-RN":"america-rn","Aparecidense":"aparecidense","Araguaína":"araguaina","ASA":"asa-al","Atlético-BA":"atletico-de-alagoinhas","Atlético-CE":"atletico-cearense","Azuriz":"azuriz","Betim":"betim","Blumenau":"blumenau","Brasil-RS":"brasil-de-pelotas","Brasiliense":"brasiliense","Capital":"capital-cf","Ceilândia":"ceilandia","Central":"central-pe","Cianorte":"cianorte","CRAC":"crac","CSA":"csa","CSE":"cse","Decisão":"decisao","Democrata GV":"democrata-gv","FC Cascavel":"fc-cascavel","Ferroviário":"ferroviario-ce","Fluminense-PI":"fluminense-pi","Galvez":"galvez","Gama":"gama","GAS":"gremio-atletico-sampaio","Goiatuba":"goiatuba","Guaporé":"guapore","Guarany de Bagé":"guarany-de-bage","Humaitá":"humaita-ac","IAPE":"iape","Iguatu":"iguatu","Imperatriz":"imperatriz","Ivinhema":"ivinhema","Independência":"independencia-ac","Inhumas":"inhumas","Jacuipense":"jacuipense","Joinville":"joinville","Juazeirense":"juazeirense","Lagarto":"lagarto","Laguna":"laguna-rn","Luverdense":"luverdense","Madureira":"madureira","Maguary":"maguary-pe","Manaus":"manaus","Manauara":"manauara","Marcílio Dias":"marcilio-dias","Maracanã":"maracana","Maricá":"marica","Mixto":"mixto","Monte Roraima":"monte-roraima","Moto Club":"moto-club-sao-luis","Nacional-AM":"nacional-am","Noroeste":"noroeste","Nova Iguaçu":"nova-iguacu","Operário-MS":"operario-ms","Operário-MT":"varzea-grande","Oratório":"oratorio","Parnahyba":"parnahyba","Piauí":"piaui","Porto":"porto-ba","Porto Velho":"porto-velho","Portuguesa":"portuguesa-sp","Portuguesa-RJ":"portuguesa-rj","Pouso Alegre":"pouso-alegre","Primavera":"primavera","Real Noroeste":"real-noroeste","Retrô":"retro","Rio Branco-ES":"rio-branco-es","Sampaio Corrêa-MA":"sampaio-correa-ma","Sampaio Corrêa-RJ":"sampaio-correa-rj","Santa Catarina":"santa-catarina","São José-RS":"sao-jose-rs","São Joseense":"sao-joseense","São Luiz":"sao-luiz","São Raimundo-RR":"sao-raimundo-rr","Serra Branca":"serra-branca","Sergipe":"sergipe","Sousa":"sousa","Tirol":"tirol","Tocantinópolis":"tocantinopolis","Tombense":"tombense","Treze":"treze","Trem":"trem","Tuna Luso":"tuna-luso","Uberlândia":"uberlandia","União Rondonópolis":"uniao-rondonopolis","Velo Clube":"velo-clube","Vitória-ES":"vitoria-es","XV de Piracicaba":"xv-de-piracicaba"
};
function logoSlug(name: string) {
  return FOOTYLOGOS_SLUGS[name] ?? name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
const VERIFIED_D_CRESTS: Record<string, string[]> = {
  "ASA": ["https://www.footylogos.com/dls/logo/asa-al.png"],
  "Atlético-BA": ["https://www.footylogos.com/dls/logo/rgba-v1/atletico-de-alagoinhas.png"],
  "Betim": ["https://www.footylogos.com/dls/logo/rgba-v1/betim.png", "https://www.footylogos.com/dls/logo/betim.png"],
  "Brasil-RS": ["https://www.footylogos.com/dls/logo/rgba-v1/brasil-de-pelotas.png"],
  "Democrata GV": ["https://www.footylogos.com/dls/logo/rgba-v1/democrata-gv.png"],
  "Jacuipense": ["https://www.footylogos.com/dls/logo/rgba-v1/jacuipense.png"],
  "Portuguesa": ["https://www.footylogos.com/dls/logo/rgba-v1/portuguesa.png", "https://www.footylogos.com/dls/logo/portuguesa.png"],
  "São José-RS": ["https://www.footylogos.com/dls/logo/sao-jose-rs.png"],
  "São Luiz": ["https://www.footylogos.com/dls/logo/sao-luiz.png"],
};
function crestSources(name: string) {
  const file = CREST_FILES[name];
  const slug = logoSlug(name);
  return [
    ...(VERIFIED_D_CRESTS[name] ?? []),
    ...(file ? [`https://raw.githubusercontent.com/Lobobinho/Escudos-dos-Clubes-do-Brasileirao-2026/master/${encodeURIComponent(file)}`] : []),
    `https://www.footylogos.com/dls/logo/${slug}.png`,
    `https://www.footylogos.com/dls/logo/rgba-v1/${slug}.png`,
  ];
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
  getClubsByDivision(division).filter((club) => !groupName || club.group === groupName)
    .forEach((club) => standings.set(club.id, { played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }));
  try {
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);
      if (!key?.startsWith(prefix) || (groupName && !key.endsWith(":" + groupName)) || (!groupName && division === "Série D")) continue;
      let results: unknown;
      try { results = JSON.parse(window.localStorage.getItem(key) ?? "{}"); } catch { continue; }
      if (!results || typeof results !== "object" || Array.isArray(results)) continue;
      Object.values(results as Record<string, unknown>).forEach((raw) => {
        if (!raw || typeof raw !== "object") return;
        const match = raw as Partial<MatchResult>;
        if (!match.home?.id || !match.away?.id || !Number.isFinite(match.homeGoals) || !Number.isFinite(match.awayGoals)) return;
        const home = standings.get(match.home.id), away = standings.get(match.away.id);
        if (!home || !away) return;
        home.played += 1; away.played += 1;
        home.goalsFor += match.homeGoals!; home.goalsAgainst += match.awayGoals!;
        away.goalsFor += match.awayGoals!; away.goalsAgainst += match.homeGoals!;
        if (match.homeGoals! > match.awayGoals!) { home.wins += 1; home.points += 3; away.losses += 1; }
        else if (match.awayGoals! > match.homeGoals!) { away.wins += 1; away.points += 3; home.losses += 1; }
        else { home.draws += 1; away.draws += 1; home.points += 1; away.points += 1; }
      });
    }
  } catch { /* A tabela inicial continua disponível mesmo sem acesso ao armazenamento local. */ }
  return standings;
}


function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const [, setRefreshTick] = useState(0);
  useEffect(() => {
    const refresh = () => setRefreshTick((value) => value + 1);
    const timer = window.setInterval(refresh, 2000);
    window.addEventListener("storage", refresh);
    window.addEventListener("focus", refresh);
    window.addEventListener("pageshow", refresh);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("storage", refresh);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("pageshow", refresh);
    };
  }, []);
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
          const empty = { played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }; const x = stats.get(a.id) ?? empty; const y = stats.get(b.id) ?? empty;
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
                    const row = stats.get(club.id) ?? { played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 };
                    const highlighted = division === "Série A" ? index >= orderedClubs.length - 4 : division !== "Série D" && (index < 4 || index >= orderedClubs.length - 4);
                    return <tr key={club.id} className={`border-t border-border/70 transition-colors hover:bg-primary/5 ${highlighted ? (division === "Série A" || index >= orderedClubs.length - 4 ? "bg-red-500/10" : "bg-emerald-500/10") : ""}`}>
                      <td className="px-3 py-3 text-center font-bold tabular-nums text-muted-foreground">{index + 1}</td>
                      <td className="px-3 py-3"><div className="flex items-center gap-3">
                        <img src={crestSources(club.name)[0]} data-source-index="0" alt={`Escudo do ${club.name}`} loading="lazy" style={club.name === "Maringá" ? { backgroundColor: "#ffffff", padding: "4px", borderRadius: "9999px", filter: "none" } : undefined} onError={(event) => {
                          const image = event.currentTarget;
                          const sources = crestSources(club.name);
                          const next = Number(image.dataset.sourceIndex ?? "0") + 1;
                          if (next < sources.length) {
                            image.dataset.sourceIndex = String(next);
                            image.src = sources[next];
                            return;
                          }
                          image.style.display = "none";
                          const fallback = image.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "flex";
                        }} className={`h-8 w-8 shrink-0 object-contain ${club.name === "Maringá" ? "rounded-full bg-white p-1" : ""}`} />
                        <span style={{ display: "none" }} className="h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black text-primary">{club.name.split(/\\s+/).map((part) => part[0]).slice(0, 3).join("")}</span>
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
