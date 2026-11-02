import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { BRAZILIAN_CLUBS_2026 } from "@/modules/clubs/brazilian-clubs-2026";
import { VERIFIED_PLAYERS_2026 } from "@/modules/players/database";
import { estimatePlayerMarketValue, makeContract, type ContractYears, type DismissalFinePercent, type PlayerContract } from "@/modules/transfers/contracts";
import { PLAYER_CONTRACTS_KEY, readPlayerContracts } from "@/modules/transfers/roster";

export const Route = createFileRoute("/transferencias")({
  head: () => ({ meta: [{ title: "Transferências — KE TV Football Manager" }, { name: "description", content: "Mercado de jogadores, propostas de compra e empréstimo." }] }),
  component: Page,
});

type Offer = { id: string; playerId: string; playerName: string; fromClubId: string; fromClubName: string; toClubId: string; toClubName: string; type: "purchase" | "loan"; amount: number; status: "pending" | "accepted" | "rejected"; direction: "sent" | "received"; createdAt: string; loanMonths?: number };
const OFFERS_KEY = "ketvfm-transfer-offers";
const LOANS_KEY = "ketvfm-player-loans";
function readOffers(): Offer[] { try { const value = JSON.parse(window.localStorage.getItem(OFFERS_KEY) ?? "[]"); return Array.isArray(value) ? value : []; } catch { return []; } }
function money(value: number) { return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }); }
function windowStatus(date = new Date()) {
  const month = date.getMonth() + 1;
  const open = [12, 1, 6, 7].includes(month);
  const next = month < 6 ? "junho e julho" : month < 12 ? "dezembro e janeiro" : "janeiro";
  return { open, label: open ? "Janela aberta" : "Janela fechada", next };
}

function Page() {
  const [career] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem("ketvfm-career") ?? "null") as { club: string; season?: number; coach?: string } | null; } catch { return null; }
  });
  const club = BRAZILIAN_CLUBS_2026.find(c => c.name === career?.club);
  const [playerId, setPlayerId] = useState("");
  const [years, setYears] = useState<ContractYears>(2);
  const [fine, setFine] = useState<DismissalFinePercent>(20);
  const [offerType, setOfferType] = useState<"purchase" | "loan">("purchase");
  const [amount, setAmount] = useState("5000000");
  const [loanMonths, setLoanMonths] = useState("6");
  const [contracts, setContracts] = useState<PlayerContract[]>(() => readPlayerContracts());
  const [offers, setOffers] = useState<Offer[]>(() => readOffers());
  const [notice, setNotice] = useState("");
  const windowInfo = windowStatus();
  const signedIds = new Set(contracts.filter(contract => contract.status === "active").map(contract => contract.playerId));
  const market = VERIFIED_PLAYERS_2026.filter(p => p.clubId !== club?.id && !signedIds.has(p.id));
  const ownPlayers = VERIFIED_PLAYERS_2026.filter(p => p.clubId === club?.id || contracts.some(c => c.playerId === p.id && c.clubId === club?.id && c.status === "active"));
  const pendingReceived = offers.filter(o => o.direction === "received" && o.status === "pending");
  const pendingSent = offers.filter(o => o.direction === "sent");
  useEffect(() => {
    if (!windowInfo.open || !club || ownPlayers.length === 0) return;
    const generationKey = "ketvfm-ai-offers:" + club.id + ":" + new Date().getFullYear() + ":" + new Date().getMonth();
    if (window.localStorage.getItem(generationKey)) return;
    const otherClubs = BRAZILIAN_CLUBS_2026.filter(item => item.id !== club.id);
    const generated = ownPlayers.slice(0, 2).map((player, index) => {
      const destination = otherClubs[(Math.floor(Math.random() * otherClubs.length) + index) % otherClubs.length];
      return { id: "ai-offer-" + Date.now() + "-" + index, playerId: player.id, playerName: player.name, fromClubId: destination.id, fromClubName: destination.name, toClubId: club.id, toClubName: club.name, type: (index === 0 ? "purchase" : "loan") as "purchase" | "loan", amount: index === 0 ? 7000000 : 1800000, status: "pending" as const, direction: "received" as const, createdAt: new Date().toISOString(), loanMonths: 6 };
    });
    const next = [...offers, ...generated];
    saveOffers(next);
    window.localStorage.setItem(generationKey, "1");
  }, [windowInfo.open, club?.id, ownPlayers.length]);

  function saveOffers(next: Offer[]) { setOffers(next); window.localStorage.setItem(OFFERS_KEY, JSON.stringify(next)); }
  function sendOffer() {
    const player = market.find(p => p.id === playerId);
    const fee = Number(amount);
    if (!player || !club) { setNotice("Selecione um jogador e tenha uma carreira ativa."); return; }
    if (!windowInfo.open) { setNotice("Janela fechada. As negociações abrem em dezembro/janeiro e junho/julho."); return; }
    if (!Number.isFinite(fee) || fee <= 0) { setNotice("Informe uma proposta financeira válida."); return; }
    const sourceClub = BRAZILIAN_CLUBS_2026.find(c => c.id === player.clubId);
    const accepted = offerType === "purchase" ? fee >= 6000000 || Math.random() > 0.55 : fee >= 1500000 || Math.random() > 0.45;
    const offer: Offer = { id: "offer-" + Date.now(), playerId: player.id, playerName: player.name, fromClubId: club.id, fromClubName: club.name, toClubId: player.clubId, toClubName: sourceClub?.name ?? player.clubName, type: offerType, amount: fee, status: accepted ? "accepted" : "rejected", direction: "sent", createdAt: new Date().toISOString(), ...(offerType === "loan" ? { loanMonths: Number(loanMonths) } : {}) };
    const nextOffers = [...offers, offer]; saveOffers(nextOffers);
    if (accepted && offerType === "purchase") {
      const contract = makeContract({ ...player, clubId: club.id, clubName: club.name, division: club.division }, years, fine);
      const nextContracts = [...contracts, contract]; setContracts(nextContracts); window.localStorage.setItem(PLAYER_CONTRACTS_KEY, JSON.stringify(nextContracts));
      setNotice(`${player.name}: ${sourceClub?.name ?? "Clube"} aceitou a proposta. Contratação concluída.`);
    } else if (accepted) {
      const loans = JSON.parse(window.localStorage.getItem(LOANS_KEY) ?? "[]") as Array<Record<string, unknown>>;
      loans.push({ playerId: player.id, playerName: player.name, fromClubId: player.clubId, fromClubName: sourceClub?.name ?? player.clubName, toClubId: club.id, toClubName: club.name, monthlyFee: fee, months: Number(loanMonths), startedAt: new Date().toISOString() });
      window.localStorage.setItem(LOANS_KEY, JSON.stringify(loans));
      setNotice(`${player.name}: empréstimo aceito por ${loanMonths} meses.`);
    } else setNotice(`${sourceClub?.name ?? "O clube"} recusou a proposta por ${player.name}. Você pode melhorar a oferta na próxima tentativa.`);
    setPlayerId("");
  }
  function decideOffer(id: string, accepted: boolean) {
    const offer = offers.find(o => o.id === id);
    if (!offer || offer.direction !== "received" || offer.status !== "pending") return;
    const next = offers.map(o => o.id === id ? { ...o, status: accepted ? "accepted" as const : "rejected" as const } : o);
    saveOffers(next);
    if (accepted && offer.type === "purchase") {
      const nextContracts = contracts.map(c => c.playerId === offer.playerId && c.status === "active" ? { ...c, status: "terminated" as const } : c);
      setContracts(nextContracts); window.localStorage.setItem(PLAYER_CONTRACTS_KEY, JSON.stringify(nextContracts));
    }
    if (accepted && offer.type === "loan") {
      const loans = JSON.parse(window.localStorage.getItem(LOANS_KEY) ?? "[]") as Array<Record<string, unknown>>;
      loans.push({ playerId: offer.playerId, playerName: offer.playerName, fromClubId: club?.id, fromClubName: club?.name, toClubId: offer.toClubId, toClubName: offer.toClubName, monthlyFee: offer.amount, months: offer.loanMonths ?? 6, startedAt: new Date().toISOString() });
      window.localStorage.setItem(LOANS_KEY, JSON.stringify(loans));
    }
    setNotice(accepted ? "Proposta aceita pelo treinador." : "Proposta recusada pelo treinador.");
  }

  return (
    <>
      <PageHeader kicker="Mercado · Negociações" title="Transferências">Faça propostas de compra e empréstimo. Os clubes avaliam suas ofertas; propostas recebidas pelo seu elenco ficam sob decisão do treinador.</PageHeader>
      <section className="mb-5 grid gap-3 rounded-md border border-primary/40 bg-primary/5 p-4 sm:grid-cols-2">
        <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Janelas de transferências</p><p className="mt-1 text-xl font-black">{windowInfo.label}</p><p className="text-sm text-muted-foreground">Abertura: dezembro/janeiro e junho/julho.</p></div>
        <div className="sm:text-right"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Próxima janela</p><p className="mt-1 text-lg font-bold">{windowInfo.open ? "Negociações liberadas" : windowInfo.next}</p><p className="text-xs text-muted-foreground">Fora dessas datas, novas propostas ficam bloqueadas.</p></div>
      </section>
      <section className="grid gap-4 rounded-md border border-border bg-card p-5 lg:grid-cols-2">
        <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Clube comprador</p><h2 className="mt-2 font-display text-2xl font-bold uppercase">{club?.name ?? "Nenhuma carreira ativa"}</h2><p className="mt-1 text-sm text-muted-foreground">Treinador: {career?.coach ?? "—"}</p></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold">Tipo de negociação<select value={offerType} onChange={e => setOfferType(e.target.value as "purchase" | "loan")} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="purchase">Compra definitiva</option><option value="loan">Empréstimo</option></select></label>
          <label className="text-sm font-semibold">Oferta financeira (R$)<input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3" /></label>
          {offerType === "loan" ? <label className="text-sm font-semibold">Duração do empréstimo<select value={loanMonths} onChange={e => setLoanMonths(e.target.value)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="3">3 meses</option><option value="6">6 meses</option><option value="12">12 meses</option></select></label> : <><label className="text-sm font-semibold">Duração do contrato<select value={years} onChange={e => setYears(Number(e.target.value) as ContractYears)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value={1}>1 ano</option><option value={2}>2 anos</option><option value={3}>3 anos</option></select></label><label className="text-sm font-semibold">Multa disciplinar<select value={fine} onChange={e => setFine(Number(e.target.value) as DismissalFinePercent)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value={10}>10%</option><option value={20}>20%</option><option value={30}>30%</option></select></label></>}
        </div>
        <div className="lg:col-span-2"><label className="text-sm font-semibold">Jogador de outro clube<select value={playerId} onChange={e => setPlayerId(e.target.value)} disabled={!market.length || !club} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 disabled:opacity-50"><option value="">Selecione um jogador</option>{market.map(p => <option key={p.id} value={p.id}>{p.name} · {p.clubName} · {p.position} · Passe: {money(estimatePlayerMarketValue(p))}</option>)}</select></label><button type="button" onClick={sendOffer} disabled={!playerId || !club || !windowInfo.open} className="mt-3 rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground disabled:opacity-40">Enviar proposta ao clube</button>{notice && <p role="status" className="mt-2 text-sm text-primary">{notice}</p>}</div>
      </section>
      <section className="mt-6 rounded-md border border-border bg-card p-5"><h2 className="font-display text-xl font-bold uppercase">Propostas recebidas · decisão do treinador</h2><p className="mt-1 text-sm text-muted-foreground">Quando outro clube quiser comprar ou emprestar um jogador do seu time, você decide aceitar ou recusar.</p>{pendingReceived.length ? <div className="mt-3 space-y-2">{pendingReceived.map(o => <article key={o.id} className="flex flex-wrap items-center justify-between gap-3 rounded border border-border p-3"><div><p className="font-semibold">{o.playerName}</p><p className="text-xs text-muted-foreground">{o.toClubName} oferece {money(o.amount)} · {o.type === "purchase" ? "Compra" : "Empréstimo"}</p></div><div className="flex gap-2"><button onClick={() => decideOffer(o.id, false)} className="rounded border border-border px-3 py-2 text-sm">Recusar</button><button onClick={() => decideOffer(o.id, true)} className="rounded bg-primary px-3 py-2 text-sm font-bold text-primary-foreground">Aceitar</button></div></article>)}</div> : <p className="mt-3 text-sm text-muted-foreground">Nenhuma proposta pendente no momento.</p>}</section>
      <section className="mt-6 rounded-md border border-border bg-card p-5"><h2 className="font-display text-xl font-bold uppercase">Minhas propostas · {pendingSent.length}</h2>{pendingSent.length ? <div className="mt-3 space-y-2">{pendingSent.map(o => <article key={o.id} className="flex flex-wrap justify-between gap-2 rounded border border-border p-3"><div><p className="font-semibold">{o.playerName} · {o.toClubName}</p><p className="text-xs text-muted-foreground">{o.type === "purchase" ? "Compra" : "Empréstimo"} · {money(o.amount)}</p></div><strong className={o.status === "accepted" ? "text-emerald-500" : o.status === "rejected" ? "text-red-500" : "text-amber-500"}>{o.status === "accepted" ? "Aceita" : o.status === "rejected" ? "Recusada" : "Pendente"}</strong></article>)}</div> : <p className="mt-2 text-sm text-muted-foreground">Você ainda não enviou propostas.</p>}</section>
      <section className="mt-6 rounded-md border border-border bg-card p-5"><h2 className="font-display text-xl font-bold uppercase">Contratos do clube · {contracts.length}</h2>{contracts.length ? <div className="mt-3 space-y-2">{contracts.map(c => <article key={c.id} className="flex flex-wrap items-center justify-between gap-3 rounded border border-border p-3"><div><p className="font-semibold">{c.playerName}</p><p className="text-xs text-muted-foreground">{c.years} ano(s) · até {c.expiresAt}</p><p className="text-xs text-muted-foreground">Valor de passe: {money(c.marketValue ?? estimatePlayerMarketValue(VERIFIED_PLAYERS_2026.find(p => p.id === c.playerId) ?? { id: c.playerId, name: c.playerName, clubId: c.clubId, clubName: c.clubName, division: club?.division ?? "Série A", position: "MEI", source: "contrato", verifiedAt: c.signedAt }))} · Multa por quebra: {money(c.terminationFee ?? Math.round((c.marketValue ?? estimatePlayerMarketValue(VERIFIED_PLAYERS_2026.find(p => p.id === c.playerId) ?? { id: c.playerId, name: c.playerName, clubId: c.clubId, clubName: c.clubName, division: club?.division ?? "Série A", position: "MEI", source: "contrato", verifiedAt: c.signedAt })) * 1.5))}</p></div><span className="rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{c.status === "active" ? "Ativo" : c.status}</span></article>)}</div> : <p className="mt-2 text-sm text-muted-foreground">Nenhum contrato registrado.</p>}</section>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">As propostas e contratos desta versão ficam salvos localmente neste navegador. A decisão dos clubes adversários é simulada; ofertas recebidas pelo seu clube exigem sua aprovação.</p>
    </>
  );
}
