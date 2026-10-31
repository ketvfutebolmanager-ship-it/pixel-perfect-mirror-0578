import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { BRAZILIAN_CLUBS_2026 } from "@/modules/clubs/brazilian-clubs-2026";
import { VERIFIED_PLAYERS_2026 } from "@/modules/players/database";
import { makeContract, type ContractYears, type DismissalFinePercent, type PlayerContract } from "@/modules/transfers/contracts";

export const Route = createFileRoute("/transferencias")({
  head: () => ({ meta: [{ title: "Transferências — KE TV Football Manager" }, { name: "description", content: "Mercado de jogadores, contratações e contratos." }] }),
  component: Page,
});

function Page() {
  const [career, setCareer] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem("ketvfm-career") ?? "null") as { club: string } | null; } catch { return null; }
  });
  const club = BRAZILIAN_CLUBS_2026.find(c => c.name === career?.club);
  const market = useMemo(() => VERIFIED_PLAYERS_2026.filter(p => p.clubId !== club?.id), [club]);
  const [playerId, setPlayerId] = useState("");
  const [years, setYears] = useState<ContractYears>(2);
  const [fine, setFine] = useState<DismissalFinePercent>(20);
  const [contracts, setContracts] = useState<PlayerContract[]>(() => {
    try { return JSON.parse(window.localStorage.getItem("ketvfm-contracts") ?? "[]") as PlayerContract[]; } catch { return []; }
  });
  const [notice, setNotice] = useState("");
  function sign() {
    const player = market.find(p => p.id === playerId);
    if (!player || !club) { setNotice("Selecione um atleta disponível e tenha uma carreira ativa."); return; }
    const contract = makeContract({ ...player, clubId: club.id, clubName: club.name }, years, fine);
    const next = [...contracts, contract];
    window.localStorage.setItem("ketvfm-contracts", JSON.stringify(next));
    setContracts(next);
    setNotice(`${player.name} contratado por ${years} ano(s).`);
    setPlayerId("");
  }
  return (
    <>
      <PageHeader kicker="Mercado · Negociações" title="Transferências">Contrate atletas, defina a duração do vínculo e consulte os contratos do seu clube.</PageHeader>
      <section className="grid gap-4 rounded-md border border-border bg-card p-5 lg:grid-cols-2">
        <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Clube comprador</p><h2 className="mt-2 font-display text-2xl font-bold uppercase">{club?.name ?? "Nenhuma carreira ativa"}</h2><p className="mt-1 text-sm text-muted-foreground">As contratações serão vinculadas à carreira salva neste navegador.</p></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold">Duração do contrato<select value={years} onChange={e => setYears(Number(e.target.value) as ContractYears)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value={1}>1 ano</option><option value={2}>2 anos</option><option value={3}>3 anos</option></select></label>
          <label className="text-sm font-semibold">Multa por expulsão<select value={fine} onChange={e => setFine(Number(e.target.value) as DismissalFinePercent)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value={10}>10%</option><option value={20}>20%</option><option value={30}>30%</option></select></label>
        </div>
        <div className="lg:col-span-2"><label className="text-sm font-semibold">Jogador disponível<select value={playerId} onChange={e => setPlayerId(e.target.value)} disabled={!market.length || !club} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 disabled:opacity-50"><option value="">{market.length ? "Selecione um jogador" : "Mercado aguardando importação dos elencos"}</option>{market.map(p => <option key={p.id} value={p.id}>{p.name} · {p.clubName} · {p.position}</option>)}</select></label><button type="button" onClick={sign} disabled={!playerId || !club} className="mt-3 rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground disabled:opacity-40">Oferecer contrato e contratar</button>{notice && <p role="status" className="mt-2 text-sm text-primary">{notice}</p>}</div>
      </section>
      <section className="mt-6 rounded-md border border-border bg-card p-5"><h2 className="font-display text-xl font-bold uppercase">Contratos do clube · {contracts.length}</h2>{contracts.length ? <div className="mt-3 space-y-2">{contracts.map(c => <article key={c.id} className="flex flex-wrap items-center justify-between gap-3 rounded border border-border p-3"><div><p className="font-semibold">{c.playerName}</p><p className="text-xs text-muted-foreground">{c.years} ano(s) · até {c.expiresAt} · multa disciplinar {c.dismissalFinePercent}%</p></div><span className="rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{c.status === "active" ? "Ativo" : c.status}</span></article>)}</div> : <p className="mt-2 text-sm text-muted-foreground">Nenhum contrato registrado. Os contratos serão liberados assim que os elencos verificados forem importados.</p>}</section>
      <p className="mt-4 text-xs text-muted-foreground">Nesta etapa, os contratos ficam salvos localmente. A multa é registrada como cláusula disciplinar, mas ainda não é descontada automaticamente: a integração com cartões e folha salarial será feita junto ao motor de partidas.</p>
    </>
  );
}
