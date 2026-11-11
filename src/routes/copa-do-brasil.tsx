import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { BRAZILIAN_CLUBS_2026 } from "@/modules/clubs/brazilian-clubs-2026";
import { simulateMatch } from "@/modules/matches/simulate";

type Club = { id: string; name: string; state: string; division: string };
type Leg = { homeGoals?: number; awayGoals?: number };
type Tie = { id: string; home: Club; away: Club; legs: Leg[]; winner?: Club };
type CupState = { phase: number; ties: Tie[][]; champion?: Club; qualified: Record<string, string[]> };
const KEY = "ketv-copa-do-brasil-2027-v2";
const PHASES = ["1ª fase", "2ª fase", "3ª fase", "4ª fase", "5ª fase", "Oitavas de final", "Quartas de final", "Semifinal", "Final"];
const ALL_CLUBS = BRAZILIAN_CLUBS_2026 as Club[];
const EMPTY_QUALIFICATION: Record<string, string[]> = {
  federation: [], stateChampions: [], regionalAndNationalChampions: [], serieA: [],
};
const PHASE_RULES = [
  "Entrada dos clubes definidos pelos critérios de vagas das federações estaduais.",
  "Campeões estaduais de 2026 entram nesta fase, exceto clubes classificados à Série A, que entram na 5ª fase.",
  "Entrada dos seis campeões regionais e nacionais previstos no Critério 2: Copa do Nordeste, Copa Norte, Copa Centro-Oeste, Copa Sul-Sudeste, Série C e Série D de 2026.",
  "Fase eliminatória anterior à entrada dos clubes da Série A.",
  "Entrada dos 20 clubes classificados à Série A de 2026.",
  "Oitavas de final.",
  "Quartas de final.",
  "Semifinal.",
  "Final em jogo único.",
];
function shuffle<T>(values: T[]): T[] { const a=[...values]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j]!,a[i]!];} return a; }
function makeTies(teams: Club[], phase: number): Tie[] {
  const draw=shuffle(teams);
  return Array.from({length:Math.floor(draw.length/2)},(_,i)=>({id:`p${phase}-t${i+1}`,home:draw[i*2]!,away:draw[i*2+1]!,legs:[{},{}]}));
}
function initial(): CupState { return {phase:0,ties:[],qualified:{...EMPTY_QUALIFICATION}}; }
function rating(club:Club, n:number) { const base=club.division==="Série A"?76:club.division==="Série B"?68:club.division==="Série C"?62:56; return Math.max(35,Math.min(92,base+((club.id.length*(n+3))%13)-6)); }
function play(home:Club,away:Club) { return simulateMatch({id:home.id,name:home.name,attack:rating(home,1),midfield:rating(home,2),defense:rating(home,3)},{id:away.id,name:away.name,attack:rating(away,1),midfield:rating(away,2),defense:rating(away,3)}); }

function Page() {
 const [cup,setCup]=useState<CupState>(()=>{if(typeof window==="undefined")return initial();try{return JSON.parse(window.localStorage.getItem(KEY)||"null")||initial();}catch{return initial();}});
 const [selected,setSelected]=useState<Record<string,string[]>>(cup.qualified);
 const [message,setMessage]=useState("Cadastre os classificados por critério. O jogo não inventará clubes para completar as 128 vagas.");
 useEffect(()=>{window.localStorage.setItem(KEY,JSON.stringify(cup));},[cup]);
 const selectedIds=Object.values(selected).flat();
 const uniqueIds=[...new Set(selectedIds)];
 const duplicates=selectedIds.length!==uniqueIds.length;
 const phaseTies=cup.ties[cup.phase]||[];
 const done=phaseTies.length>0&&phaseTies.every(t=>Boolean(t.winner));
 const totalPlayed=cup.ties.flat().reduce((n,t)=>n+(t.winner?1:0),0);
 const clubById=useMemo(()=>new Map(ALL_CLUBS.map(c=>[c.id,c])),[]);
 function toggle(category:string,id:string) { setSelected(old=>({...old,[category]:old[category]?.includes(id)?old[category].filter(x=>x!==id):[...(old[category]||[]),id]})); }
 function startCompetition() {
   if(uniqueIds.length!==128||duplicates){setMessage(`A inscrição precisa conter exatamente 128 clubes únicos. Atualmente: ${uniqueIds.length}.`);return;}
   const qualified:Record<string,string[]>={...selected};
   const seriesA=(qualified.serieA||[]).map(id=>clubById.get(id)).filter(Boolean) as Club[];
   if(seriesA.length!==20){setMessage("O Critério 1 exige exatamente os 20 clubes da Série A de 2026.");return;}
   const firstPhase=uniqueIds.map(id=>clubById.get(id)).filter(Boolean) as Club[];
   setCup({phase:0,ties:[makeTies(firstPhase.filter(c=>!seriesA.some(a=>a.id===c.id)),0)],qualified});
   setMessage("Competição iniciada com participantes cadastrados. A distribuição de entradas por fase deve seguir a tabela oficial da CBF.");
 }
 function simulateTie(tie:Tie) {
   setCup(old=>{const ties=old.ties.map(r=>r.map(t=>({...t,legs:t.legs.map(l=>({...l}))})));const current=ties[old.phase]||[];const index=current.findIndex(t=>t.id===tie.id);if(index<0||current[index]!.winner)return old;
    const first=play(tie.home,tie.away),second=play(tie.away,tie.home);
    const homeTotal=first.homeGoals+second.awayGoals,awayTotal=first.awayGoals+second.homeGoals;
    const winner=homeTotal===awayTotal?(Math.random()>.5?tie.home:tie.away):homeTotal>awayTotal?tie.home:tie.away;
    current[index]={...tie,legs:[{homeGoals:first.homeGoals,awayGoals:first.awayGoals},{homeGoals:second.homeGoals,awayGoals:second.awayGoals}],winner};
    return {...old,ties};
   });
 }
 function advance() {
   if(!done)return;
   const winners=phaseTies.map(t=>t.winner!);
   if(cup.phase===8){setCup(old=>({...old,champion:winners[0]}));setMessage(`Campeão: ${winners[0]!.name}`);return;}
   const next=cup.phase+1;
   setCup(old=>({...old,phase:next,ties:[...old.ties,makeTies(winners,next)]}));
   setMessage(`${PHASES[next]} gerada a partir dos classificados.`);
 }
 function reset(){if(!window.confirm("Apagar a inscrição e os resultados desta edição?"))return;setCup(initial());setSelected({...EMPTY_QUALIFICATION});setMessage("Edição reiniciada.");}
 const categories=[{id:"federation",title:"Vagas das federações estaduais",hint:"Clubes indicados pelas federações segundo o Ranking Nacional de Federações e critérios técnicos estaduais."},{id:"stateChampions",title:"Campeões estaduais de 2026",hint:"Entram na 2ª fase, exceto os clubes da Série A, que entram na 5ª fase."},{id:"regionalAndNationalChampions",title:"Seis campeões regionais e nacionais",hint:"Campeões da Copa do Nordeste, Copa Norte, Copa Centro-Oeste, Copa Sul-Sudeste, Série C e Série D de 2026."},{id:"serieA",title:"Série A de 2026",hint:"Os 20 clubes entram diretamente na 5ª fase."}];
 return <>
  <PageHeader kicker="Temporada 2027 · 6 de janeiro a 5 de dezembro" title="Copa do Brasil">
   Competição nacional com 128 participantes e critérios de classificação da CBF. Inscrição dos classificados, mata-mata, simulação e avanço de fase.
  </PageHeader>
  <section className="mb-6 rounded-lg border border-primary/30 bg-card p-5">
   <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-display text-2xl font-bold uppercase">Inscrição oficial dos participantes</h2><span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold">{uniqueIds.length}/128 clubes</span></div>
   <p className="mt-2 text-sm text-muted-foreground">A base atual do jogo ainda não contém todos os clubes classificados de 2026. Selecione apenas equipes que conquistaram a vaga. Não completamos vagas com clubes aleatórios.</p>
   {categories.map(category=><div key={category.id} className="mt-5"><h3 className="font-semibold">{category.title}</h3><p className="mb-2 text-xs text-muted-foreground">{category.hint}</p><div className="grid max-h-64 gap-2 overflow-y-auto rounded-md border border-border p-3 sm:grid-cols-2">{ALL_CLUBS.map(club=><label key={club.id} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={(selected[category.id]||[]).includes(club.id)} onChange={()=>toggle(category.id,club.id)}/><span>{club.name} <span className="text-xs text-muted-foreground">({club.state})</span></span></label>)}</div></div>)}
   <p className="mt-3 text-sm text-muted-foreground">{message}</p>
   <div className="mt-4 flex flex-wrap gap-2"><button onClick={startCompetition} disabled={uniqueIds.length!==128||duplicates} className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-40">Confirmar 128 classificados e iniciar</button><button onClick={reset} className="rounded-md border border-border px-4 py-2 text-sm font-semibold">Reiniciar edição</button></div>
   {duplicates&&<p className="mt-2 text-sm text-destructive">Um mesmo clube foi inscrito em mais de um critério. Corrija antes de iniciar.</p>}
  </section>
  {cup.ties.length>0&&<><section className="mb-5 rounded-lg border border-border bg-card p-5"><div className="flex flex-wrap justify-between gap-2"><h2 className="font-display text-2xl font-bold uppercase">{PHASES[cup.phase]}</h2><span className="text-sm text-muted-foreground">{totalPlayed} confrontos concluídos</span></div><p className="mt-2 text-sm text-muted-foreground">{PHASE_RULES[cup.phase]}</p><div className="mt-4 flex gap-2"><button onClick={()=>phaseTies.filter(t=>!t.winner).forEach(simulateTie)} disabled={done} className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-40">Simular confrontos restantes</button><button onClick={advance} disabled={!done} className="rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary disabled:opacity-40">Avançar classificados</button></div></section>
  <div className="grid gap-3 sm:grid-cols-2">{phaseTies.map((tie,i)=><article key={tie.id} className="rounded-md border border-border bg-card p-4"><p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Confronto {i+1} · ida e volta</p><div className="flex justify-between gap-2"><span>{tie.home.name}</span><b>{tie.legs[0]?.homeGoals??"–"} : {tie.legs[0]?.awayGoals??"–"}</b></div><div className="mt-2 flex justify-between gap-2"><span>{tie.away.name}</span><b>{tie.legs[1]?.homeGoals??"–"} : {tie.legs[1]?.awayGoals??"–"}</b></div>{tie.winner&&<p className="mt-2 text-xs font-bold text-primary">Classificado: {tie.winner.name}</p>}<button onClick={()=>simulateTie(tie)} disabled={Boolean(tie.winner)} className="mt-3 w-full rounded-md border border-primary/50 px-3 py-2 text-sm font-semibold text-primary disabled:opacity-40">{tie.winner?"Confronto concluído":"Simular confronto"}</button></article>)}</div></>}
  {cup.champion&&<section className="mt-6 rounded-lg border border-primary bg-primary/10 p-6 text-center"><p className="text-xs font-bold uppercase tracking-widest text-primary">Campeão da Copa do Brasil 2027</p><h2 className="mt-2 font-display text-4xl font-black uppercase">{cup.champion.name}</h2></section>}
  <section className="mt-8 rounded-lg border border-border bg-card p-5"><h3 className="font-display text-xl font-bold uppercase">Regulamento CBF 2027</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground"><li>128 participantes; calendário de 6 de janeiro a 5 de dezembro de 2027.</li><li>Campeões estaduais de 2026, exceto clubes da Série A, entram na 2ª fase.</li><li>20 clubes da Série A de 2026 entram na 5ª fase.</li><li>Seis vagas do Critério 2: campeões da Copa do Nordeste, Copa Norte, Copa Centro-Oeste, Copa Sul-Sudeste e Séries C e D de 2026.</li><li>O regulamento e a tabela detalhada da CBF determinam distribuição de vagas, sorteios, mandos e cruzamentos. O jogo não deve tratar sorteio aleatório como chave oficial.</li><li>Esta tela executa partidas simuladas em dois jogos por confronto como motor provisório; a quantidade de jogos por fase será ajustada ao REC 2027 definitivo. A final é jogo único.</li></ul><a className="mt-4 inline-flex text-sm font-semibold text-primary underline" href="https://www.cbf.com.br/futebol-brasileiro/noticias/campeonato-brasileiro/a/cbf-oficializa-calendario-do-futebol-profissional-masculino-de-2027" target="_blank" rel="noreferrer">Calendário oficial CBF 2027</a></section>
 </>;
}
export const Route=createFileRoute("/copa-do-brasil")({component:Page});
