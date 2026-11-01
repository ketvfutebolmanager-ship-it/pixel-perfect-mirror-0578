import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import type { CareerSave } from "./nova-carreira";
type Entry = { id: string; season: number; round: number; description: string; amount: number };
type Finance = { balance?: number; ledger?: Entry[] };
const money=(v:number)=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
function slug(value:string){return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-")}
export const Route=createFileRoute("/financas")({component:Page,head:()=>({meta:[{title:"Finanças do Clube — KE TV Futebol Manager"}]})});
function Page(){
 const [career]=useState<CareerSave|null>(()=>{try{return JSON.parse(localStorage.getItem("ketvfm-career")??"null") as CareerSave|null}catch{return null}});
 const [finance]=useState<Finance>(()=>{try{return JSON.parse(localStorage.getItem("ketvfm-finances:"+slug(career?.club??"") )??"{}") as Finance}catch{return {}}});
 const ledger=finance.ledger??[];
 const income=ledger.filter(e=>e.amount>0).reduce((s,e)=>s+e.amount,0);
 const expenses=ledger.filter(e=>e.amount<0).reduce((s,e)=>s+Math.abs(e.amount),0);
 return <><PageHeader kicker="Gestão do clube" title="Finanças">Acompanhe o caixa, a renda de bilheteria, as cotas comerciais e os prêmios por títulos.</PageHeader>
 {!career?<section className="rounded-md border border-border bg-card p-6">Crie ou continue uma carreira para consultar as finanças.</section>:<>
 <section className="grid gap-4 sm:grid-cols-3"><div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Saldo disponível</p><strong className="mt-2 block text-3xl text-primary">{money(finance.balance??career.balance??25000000)}</strong></div><div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Receitas registradas</p><strong className="mt-2 block text-2xl">{money(income)}</strong></div><div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Despesas registradas</p><strong className="mt-2 block text-2xl">{money(expenses)}</strong></div></section>
 <section className="mt-6 rounded-md border border-border bg-card p-5"><h2 className="text-xl font-black uppercase">Extrato do clube</h2>{ledger.length?<div className="mt-3 space-y-2">{[...ledger].reverse().map(entry=><article key={entry.id} className="flex flex-wrap items-center justify-between gap-3 rounded border border-border p-3"><div><p className="font-semibold">{entry.description}</p><p className="text-xs text-muted-foreground">Temporada {entry.season} · Rodada {entry.round}</p></div><strong className={entry.amount>=0?"text-emerald-500":"text-red-500"}>{entry.amount>=0?"+":""}{money(entry.amount)}</strong></article>)}</div>:<p className="mt-3 rounded-md border border-dashed border-border p-6 text-sm text-muted-foreground">Nenhuma movimentação registrada ainda. A receita aparecerá após a primeira partida finalizada.</p>}</section>
 <p className="mt-4 text-xs text-muted-foreground">Saldo inicial simulado: R$ 25 milhões. Nesta etapa, o extrato registra receitas de bilheteria, parcelas proporcionais dos patrocínios e premiação do título. Folha salarial e despesas operacionais ainda não foram integradas.</p>
 </>}
 </>;
}