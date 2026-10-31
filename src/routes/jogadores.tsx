import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import { PLAYER_DATA_AS_OF, PLAYER_DATA_STATUS, VERIFIED_PLAYERS_2026 } from "@/modules/players/database";

export const Route = createFileRoute("/jogadores")({
  head: () => ({ meta: [{ title: "Jogadores — KE TV Football Manager" }, { name: "description", content: "Elencos e estatísticas individuais dos jogadores." }] }),
  component: Page,
});

const divisions: BrazilianDivision[] = ["Série A", "Série B", "Série C", "Série D"];

function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const [clubId, setClubId] = useState("all");
  const clubs = getClubsByDivision(division);
  const players = useMemo(() => VERIFIED_PLAYERS_2026.filter(p => p.division === division && (clubId === "all" || p.clubId === clubId)), [division, clubId]);
  return (
    <>
      <PageHeader kicker="Mercado · Elencos" title="Jogadores">Consulte os atletas por clube e acompanhe o perfil e as estatísticas individuais.</PageHeader>
      <section className="mb-5 grid gap-3 rounded-md border border-border bg-card p-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Divisão<select value={division} onChange={e => { setDivision(e.target.value as BrazilianDivision); setClubId("all"); }} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="Série A">Série A</option><option value="Série B">Série B</option><option value="Série C">Série C</option><option value="Série D">Série D</option></select></label>
        <label className="text-sm font-semibold">Clube<select value={clubId} onChange={e => setClubId(e.target.value)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="all">Todos os clubes</option>{clubs.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
      </section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h2 className="font-display text-xl font-bold uppercase">{division} · {players.length} jogadores cadastrados</h2><span className="text-xs text-muted-foreground">Referência: {PLAYER_DATA_AS_OF}</span></div>
      {players.length ? <div className="overflow-x-auto rounded-md border border-border bg-card"><table className="w-full min-w-[650px] text-sm"><thead className="bg-muted text-left text-xs uppercase"><tr><th className="p-3">Jogador</th><th className="p-3">Clube</th><th className="p-3">Posição</th><th className="p-3">Idade</th><th className="p-3">Camisa</th></tr></thead><tbody>{players.map(p => <tr key={p.id} className="border-t border-border"><td className="p-3 font-semibold">{p.name}</td><td className="p-3">{p.clubName}</td><td className="p-3">{p.position}</td><td className="p-3">{p.age ?? "—"}</td><td className="p-3">{p.shirtNumber ?? "—"}</td></tr>)}</tbody></table></div> : <section className="rounded-md border border-dashed border-border bg-card p-6"><h2 className="font-display text-xl font-bold uppercase">Elencos aguardando importação verificada</h2><p className="mt-2 text-sm text-muted-foreground">A tela já permite filtrar por divisão e clube. A base de atletas ainda não foi carregada: não vou inventar nomes, posições ou estatísticas. Quando o cadastro oficial for importado, os jogadores aparecerão aqui e seus perfis individuais poderão ser abertos.</p><p className="mt-3 text-xs text-muted-foreground">Status da base: {PLAYER_DATA_STATUS}</p></section>}
    </>
  );
}
