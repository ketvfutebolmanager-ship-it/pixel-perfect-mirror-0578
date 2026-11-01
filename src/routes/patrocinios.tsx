import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import type { CareerSave } from "./nova-carreira";

type Slot = "camisa" | "estadio";
type Contract = { sponsor: string; years: number; annualValue: number; startedSeason: number; expiresSeason: number };
type Contracts = Partial<Record<Slot, Contract>>;
const KEY = "ketvfm-sponsor-contracts";
const SPONSORS = [
  { name: "Vértice Bank", factor: 1.35, style: "Patrocinador master" },
  { name: "MaxPower Energy", factor: 1.2, style: "Marca esportiva" },
  { name: "Nexa Telecom", factor: 1.05, style: "Tecnologia e conectividade" },
  { name: "PontoCerto", factor: 0.9, style: "Varejo nacional" },
  { name: "Rota Motors", factor: 0.8, style: "Mobilidade" },
];
const BASE: Record<string, number> = { "Série A": 8000000, "Série B": 3500000, "Série C": 1400000, "Série D": 500000 };
const money = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
function readContracts(storageKey: string): Contracts {
  try { return JSON.parse(localStorage.getItem(storageKey) ?? "{}") as Contracts; } catch { return {}; }
}
export const Route = createFileRoute("/patrocinios")({ component: Page, head: () => ({ meta: [{ title: "Patrocinadores — KE TV Futebol Manager" }] }) });
function Page() {
  const [career] = useState<CareerSave | null>(() => { try { return JSON.parse(localStorage.getItem("ketvfm-career") ?? "null") as CareerSave | null; } catch { return null; } });
  const storageKey = KEY + ":" + (career?.club ?? "sem-clube").toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
  const [contracts, setContracts] = useState<Contracts>(() => readContracts(storageKey));
  const [slot, setSlot] = useState<Slot>("camisa");
  const [sponsor, setSponsor] = useState(SPONSORS[0]!.name);
  const [years, setYears] = useState(1);
  const [notice, setNotice] = useState("");
  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(contracts)); }, [contracts, storageKey]);
  const selected = SPONSORS.find(s => s.name === sponsor) ?? SPONSORS[0]!;
  const base = BASE[career?.division ?? "Série D"] ?? BASE["Série D"]!;
  const annualValue = Math.round(base * selected.factor * (slot === "camisa" ? 1 : 0.62) * (years === 3 ? 1.12 : years === 2 ? 1.06 : 1));
  const activeContracts = Object.entries(contracts).filter(([,c]) => c && c.expiresSeason >= (career?.season ?? 2026));
  const annualTotal = activeContracts.reduce((sum,[,c]) => sum + (c?.annualValue ?? 0), 0);
  function sign() {
    if (!career) return;
    const current = contracts[slot];
    if (current && current.expiresSeason >= career.season) { setNotice("Este espaço já possui contrato vigente. Aguarde o vencimento para renovar."); return; }
    setContracts(old => ({ ...old, [slot]: { sponsor: selected.name, years, annualValue, startedSeason: career.season, expiresSeason: career.season + years - 1 } }));
    setNotice("Contrato assinado! Receita anual adicionada ao planejamento do clube.");
  }
  const slotLabel = (s: Slot) => s === "camisa" ? "Camisa dos jogadores" : "Naming rights e publicidade do estádio";
  return <><PageHeader kicker="Gestão do clube · Comercial" title="Patrocinadores">Negocie contratos comerciais para o uniforme e para o estádio. Os contratos ficam salvos nesta carreira neste navegador.</PageHeader>
    {!career ? <section className="rounded-md border border-border bg-card p-6">Crie ou continue uma carreira para negociar patrocínios.</section> : <>
      <section className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Clube</p><strong className="mt-2 block text-xl">{career.club}</strong><p className="text-sm text-muted-foreground">{career.division} · Temporada {career.season}</p></div>
        <div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Receita anual contratada</p><strong className="mt-2 block text-2xl text-primary">{money(annualTotal)}</strong><p className="text-xs text-muted-foreground">Soma dos contratos vigentes</p></div>
        <div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Espaços comerciais</p><strong className="mt-2 block text-2xl">{activeContracts.length}/2</strong><p className="text-xs text-muted-foreground">Camisa e estádio</p></div>
      </section>
      <div className="grid gap-5 lg:grid-cols-2">
        {(["camisa","estadio"] as Slot[]).map(s => { const contract=contracts[s]; const active=!!contract && contract.expiresSeason >= career.season; return <section key={s} className="rounded-md border border-border bg-card p-5"><p className="text-xs font-bold uppercase tracking-widest text-primary">{slotLabel(s)}</p>{active ? <><h2 className="mt-2 text-2xl font-black">{contract.sponsor}</h2><p className="mt-2 text-sm text-muted-foreground">Contrato até a temporada {contract.expiresSeason} · {contract.years} ano(s)</p><p className="mt-3 text-xl font-bold">{money(contract.annualValue)} <span className="text-sm font-normal text-muted-foreground">por temporada</span></p><span className="mt-3 inline-block rounded bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500">Contrato vigente</span></> : <><h2 className="mt-2 text-xl font-bold">Espaço disponível</h2><p className="mt-2 text-sm text-muted-foreground">Este espaço está livre para receber propostas.</p></>}</section>; })}
      </div>
      <section className="mt-6 rounded-md border border-primary/40 bg-card p-5"><p className="text-xs font-bold uppercase tracking-widest text-primary">Central de negociação</p><h2 className="mt-1 text-2xl font-black uppercase">Nova proposta comercial</h2><div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Espaço<select value={slot} onChange={e=>setSlot(e.target.value as Slot)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="camisa">Camisa dos jogadores</option><option value="estadio">Estádio</option></select></label>
        <label className="text-sm font-semibold">Patrocinador<select value={sponsor} onChange={e=>setSponsor(e.target.value)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3">{SPONSORS.map(s=><option key={s.name} value={s.name}>{s.name} · {s.style}</option>)}</select></label>
        <label className="text-sm font-semibold">Duração do contrato<select value={years} onChange={e=>setYears(Number(e.target.value))} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value={1}>1 temporada</option><option value={2}>2 temporadas</option><option value={3}>3 temporadas</option></select></label>
        <div className="rounded-md border border-border bg-background p-3"><p className="text-xs uppercase text-muted-foreground">Valor estimado por temporada</p><strong className="mt-1 block text-2xl text-primary">{money(annualValue)}</strong><p className="text-xs text-muted-foreground">Proposta simulada conforme divisão, espaço, marca e duração.</p></div>
      </div><p className="mt-3 text-xs text-muted-foreground">Os nomes das marcas e valores são fictícios e fazem parte da economia simulada do jogo.</p>{notice && <p role="status" className="mt-3 text-sm font-semibold text-primary">{notice}</p>}<button type="button" onClick={sign} disabled={!!contracts[slot] && contracts[slot]!.expiresSeason >= career.season} className="mt-4 rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40">Assinar contrato</button></section>
    </>}
  </>;
}