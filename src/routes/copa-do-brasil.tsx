import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { simulateMatch } from "@/modules/matches/simulate";

type Club={id:string;name:string;state:string;criterion:1|2|3};
type Leg={homeGoals?:number;awayGoals?:number};
type Tie={id:string;home:Club;away:Club;legs:Leg[];winner?:Club;penalties?:boolean;transmissions:string[];kickoff:string};
type Cup={phase:number;rounds:Tie[][];champion?:Club};
const KEY="ketv-copa-brasil-2026-career-v1";
const parse=(raw:string,criterion:1|2|3):Club[]=>raw.trim().split("\n").map(line=>{const [name,state]=line.split("|");return {id:(name+"-"+state).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-"),name,state,criterion};});
const A=parse(`Flamengo|RJ
Corinthians|SP
Palmeiras|SP
Atlético Mineiro|MG
São Paulo|SP
Fluminense|RJ
Botafogo|RJ
Athletico Paranaense|PR
Bahia|BA
Vasco da Gama|RJ
Cruzeiro|MG
Grêmio|RS
Internacional|RS
Red Bull Bragantino|SP
Santos|SP
Vitória|BA
Coritiba|PR
Mirassol|SP
Chapecoense|SC
Remo|PA`,1);
const B=parse(`Paysandu|PA
Ponte Preta|SP
Confiança|SE
Barra|SC`,2);
const C=parse(`Galvez|AC
Independência|AC
Vasco-AC|AC
ASA|AL
CRB|AL
CSA|AL
Penedense|AL
Amazonas|AM
Manauara|AM
Manaus|AM
Nacional-AM|AM
Independente-AP|AP
Oratório|AP
Trem|AP
Atlético de Alagoinhas|BA
Jacuipense|BA
Juazeirense|BA
Porto Seguro|BA
Ceará|CE
Fortaleza|CE
Maracanã|CE
Tirol|CE
Capital-DF|DF
Ceilândia|DF
Gama|DF
Desportiva Ferroviária|ES
Porto Vitória|ES
Rio Branco-ES|ES
Anápolis|GO
Atlético-GO|GO
Goiás|GO
Vila Nova|GO
IAPE|MA
Imperatriz|MA
Maranhão|MA
América-MG|MG
Athletic Club|MG
Betim|MG
Tombense|MG
Uberlândia|MG
FC Pantanal|MS
Ivinhema|MS
Operário-MS|MS
Cuiabá|MT
Mixto|MT
Operário-VG|MT
Primavera-MT|MT
Águia de Marabá|PA
Bragantino-PA|PA
Castanhal|PA
Tuna Luso|PA
Botafogo-PB|PB
Serra Branca|PB
Sousa|PB
Maguary|PE
Retrô|PE
Santa Cruz|PE
Sport|PE
Altos|PI
Fluminense-PI|PI
Piauí|PI
Azuriz|PR
Cianorte|PR
Londrina|PR
Maringá|PR
Operário-PR|PR
Boavista|RJ
Madureira|RJ
Nova Iguaçu|RJ
Portuguesa-RJ|RJ
Sampaio Corrêa-RJ|RJ
Volta Redonda|RJ
ABC|RN
América-RN|RN
Laguna|RN
Guaporé|RO
Ji-Paraná|RO
Porto Velho|RO
Baré|RR
GAS|RR
Monte Roraima|RR
Caxias|RS
Guarany de Bagé|RS
Juventude|RS
São Luiz|RS
Ypiranga-RS|RS
Avaí|SC
Figueirense|SC
Joinville|SC
Santa Catarina|SC
América de Propriá|SE
Itabaiana|SE
Lagarto|SE
Guarani|SP
Novorizontino|SP
Portuguesa-SP|SP
Primavera-SP|SP
São Bernardo|SP
Velo Clube|SP
Araguaína|TO
Capital-TO|TO
Tocantinópolis|TO`,3);
const CLUBS=[...A,...B,...C];
const PHASES=["1ª fase","2ª fase","3ª fase","4ª fase","5ª fase","Oitavas de final","Quartas de final","Semifinal","Final"];\nconst BROADCASTERS=["GE TV","TV Globo","Prime Video","SporTV","Premiere","KE TV Sports"];\nconst ALL_BROADCASTERS=["GE TV","TV Globo","Prime Video","SporTV","Premiere","KE TV Sports"];
const DATES=["18–19 fev","25 fev–5 mar","11–12 mar","18–19 mar","22–23 abr / 13–14 mai","1–6 ago","26 ago–3 set","1–8 nov","6 dez"];
const rating=(c:Club,n:number)=>Math.max(38,Math.min(91,(c.criterion===1?78:c.criterion===2?66:57)+((c.id.length*(n+3))%13)-6));
const team=(c:Club)=>({id:c.id,name:c.name,attack:rating(c,1),midfield:rating(c,2),defense:rating(c,3)});
const shuffled=<T,>(xs:T[])=>{const a=[...xs];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j]!,a[i]!];}return a;};
const ties=(xs:Club[],phase:number,legs:number)=>{const d=shuffled(xs);return Array.from({length:Math.floor(d.length/2)},(_,i)=>{const kickoff=["18:00","19:00","21:30"][i%3]!;const overflow=i>=3;const transmissions=phase>=7?ALL_BROADCASTERS:overflow?["KE TV Sports"]:[BROADCASTERS[i%5]!];return {id:"f"+phase+"-"+i,home:d[i*2]!,away:d[i*2+1]!,legs:Array.from({length:legs},()=>({})),transmissions,kickoff};});};
const firstPairs=[["Ji-Paraná|RO","FC Pantanal|MS"],["Ivinhema|MS","Independente-AP|AP"],["Baré|RR","Madureira|RJ"],["Gama|DF","Monte Roraima|RR"],["Galvez|AC","Guaporé|RO"],["Vasco-AC|AC","Velo Clube|SP"],["Araguaína|TO","Primavera-SP|SP"],["Sampaio Corrêa-RJ|RJ","Desportiva Ferroviária|ES"],["Betim|MG","Piauí|PI"],["América de Propriá|SE","Tirol|CE"],["Santa Catarina|SC","IAPE|MA"],["Porto Seguro|BA","Serra Branca|PB"],["Maguary|PE","Laguna|RN"],["Primavera-MT|MT","Bragantino-PA|PA"]];
const clubByName=new Map(CLUBS.map(c=>[c.name+"|"+c.state,c]));
const initial=():Cup=>({phase:0,rounds:[firstPairs.map((pair,i)=>({id:"r1-"+i,home:clubByName.get(pair[0])!,away:clubByName.get(pair[1])!,legs:[{}],transmissions:i>=3?["KE TV Sports"]:[BROADCASTERS[i%5]!],kickoff:["18:00","19:00","21:30"][i%3]!}))]});
function Page(){
 const [cup,setCup]=useState<Cup>(()=>{if(typeof window==="undefined")return initial();try{return JSON.parse(localStorage.getItem(KEY)||"null")||initial()}catch{return initial()}});
 const [notice,setNotice]=useState("Edição iniciada do começo: 126 participantes, com o Brasileirão mantido em paralelo.");
 useEffect(()=>{localStorage.setItem(KEY,JSON.stringify(cup))},[cup]);
 const current=cup.rounds[cup.phase]||[];
 const allDone=current.length>0&&current.every(t=>t.winner);
 const played=cup.rounds.flat().filter(t=>t.winner).length;
 const counts=useMemo(()=>[28,88,48,24,32,16,8,4,2],[ ]);
 function playTie(t:Tie){
  setCup(old=>{const rounds=old.rounds.map(r=>r.map(x=>({...x,legs:x.legs.map(l=>({...l}))})));const row=rounds[old.phase]||[];const ix=row.findIndex(x=>x.id===t.id);if(ix<0||row[ix]!.winner)return old;
   const one=simulateMatch(team(t.home),team(t.away));let legs:Leg[]=[{homeGoals:one.homeGoals,awayGoals:one.awayGoals}];let winner:Club;
   if(old.phase<=3||old.phase===8){winner=one.homeGoals===one.awayGoals?(Math.random()<.5?t.home:t.away):one.homeGoals>one.awayGoals?t.home:t.away;}
   else {const two=simulateMatch(team(t.away),team(t.home));legs=[...legs,{homeGoals:two.homeGoals,awayGoals:two.awayGoals}];const h=one.homeGoals+two.awayGoals,a=one.awayGoals+two.homeGoals;winner=h===a?(Math.random()<.5?t.home:t.away):h>a?t.home:t.away;}
   row[ix]={...t,legs,winner,penalties:legs.length===1&&one.homeGoals===one.awayGoals};return {...old,rounds};});
 }
 function advance(){
  if(!allDone)return;
  const winners=current.map(t=>t.winner!);
  if(cup.phase===8){setCup(o=>({...o,champion:winners[0]}));setNotice("Campeão definido!");return;}
  const next=cup.phase+1;let entrants:Club[];
  if(next===1){const firstIds=new Set(current.flatMap(t=>[t.home.id,t.away.id]));entrants=[...winners,...C.filter(c=>!firstIds.has(c.id))];}
  else if(next===2){entrants=[...winners,...B];}
  else if(next===4){entrants=[...winners,...A];}
  else entrants=winners;
  const legCount=next>=4&&next<=7?2:1;
  setCup(o=>({...o,phase:next,rounds:[...o.rounds,ties(entrants,next,legCount)]}));
  setNotice(PHASES[next]+" gerada. "+entrants.length+" clubes disputam esta etapa.");
 }
 function reset(){if(confirm("Apagar todos os resultados e reiniciar a Copa do Brasil 2026?")){setCup(initial());setNotice("Copa reiniciada desde a primeira fase.");}}
 return <>
  <PageHeader kicker="Temporada 2026 · Competição paralela ao Brasileirão" title="Copa do Brasil 2026">Edição completa em carreira: 126 clubes, nove fases, partidas jogáveis, classificação automática e calendário integrado à temporada nacional.</PageHeader>
  <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4"><div className="rounded-lg border border-border bg-card p-3"><p className="text-xs text-muted-foreground">Participantes</p><p className="text-2xl font-black">126</p></div><div className="rounded-lg border border-border bg-card p-3"><p className="text-xs text-muted-foreground">Fases</p><p className="text-2xl font-black">9</p></div><div className="rounded-lg border border-border bg-card p-3"><p className="text-xs text-muted-foreground">Partidas no formato</p><p className="text-2xl font-black">155</p></div><div className="rounded-lg border border-border bg-card p-3"><p className="text-xs text-muted-foreground">Jogos concluídos</p><p className="text-2xl font-black">{played}</p></div></div>
  <section className="mb-5 rounded-xl border border-primary/30 bg-card p-5"><div className="flex flex-wrap items-center justify-between gap-2"><h2 className="font-display text-2xl font-black uppercase">{PHASES[cup.phase]}</h2><span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-bold">{current.length} confrontos · {DATES[cup.phase]}</span></div><p className="mt-2 text-sm text-muted-foreground">{notice}</p><p className="mt-2 text-xs text-muted-foreground">Grade de transmissão: GE TV, Globo, Prime Video, SporTV e Premiere dividem os jogos. Quando houver partidas simultâneas excedentes, a KE TV Sports recebe prioridade de cobertura. Semifinais e final com todas as seis emissoras.</p><div className="mt-4 flex flex-wrap gap-2"><button onClick={()=>current.filter(t=>!t.winner).forEach(playTie)} disabled={allDone} className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-40">Simular todos os jogos restantes</button><button onClick={advance} disabled={!allDone} className="rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary disabled:opacity-40">Avançar fase</button><button onClick={reset} className="rounded-md border border-border px-4 py-2 text-sm">Reiniciar Copa</button></div></section>
  <div className="grid gap-3 sm:grid-cols-2">{current.map((t,i)=><article key={t.id} className="rounded-lg border border-border bg-card p-4"><p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Confronto {i+1} · {t.legs.length===1?"jogo único":"ida e volta"} · {t.kickoff}</p><div className="flex items-center justify-between gap-2"><span className="font-bold">{t.home.name}</span><b className="tabular-nums">{t.legs[0]?.homeGoals??"–"} : {t.legs[0]?.awayGoals??"–"}</b></div>{t.legs[1]&&<div className="mt-2 flex items-center justify-between gap-2"><span className="font-bold">{t.away.name}</span><b className="tabular-nums">{t.legs[1].homeGoals??"–"} : {t.legs[1].awayGoals??"–"}</b></div>}{!t.legs[1]&&<p className="mt-1 text-xs text-muted-foreground">Mandante: {t.home.state}</p>}{t.winner&&<p className="mt-3 text-sm font-bold text-primary">Classificado: {t.winner.name}{t.penalties?" · pênaltis":""}</p>}<div className="mt-3 flex flex-wrap gap-1">{t.transmissions.map(channel=><span key={channel} className={"rounded-full px-2 py-1 text-[10px] font-bold "+(channel==="KE TV Sports"?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground")}>{channel}</span>)}</div><button onClick={()=>playTie(t)} disabled={!!t.winner} className="mt-3 w-full rounded-md border border-primary/50 px-3 py-2 text-sm font-semibold text-primary disabled:opacity-40">{t.winner?"Confronto concluído":"Jogar confronto"}</button></article>)}</div>
  {cup.champion&&<section className="mt-6 rounded-xl border border-primary bg-primary/10 p-6 text-center"><p className="text-xs font-bold uppercase tracking-widest text-primary">Campeão da Copa do Brasil 2026</p><h2 className="mt-2 font-display text-4xl font-black uppercase">{cup.champion.name}</h2></section>}
  <section className="mt-6 rounded-xl border border-border bg-card p-5"><h3 className="font-display text-xl font-black uppercase">Calendário paralelo</h3><p className="mt-2 text-sm text-muted-foreground">A Copa usa suas janelas próprias, sem retirar o Brasileirão do calendário. As rodadas das Séries A, B, C e D continuam pertencendo às respectivas competições.</p><div className="mt-3 grid gap-2 sm:grid-cols-3">{PHASES.map((p,i)=><div key={p} className="rounded-md border border-border p-3"><p className="text-sm font-bold">{p}</p><p className="text-xs text-muted-foreground">{DATES[i]}</p><p className="mt-1 text-xs">{counts[i]} vagas/clubes na fase</p></div>)}</div><div className="mt-4 rounded-md border border-primary/30 bg-primary/5 p-3"><p className="text-sm font-bold">Política de transmissão da carreira</p><p className="mt-1 text-xs text-muted-foreground">Distribuição simulada para o universo do KE TV Futebol Manager. Os direitos reais de transmissão pertencem às empresas detentoras e a CBF define a grade oficial; a KE TV Sports aparece aqui como emissora do modo carreira, sem afirmar direitos reais.</p><p className="mt-2 text-xs font-semibold">Semifinais e final: GE TV · Globo · Prime Video · SporTV · Premiere · KE TV Sports.</p></div><p className="mt-4 text-xs text-muted-foreground">Observação técnica: os participantes e o formato seguem o REC 2026. Os confrontos da 1ª fase usam os duelos divulgados pela CBF; as fases seguintes são sorteadas no jogo, não reproduzem todos os sorteios oficiais da edição real. Os resultados ficam salvos neste navegador.</p><a className="mt-3 inline-flex text-sm font-semibold text-primary underline" href="https://www.cbf.com.br/futebol-brasileiro/noticias/campeonato-brasileiro/serie-b/cbf-divulga-tabela-basica-plano-geral-de-acoes-e-regulamento-especifico-da-copa-do-brasil-2026" target="_blank" rel="noreferrer">Regulamento oficial da CBF</a></section>
 </>;
}
export const Route=createFileRoute("/copa-do-brasil")({component:Page});
