import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import type { CareerSave } from "./nova-carreira";
type Trophy = { competition: string; season: number; prize: number; topScorer?: string; goals?: number };
const KEY="ketvfm-trophy-room";
const money=(v:number)=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
function readTrophies(club: string):Trophy[]{const clubId=club.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").replace(/[^a-z0-9]+/g,"-");try{return JSON.parse(localStorage.getItem(KEY+":"+clubId)??"[]") as Trophy[]}catch{return[]}}
export const Route=createFileRoute("/sala-de-trofeus")({component:Page,head:()=>({meta:[{title:"Sala de Troféus — KE TV Futebol Manager"}]})});
function Page(){
 const [career]=useState<CareerSave|null>(()=>{try{return JSON.parse(localStorage.getItem("ketvfm-career")??"null") as CareerSave|null}catch{return null}});
 const [trophies]=useState<Trophy[]>(()=>readTrophies(career?.club ?? ""));
 const total=trophies.reduce((s,t)=>s+t.prize,0);
 return <><PageHeader kicker="História e conquistas" title="Sala de Troféus">O museu da sua gestão: títulos, premiações e artilheiros que marcaram cada temporada.</PageHeader>
 {!career?<section className="rounded-md border border-border bg-card p-6">Crie ou continue uma carreira para consultar o histórico do clube.</section>:<>
 <section className="mb-6 grid gap-4 sm:grid-cols-3"><div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Clube</p><strong className="mt-2 block text-xl">{career.club}</strong></div><div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Títulos conquistados</p><strong className="mt-2 block text-3xl text-primary">{trophies.length}</strong></div><div className="rounded-md border border-border bg-card p-5"><p className="text-xs uppercase text-muted-foreground">Premiações acumuladas</p><strong className="mt-2 block text-2xl">{money(total)}</strong></div></section>
 <section className="rounded-md border border-border bg-card p-5"><h2 className="text-2xl font-black uppercase">Galeria de conquistas</h2>{trophies.length===0?<div className="mt-4 rounded-md border border-dashed border-border p-8 text-center"><div className="text-5xl">🏆</div><h3 className="mt-3 text-xl font-bold">Sua história ainda está sendo escrita</h3><p className="mt-2 text-sm text-muted-foreground">Quando o campeonato tiver classificação, finalização de temporada e campeão integrados ao motor do jogo, o troféu, a premiação e o artilheiro serão registrados aqui automaticamente.</p></div>:<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{trophies.map((t,i)=><article key={i} className="rounded-md border border-primary/30 bg-primary/5 p-5"><div className="text-4xl">🏆</div><h3 className="mt-2 text-lg font-black">{t.competition}</h3><p className="text-sm text-muted-foreground">Temporada {t.season}</p><p className="mt-2 font-bold text-primary">{money(t.prize)}</p>{t.topScorer&&<p className="mt-2 text-sm">Artilheiro: <strong>{t.topScorer}</strong> · {t.goals??0} gols</p>}</article>)}</div>}</section>
 <p className="mt-4 text-xs text-muted-foreground">O histórico é guardado por carreira neste navegador. Nenhum título ou artilheiro é criado sem resultado confirmado da competição.</p>
 </>}</>;
}