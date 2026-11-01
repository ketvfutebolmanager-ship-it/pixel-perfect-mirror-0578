import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import { PLAYER_DATA_AS_OF, PLAYER_DATA_STATUS, VERIFIED_PLAYERS_2026 } from "@/modules/players/database";

export const Route = createFileRoute("/jogadores")({
  head: () => ({ meta: [{ title: "Jogadores — KE TV Futebol Manager" }, { name: "description", content: "Elencos e estatísticas individuais dos jogadores." }] }),
  component: Page,
});

const divisions: BrazilianDivision[] = ["Série A", "Série B", "Série C", "Série D"];
type PlayerMorale = Record<string, number>;
type Formation = "4-4-2" | "4-3-3" | "3-5-2" | "4-2-3-1";
const PLAYER_MORALE_KEY = "ketvfm-player-morale";
function readPlayerMorale(): PlayerMorale {
  try { return JSON.parse(window.localStorage.getItem(PLAYER_MORALE_KEY) ?? "{}") as PlayerMorale; }
  catch { return {}; }
}
function moraleLabel(value: number) { return value >= 80 ? "Excelente" : value >= 65 ? "Boa" : value >= 45 ? "Regular" : value >= 25 ? "Baixa" : "Crítica"; }
function formationRows(formation: Formation): string[][] {
  if (formation === "4-4-2") return [["GOL"], ["LAT", "ZAG", "ZAG", "LAT"], ["MEI", "VOL", "VOL", "MEI"], ["ATA", "ATA"]];
  if (formation === "3-5-2") return [["GOL"], ["ZAG", "ZAG", "ZAG"], ["LAT", "VOL", "MEI", "VOL", "LAT"], ["ATA", "ATA"]];
  if (formation === "4-2-3-1") return [["GOL"], ["LAT", "ZAG", "ZAG", "LAT"], ["VOL", "VOL"], ["MEI", "MEI", "MEI"], ["ATA"]];
  return [["GOL"], ["LAT", "ZAG", "ZAG", "LAT"], ["VOL", "MEI", "MEI"], ["ATA", "ATA", "ATA"]];
}

function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const [clubId, setClubId] = useState("all");
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [formation, setFormation] = useState<Formation>("4-3-3");
  const [playerMorale, setPlayerMorale] = useState<PlayerMorale>(() => readPlayerMorale());
  const updateMorale = (id: string, value: number) => {
    const next = { ...playerMorale, [id]: Math.max(0, Math.min(100, Math.round(value))) };
    setPlayerMorale(next);
    window.localStorage.setItem(PLAYER_MORALE_KEY, JSON.stringify(next));
  };
  const clubs = getClubsByDivision(division);
  const players = useMemo(() => VERIFIED_PLAYERS_2026.filter(p => p.division === division && (clubId === "all" || p.clubId === clubId)), [division, clubId]);
  const selected = players.find(player => player.id === selectedPlayer);
  const lineupUsed = new Set<string>();
  const tacticalLineup = formationRows(formation).map(row => row.map(role => {
    const player = players.find(candidate => !lineupUsed.has(candidate.id) && (candidate.position === role || (role === "LAT" && candidate.position === "DEF")));
    if (player) lineupUsed.add(player.id);
    return { role, player };
  }));

  return (
    <>
      <PageHeader kicker="Mercado · Elencos" title="Jogadores">Selecione o clube para abrir os atletas. Clique em um jogador para consultar suas estatísticas individuais.</PageHeader>
      <section className="mb-5 rounded-md border border-primary/50 bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-widest text-primary">Painel do treinador</p><h2 className="mt-1 font-display text-2xl font-black uppercase">Escalação, posições e moral</h2><p className="mt-1 text-sm text-muted-foreground">Acesse este menu quando quiser analisar os atletas e ajustar a moral individual.</p></div>
          <label className="text-sm font-semibold">Esquema tático<select value={formation} onChange={e => setFormation(e.target.value as Formation)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2"><option>4-4-2</option><option>4-3-3</option><option>3-5-2</option><option>4-2-3-1</option></select></label>
        </div>
        <div className="mt-4 rounded-xl border-2 border-emerald-800 bg-emerald-950 p-3 sm:p-5"><div className="space-y-3 rounded-lg border border-emerald-700/70 bg-emerald-900/30 p-3">
          {tacticalLineup.map((row,rowIndex) => <div key={rowIndex} className="flex flex-wrap justify-center gap-2 sm:gap-4">{row.map((slot,index) => <div key={rowIndex+"-"+index} className="flex min-w-[90px] flex-col items-center rounded-md border border-emerald-500/50 bg-emerald-800/80 px-2 py-2 text-center"><span className="text-[10px] font-black text-emerald-200">{slot.role}</span><strong className="mt-1 text-xs text-white">{slot.player?.name ?? "A definir"}</strong>{slot.player && <span className="text-[10px] text-emerald-100">Moral {playerMorale[slot.player.id] ?? 65}/100</span>}</div>)}</div>)}
        </div></div>
        <p className="mt-2 text-xs text-muted-foreground">O campo é uma representação por posição. Atletas sem cadastro compatível aparecem como “A definir”.</p>
      </section>
      <section className="mb-5 grid gap-3 rounded-md border border-border bg-card p-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Divisão
          <select value={division} onChange={e => { setDivision(e.target.value as BrazilianDivision); setClubId("all"); setSelectedPlayer(null); }} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3">
            {divisions.map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold">Clube
          <select value={clubId} onChange={e => { setClubId(e.target.value); setSelectedPlayer(null); }} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3">
            <option value="all">Todos os clubes</option>{clubs.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
      </section>
      <div className="mb-4 rounded-md border border-amber-500/40 bg-amber-500/5 p-3 text-sm">
        <strong>Importação inicial parcial:</strong> 30 atletas com estatísticas identificadas nas Séries A e B. Os demais elencos ainda serão conferidos; esta lista não representa os grupos completos.
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-xl font-bold uppercase">{division} · {players.length} atletas cadastrados</h2>
        <span className="text-xs text-muted-foreground">Dados: {PLAYER_DATA_AS_OF}</span>
      </div>
      {players.length ? <>
        <div className="overflow-x-auto rounded-md border border-border bg-card">
          <table className="w-full min-w-[620px] text-sm">
            <thead className="bg-muted text-left text-xs uppercase"><tr><th className="p-3">Jogador</th><th className="p-3">Clube</th><th className="p-3">Posição</th><th className="p-3">Idade</th><th className="p-3">Camisa</th><th className="p-3">Moral</th><th className="p-3">Ajustar</th><th className="p-3">Perfil</th></tr></thead>
            <tbody>{players.map(p => <tr key={p.id} className="border-t border-border">
              <td className="p-3 font-semibold">{p.name}</td><td className="p-3">{p.clubName}</td><td className="p-3">{p.position}</td><td className="p-3">{p.age ?? "—"}</td><td className="p-3">{p.shirtNumber ?? "—"}</td><td className="p-3"><strong>{playerMorale[p.id] ?? 65}/100</strong><div className="text-xs text-muted-foreground">{moraleLabel(playerMorale[p.id] ?? 65)}</div></td><td className="p-3"><input aria-label={"Moral de " + p.name} type="number" min="0" max="100" value={playerMorale[p.id] ?? 65} onChange={e => updateMorale(p.id, Number(e.target.value))} className="w-20 rounded border border-input bg-background px-2 py-1" /></td>
              <td className="p-3"><button type="button" onClick={() => setSelectedPlayer(selectedPlayer === p.id ? null : p.id)} className="rounded border border-primary px-3 py-1.5 text-xs font-bold text-primary">{selectedPlayer === p.id ? "Fechar" : "Ver estatísticas"}</button></td>
            </tr>)}</tbody>
          </table>
        </div>
        {selected && <section className="mt-4 rounded-md border border-primary/40 bg-card p-5">
          <div className="flex flex-wrap items-start justify-between gap-2"><div><p className="text-xs font-bold uppercase tracking-widest text-primary">Perfil do atleta</p><h3 className="mt-1 font-display text-2xl font-bold uppercase">{selected.name}</h3><p className="text-sm text-muted-foreground">{selected.clubName} · {selected.position}</p></div><span className="rounded bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Temporada 2026</span></div>
          {selected.seasonStats ? <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Jogos", selected.seasonStats.appearances], ["Minutos", selected.seasonStats.minutes], ["Gols", selected.seasonStats.goals], ["Assistências", selected.seasonStats.assists],
              ["Amarelos", selected.seasonStats.yellowCards], ["2º amarelo", selected.seasonStats.secondYellowCards], ["Vermelhos", selected.seasonStats.redCards],
            ].map(([label,value]) => <div key={label} className="rounded border border-border p-3"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-1 font-display text-2xl font-bold tabular-nums">{value}</p></div>)}
          </div> : <p className="mt-4 text-sm text-muted-foreground">Ainda não há estatísticas de temporada verificadas para este atleta.</p>}
          <p className="mt-4 text-xs text-muted-foreground">Fonte: {selected.source} · Conferido em {selected.verifiedAt}</p>
        </section>}
      </> : <section className="rounded-md border border-dashed border-border bg-card p-6">
        <h2 className="font-display text-xl font-bold uppercase">Elencos aguardando importação</h2>
        <p className="mt-2 text-sm text-muted-foreground">Os filtros por divisão e clube e a abertura do perfil individual já estão preparados. A base de atletas verificados ainda não foi carregada nesta divisão; não vou inventar jogadores ou estatísticas.</p>
        <p className="mt-3 text-xs text-muted-foreground">Status da base: {PLAYER_DATA_STATUS}</p>
      </section>}
    </>
  );
}
