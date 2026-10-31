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

function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const [clubId, setClubId] = useState("all");
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const clubs = getClubsByDivision(division);
  const players = useMemo(() => VERIFIED_PLAYERS_2026.filter(p => p.division === division && (clubId === "all" || p.clubId === clubId)), [division, clubId]);
  const selected = players.find(player => player.id === selectedPlayer);

  return (
    <>
      <PageHeader kicker="Mercado · Elencos" title="Jogadores">Selecione o clube para abrir os atletas. Clique em um jogador para consultar suas estatísticas individuais.</PageHeader>
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
            <thead className="bg-muted text-left text-xs uppercase"><tr><th className="p-3">Jogador</th><th className="p-3">Clube</th><th className="p-3">Posição</th><th className="p-3">Idade</th><th className="p-3">Camisa</th><th className="p-3">Perfil</th></tr></thead>
            <tbody>{players.map(p => <tr key={p.id} className="border-t border-border">
              <td className="p-3 font-semibold">{p.name}</td><td className="p-3">{p.clubName}</td><td className="p-3">{p.position}</td><td className="p-3">{p.age ?? "—"}</td><td className="p-3">{p.shirtNumber ?? "—"}</td>
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
