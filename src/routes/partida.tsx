import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import { simulateMatch, type MatchResult, type MatchTeam } from "@/modules/matches/simulate";
import type { CareerSave } from "./nova-carreira";
import { VERIFIED_PLAYERS_2026 } from "@/modules/players/database";

export const Route = createFileRoute("/partida")({
  head: () => ({ meta: [{ title: "Central da partida — KE TV Football Manager" }] }),
  component: Page,
});

type MatchSpeed = "slow" | "medium" | "fast";
type Formation = "4-4-2" | "4-3-3" | "3-5-2" | "4-2-3-1" | "3-3-4" | "5-3-2" | "4-5-1" | "3-1-4-2" | "4-2-4" | "4-3-2-1" | "3-4-3" | "5-4-1" | "4-1-4-1";
function formationRows(formation: Formation): string[][] {
  const backFour = ["LAT", "ZAG", "ZAG", "LAT"];
  if (formation === "4-4-2") return [["GOL"], backFour, ["MEI", "VOL", "VOL", "MEI"], ["ATA", "ATA"]];
  if (formation === "3-5-2") return [["GOL"], ["ZAG", "ZAG", "ZAG"], ["LAT", "VOL", "MEI", "VOL", "LAT"], ["ATA", "ATA"]];
  if (formation === "4-2-3-1") return [["GOL"], backFour, ["VOL", "VOL"], ["MEI", "MEI", "MEI"], ["ATA"]];
  if (formation === "3-3-4") return [["GOL"], ["ZAG", "ZAG", "ZAG"], ["VOL", "MEI", "VOL"], ["ATA", "ATA", "ATA", "ATA"]];
  if (formation === "5-3-2") return [["GOL"], ["LAT", "ZAG", "ZAG", "ZAG", "LAT"], ["VOL", "MEI", "VOL"], ["ATA", "ATA"]];
  if (formation === "4-5-1") return [["GOL"], backFour, ["VOL", "MEI", "VOL", "MEI", "VOL"], ["ATA"]];
  if (formation === "3-1-4-2") return [["GOL"], ["ZAG", "ZAG", "ZAG"], ["VOL"], ["LAT", "MEI", "MEI", "LAT"], ["ATA", "ATA"]];
  if (formation === "4-2-4") return [["GOL"], backFour, ["VOL", "VOL"], ["ATA", "MEI", "MEI", "ATA"]];
  if (formation === "4-3-2-1") return [["GOL"], backFour, ["VOL", "MEI", "VOL"], ["MEI", "MEI"], ["ATA"]];
  if (formation === "3-4-3") return [["GOL"], ["ZAG", "ZAG", "ZAG"], ["LAT", "VOL", "VOL", "LAT"], ["ATA", "ATA", "ATA"]];
  if (formation === "5-4-1") return [["GOL"], ["LAT", "ZAG", "ZAG", "ZAG", "LAT"], ["VOL", "MEI", "MEI", "VOL"], ["ATA"]];
  if (formation === "4-1-4-1") return [["GOL"], backFour, ["VOL"], ["MEI", "MEI", "MEI", "MEI"], ["ATA"]];
  return [["GOL"], backFour, ["VOL", "MEI", "MEI"], ["ATA", "ATA", "ATA"]];
}
type PlayerMorale = Record<string, number>;
const PLAYER_MORALE_KEY = "ketvfm-player-morale";
function readPlayerMorale(): PlayerMorale {
  try { return JSON.parse(window.localStorage.getItem(PLAYER_MORALE_KEY) ?? "{}") as PlayerMorale; }
  catch { return {}; }
}
function clampMorale(value: number) { return Math.max(0, Math.min(100, value)); }

type Pressure = "Baixa" | "Média" | "Alta";
type Fixture = { round: number; home: { id: string; name: string; state: string }; away: { id: string; name: string; state: string }; weekday: string; kickoff: string };
const KICKOFF_SLOTS = [
  { weekday: "Quarta-feira", kickoff: "19:00" },
  { weekday: "Quarta-feira", kickoff: "21:30" },
  { weekday: "Quinta-feira", kickoff: "19:00" },
  { weekday: "Quinta-feira", kickoff: "21:30" },
  { weekday: "Sábado", kickoff: "16:00" },
  { weekday: "Sábado", kickoff: "18:30" },
  { weekday: "Sábado", kickoff: "21:00" },
  { weekday: "Domingo", kickoff: "11:00" },
  { weekday: "Domingo", kickoff: "16:00" },
  { weekday: "Domingo", kickoff: "18:30" },
  { weekday: "Domingo", kickoff: "20:30" },
  { weekday: "Segunda-feira", kickoff: "20:00" },
];
type DivisionFixture = Fixture & { division: BrazilianDivision; groupName: string | undefined };
function buildFixtures(clubs: Array<{id:string;name:string;state:string}>, maxRounds: number): Fixture[] {
  if (clubs.length < 2) return [];
  const teams = [...clubs];
  if (teams.length % 2) teams.push({ id: "bye", name: "Folga", state: "" });
  const fixed = teams[0];
  let rotating = teams.slice(1);
  const fixtures: Fixture[] = [];
  const half = teams.length - 1;
  for (let round = 0; round < half; round += 1) {
    const lineup = [fixed, ...rotating].filter((t): t is NonNullable<typeof t> => !!t);
    for (let i = 0; i < lineup.length / 2; i += 1) {
      const left = lineup[i], right = lineup[lineup.length - 1 - i];
      if (left && right && left.id !== "bye" && right.id !== "bye") {
        const home = round % 2 === 0 ? left : right;
        const away = round % 2 === 0 ? right : left;
        const firstSlot = KICKOFF_SLOTS[(round * 3) % KICKOFF_SLOTS.length]!;
        const returnSlot = KICKOFF_SLOTS[((round + half) * 3) % KICKOFF_SLOTS.length]!;
        fixtures.push({ round: round + 1, home, away, ...firstSlot }, { round: round + half + 1, home: away, away: home, ...returnSlot });
      }
    }
    rotating = [...rotating.slice(-1), ...rotating.slice(0, -1)];
  }
  return fixtures.filter((f) => f.round <= maxRounds);
}
const SPEEDS: Record<MatchSpeed, { label: string; interval: number }> = {
  slow: { label: "Lento", interval: 3000 },
  medium: { label: "Médio", interval: 2000 },
  fast: { label: "Rápido", interval: 1000 },
};

// Público é um dado de simulação do jogo, não uma presença oficial.
function estimatedAttendance(homeId: string, awayId: string) {
  const seed = [...(homeId + "-" + awayId)].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return 6500 + (seed * 7919 % 28500);
}
const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 2 });

// Escudos públicos do pacote de imagens do Brasileirão 2026 (Série A).
const CRESTS: Record<string, string> = {
  "Athletico Paranaense": "Athletico Paranaense.png",
  "Atlético Mineiro": "Atlético Mineiro.png",
  Bahia: "Bahia.png",
  Botafogo: "Botafogo.png",
  Chapecoense: "Chapecoense.png",
  Corinthians: "Corinthians.png",
  Coritiba: "Coritiba.png",
  Cruzeiro: "Cruzeiro.png",
  Flamengo: "Flamengo.png",
  Fluminense: "Fluminense.png",
  Grêmio: "Grêmio.png",
  Internacional: "Internacional.png",
  Mirassol: "Mirassol.png",
  Palmeiras: "Palmeiras.png",
  "Red Bull Bragantino": "Red Bull Bragantino.png",
  Remo: "Remo.png",
  Santos: "Santos.png",
  "São Paulo": "São Paulo.png",
  "Vasco da Gama": "Vasco da Gama.png",
  Vitória: "Vitória.png",
};
const STADIUMS: Record<string, string> = {
  "Athletico Paranaense": "Ligga Arena",
  "Atlético Mineiro": "Arena MRV",
  Bahia: "Arena Fonte Nova",
  Botafogo: "Estádio Nilton Santos",
  Chapecoense: "Arena Condá",
  Corinthians: "Neo Química Arena",
  Coritiba: "Estádio Couto Pereira",
  Cruzeiro: "Mineirão",
  Flamengo: "Maracanã",
  Fluminense: "Maracanã",
  Grêmio: "Arena do Grêmio",
  Internacional: "Estádio Beira-Rio",
  Mirassol: "Estádio José Maria de Campos Maia",
  Palmeiras: "Nubank Parque",
  "Red Bull Bragantino": "Estádio Cícero de Souza Marques",
  Remo: "Estádio Mangueirão",
  Santos: "Vila Belmiro",
  "São Paulo": "MorumBIS",
  "Vasco da Gama": "São Januário",
  Vitória: "Barradão",
  "América Mineiro": "Arena Independência",
  "Athletic Club": "Arena Sicredi",
  "Atlético Goianiense": "Estádio Antônio Accioly",
  "Avaí": "Estádio da Ressacada",
  "Botafogo de Ribeirão Preto": "Estádio Santa Cruz",
  Ceará: "Arena Castelão",
  CRB: "Estádio Rei Pelé",
  Criciúma: "Estádio Heriberto Hülse",
  Cuiabá: "Arena Pantanal",
  Fortaleza: "Arena Castelão",
  Goiás: "Estádio Hailé Pinheiro (Serrinha)",
  Juventude: "Estádio Alfredo Jaconi",
  Londrina: "Estádio do Café",
  Náutico: "Estádio dos Aflitos",
  Novorizontino: "Estádio Jorge Ismael de Biasi",
  "Operário Ferroviário": "Estádio Germano Krüger",
  "Ponte Preta": "Estádio Moisés Lucarelli",
  "São Bernardo": "Estádio Primeiro de Maio",
  "Sport Recife": "Ilha do Retiro",
  "Vila Nova": "Estádio Onésio Brasileiro Alvarenga",
  Amazonas: "Estádio Carlos Zamith",
  Anápolis: "Estádio Jonas Duarte",
  Barra: "Arena Barra FC",
  "Botafogo da Paraíba": "Estádio Almeidão",
  Brusque: "Arena Simon",
  Caxias: "Estádio Centenário",
  Confiança: "Arena Batistão",
  Ferroviária: "Arena da Fonte Luminosa",
  Figueirense: "Estádio Orlando Scarpelli",
  Floresta: "Estádio Domingão",
  Guarani: "Estádio Brinco de Ouro",
  "Inter de Limeira": "Estádio Major José Levy Sobrinho",
  Itabaiana: "Estádio Etelvino Mendonça",
  Ituano: "Estádio Novelli Júnior",
  Maranhão: "Estádio Castelão",
  Maringá: "Estádio Willie Davids",
  Paysandu: "Estádio Mangueirão",
  "Santa Cruz": "Estádio do Arruda",
  "Volta Redonda": "Estádio Raulino de Oliveira",
  Ypiranga: "Estádio Colosso da Lagoa",
  ABC: "Estádio Frasqueirão",
  ABECAT: "Estádio Municipal Luiz Benedito",
  "Água Santa": "Estádio Distrital do Inamar",
  "Águia de Marabá": "Estádio Zinho de Oliveira",
  Altos: "Estádio Lindolfo Monteiro",
  "America-RJ": "Estádio Giulite Coutinho",
  "América-RN": "Arena das Dunas",
  Aparecidense: "Estádio Aníbal Batista de Toledo",
  Araguaína: "Estádio Mirandão",
  ASA: "Estádio Coaracy da Mata Fonseca",
  "Atlético-BA": "Estádio Antônio de Figueiredo Carneiro (Carneirão)",
  "Atlético-CE": "Estádio Domingão",
  Azuriz: "Estádio Os Pioneiros",
  Betim: "Arena Urbsan",
  Blumenau: "Estádio Monumental do Sesi",
  "Brasil-RS": "Estádio Bento Freitas",
  Brasiliense: "Estádio Boca do Jacaré",
  Capital: "Estádio Juscelino Kubitschek",
  Ceilândia: "Estádio Abadião",
  Central: "Estádio Lacerdão",
  Cianorte: "Estádio Albino Turbay",
  CRAC: "Arena Rifertil",
  CSA: "Estádio Rei Pelé",
  CSE: "Estádio Juca Sampaio",
  Decisão: "Estádio Arthur Tavares de Melo",
  "Democrata GV": "Estádio Mamudão",
  "FC Cascavel": "Estádio Olímpico Regional",
  Ferroviário: "Estádio Presidente Vargas",
  "Fluminense-PI": "Estádio Lindolfo Monteiro",
  Galvez: "Arena da Floresta",
  Gama: "Estádio Bezerrão",
  GAS: "Estádio Canarinho",
  Goiatuba: "Estádio Divino Garcia Rosa",
  Guaporé: "Estádio Cassolão",
  "Guarany de Bagé": "Estádio Estrela D'Alva",
  Humaitá: "Arena da Floresta",
  IAPE: "Estádio Nhozinho Santos",
  Iguatu: "Estádio Morenão",
  Imperatriz: "Estádio Frei Epifânio",
  Ivinhema: "Estádio Saraivão",
  Independência: "Arena da Floresta",
  Inhumas: "Estádio Zico Brandão",
  Jacuipense: "Estádio Pituaçu",
  Joinville: "Arena Joinville",
  Juazeirense: "Estádio Adauto Moraes",
  Lagarto: "Estádio Barretão",
  Laguna: "Estádio Frasqueirão",
  Luverdense: "Estádio Passo das Emas",
  Madureira: "Estádio Conselheiro Galvão",
  Maguary: "Estádio SESC Goiana",
  Manaus: "Arena da Amazônia",
  Manauara: "Estádio Carlos Zamith",
  "Marcílio Dias": "Estádio Dr. Hercílio Luz",
  Maracanã: "Estádio Almir Dutra",
  Maricá: "Estádio João Saldanha",
  Mixto: "Arena Pantanal",
  "Monte Roraima": "Estádio Canarinho",
  "Moto Club": "Estádio Nhozinho Santos",
  "Nacional-AM": "Estádio da Colina",
  Noroeste: "Estádio Alfredo de Castilho",
  "Nova Iguaçu": "Estádio Jânio Moraes (Laranjão)",
  "Operário-MS": "Estádio Jacques da Luz",
  "Operário-MT": "Arena Pantanal",
  Oratório: "Estádio Augusto Antunes",
  Parnahyba: "Estádio Pedro Alelaf",
  Piauí: "Estádio Albertão",
  Porto: "Estádio Agnaldo Bento",
  "Porto Velho": "Estádio Aluízio Ferreira",
  Portuguesa: "Estádio do Canindé",
  "Portuguesa-RJ": "Estádio Luso-Brasileiro",
  "Pouso Alegre": "Estádio Manduzão",
  Primavera: "Estádio Cerradão",
  "Real Noroeste": "Estádio José Olímpio da Rocha",
  Retrô: "Arena de Pernambuco",
  "Rio Branco-ES": "Estádio Kleber Andrade",
  "Sampaio Corrêa-MA": "Estádio Castelão",
  "Sampaio Corrêa-RJ": "Estádio Lourival Gomes",
  "Santa Catarina": "Estádio Alfredo João Krieck",
  "São José-RS": "Estádio Passo d'Areia",
  "São Joseense": "Estádio do Pinhão",
  "São Luiz": "Estádio 19 de Outubro",
  "São Raimundo-RR": "Estádio Canarinho",
  "Serra Branca": "Estádio Amigão",
  Sergipe: "Arena Batistão",
  Sousa: "Estádio Marizão",
  Tirol: "Estádio Presidente Vargas",
  Tocantinópolis: "Estádio João Ribeiro",
  Tombense: "Estádio Antônio Guimarães de Almeida",
  Treze: "Estádio Amigão",
  Trem: "Estádio Augusto Antunes",
  "Tuna Luso": "Estádio do Souza",
  Uberlândia: "Estádio Parque do Sabiá",
  "União Rondonópolis": "Estádio Luthero Lopes",
  "Velo Clube": "Estádio Benito Agnelo Castellano",
  "Vitória-ES": "Estádio Salvador Costa",
  "XV de Piracicaba": "Estádio Barão da Serra Negra",
};

const FOOTYLOGOS_SLUGS: Record<string, string> = {
  "Atlético-BA": "atletico-de-alagoinhas",
  "Atlético-CE": "futebol-clube-atletico-cearense",
  "Brasil-RS": "brasil-de-pelotas",
  "Democrata GV": "democrata-gv",
  "Fluminense-PI": "fluminense-pi",
  "Operário-MT": "varzea-grande",
  "América Mineiro": "america-mineiro",
  "Athletic Club": "athletic",
  "Atlético Goianiense": "atletico-goianiense",
  "Avaí": "avai-fc",
  "Botafogo de Ribeirão Preto": "botafogo-sp",
  "Ceará": "ceara-sc",
  "CRB": "crb",
  "Criciúma": "criciuma",
  "Novorizontino": "gremio-novorizontino",
  "Operário Ferroviário": "operario-ferroviario",
  "Botafogo da Paraíba": "botafogo-pb",
  "Ferroviária": "ferroviaria",
  "Inter de Limeira": "inter-de-limeira",
  "Maranhão": "maranhao",
  "Paysandu": "paysandu",
  "Volta Redonda": "volta-redonda",
  "Ypiranga": "ypiranga",
  "ABC": "abc",
  "ABECAT": "abecat-ouvidorense",
  "Água Santa": "agua-santa",
  "Águia de Marabá": "aguia-de-maraba",
  "Altos": "altos",
  "America-RJ": "america-rj",
  "América-RN": "america-de-natal",
  "Aparecidense": "aparecidense",
  "Araguaína": "araguaina",
  "ASA": "asa-de-arapiraca",
  "Atlético de Alagoinhas": "atletico-de-alagoinhas",
  "Atlético Cearense": "atletico-cearense",
  "Azuriz": "azuriz",
  "Betim": "betim-futebol",
  "Blumenau": "blumenau",
  "Brasil de Pelotas": "brasil-de-pelotas",
  "Brasiliense": "brasiliense",
  "Capital": "capital-clube-de-futebol",
  "Ceilândia": "ceilandia",
  "Central": "central-sport-club",
  "Cianorte": "cianorte",
  "CRAC": "crac",
  "CSA": "csa",
  "CSE": "cse",
  "Decisão": "decisao-goiana",
  "Democrata de Governador Valadares": "democrata-gv",
  "FC Cascavel": "fc-cascavel",
  "Ferroviário": "ferroviario",
  "Fluminense do Piauí": "fluminense-pi",
  "Galvez": "galvez",
  "Gama": "gama",
  "GAS": "gremio-atletico-sampaio",
  "Goiatuba": "goiatuba",
  "Guaporé": "guapore",
  "Guarany de Bagé": "guarany-de-bage",
  "Humaitá": "sport-clube-humaita",
  "IAPE": "iape",
  "Iguatu": "iguatu",
  "Imperatriz": "imperatriz",
  "Ivinhema": "ivinhema",
  "Independência": "independencia",
  "Inhumas": "inhumas",
  "Jacuipense": "ec-jacuipense",
  "Joinville": "joinville",
  "Juazeirense": "juazeirense",
  "Lagarto": "lagarto",
  "Laguna": "clube-laguna",
  "Luverdense": "luverdense",
  "Madureira": "madureira",
  "Maguary": "maguary",
  "Manaus": "manaus",
  "Manauara": "manauara",
  "Marcílio Dias": "marcilio-dias",
  "Maracanã": "maracana",
  "Maricá": "marica",
  "Mixto": "mixto",
  "Monte Roraima": "monte-roraima",
  "Moto Club": "moto-club-de-sao-luis",
  "Nacional-AM": "nacional-am",
  "Noroeste": "noroeste",
  "Nova Iguaçu": "nova-iguacu",
  "Operário-MS": "operario-ms",
  "Operário de Várzea Grande": "operario-mt",
  "Oratório": "oratorio",
  "Parnahyba": "parnahyba",
  "Piauí": "piaui",
  "Porto": "porto-ba",
  "Porto Velho": "porto-velho",
  "Portuguesa": "associacao-portuguesa-de-desportos",
  "Portuguesa-RJ": "portuguesa-rj",
  "Pouso Alegre": "pouso-alegre",
  "Primavera": "primavera-atletico-clube",
  "Real Noroeste": "real-noroeste",
  "Retrô": "retro-fc",
  "Rio Branco-ES": "rio-branco-es",
  "Sampaio Corrêa-MA": "sampaio-correa",
  "Sampaio Corrêa-RJ": "sampaio-correa-rj",
  "Santa Catarina": "santa-catarina",
  "São José-RS": "ec-sao-jose",
  "São Joseense": "sao-joseense",
  "São Luiz": "ec-sao-luiz",
  "São Raimundo-RR": "sao-raimundo-rr",
  "Serra Branca": "serra-branca",
  "Sergipe": "sergipe",
  "Sousa": "sousa",
  "Tirol": "tirol",
  "Tocantinópolis": "tocantinopolis",
  "Tombense": "tombense",
  "Treze": "treze",
  "Trem": "trem",
  "Tuna Luso": "tuna-luso",
  "Uberlândia": "uberlandia",
  "União Rondonópolis": "uniao-rondonopolis",
  "Velo Clube": "velo-clube",
  "Vitória-ES": "vitoria-es",
  "XV de Piracicaba": "xv-de-piracicaba",
};

function logoSlug(name: string) {
  return FOOTYLOGOS_SLUGS[name] ?? name.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function Crest({ club }: { club: string }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const localFile = CRESTS[club];
  const slug = logoSlug(club);
  const sources = [
    ...(localFile ? [`https://raw.githubusercontent.com/Lobobinho/Escudos-dos-Clubes-do-Brasileirao-2026/master/${encodeURIComponent(localFile)}`] : []),
    `https://www.footylogos.com/dls/logo/${slug}.png`,
    `https://www.footylogos.com/dls/logo/rgba-v1/${slug}.png`,
  ];
  if (sourceIndex >= sources.length) return <span aria-label={`Escudo de ${club} indisponível`} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-black text-primary">{club.split(/\\s+/).map((part) => part[0]).slice(0, 3).join("")}</span>;
  return <img src={sources[sourceIndex]!} alt={`Escudo do ${club}`} loading="lazy" onError={() => setSourceIndex((current) => current + 1)} className="h-12 w-12 shrink-0 object-contain" />;
}

function MoraleMeter({ title, value, description }: { title: string; value: number; description: string }) {
  const status = value >= 80 ? "Muito boa" : value >= 65 ? "Boa" : value >= 45 ? "Em observação" : value >= 25 ? "Sob pressão" : "Crítica";
  const color = value >= 65 ? "bg-emerald-500" : value >= 45 ? "bg-amber-500" : "bg-red-500";
  return (
    <div>
      <div className="flex items-center justify-between gap-3"><h2 className="text-sm font-bold uppercase">{title}</h2><strong className="font-display text-2xl tabular-nums">{value}/100</strong></div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} /></div>
      <p className="mt-1 text-xs font-semibold text-muted-foreground">{status}</p><p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

type SavedMatchSession = { result: MatchResult | null; roundResults: Record<string, MatchResult>; minute: number; playing: boolean; halftime: boolean; formation: Formation; pressure: Pressure; tacticalApproach: "defensive" | "balanced" | "attacking"; substitutions: number; substitutionNote: string; playerOutId?: string; playerInId?: string; lineupSelections?: Record<string, string>; finalized?: boolean };
const MATCH_SESSION_KEY = "ketvfm-match-session";
function readMatchSession(): Partial<SavedMatchSession> {
  try {
    const saved = JSON.parse(window.localStorage.getItem(MATCH_SESSION_KEY) ?? "{}") as Partial<SavedMatchSession>;
    // Descarta sessões antigas que não registravam o estado de finalização e podiam abrir direto no placar.
    if (saved.result && typeof saved.finalized !== "boolean") return {};
    return saved;
  } catch { return {}; }
}

function Page() {
  const [career, setCareer] = useState<CareerSave | null>(() => {
    try {
      const raw = window.localStorage.getItem("ketvfm-career");
      return raw ? JSON.parse(raw) as CareerSave : null;
    } catch { return null; }
  });
  const [result, setResult] = useState<MatchResult | null>(() => readMatchSession().result ?? null);
  const [roundResults, setRoundResults] = useState<Record<string, MatchResult>>(() => readMatchSession().roundResults ?? {});
  const divisionClubs = career ? getClubsByDivision(career.division as BrazilianDivision) : [];
  const group = career?.division === "Série D" ? divisionClubs.find((club) => club.name === career.club)?.group : undefined;
  const participatingClubs = group ? divisionClubs.filter((club) => club.group === group) : divisionClubs;
  const totalRounds = (participatingClubs.length - 1) * 2;
  const fixtures = buildFixtures(participatingClubs, totalRounds);
  const matchesPlayedBeforeCurrent = Math.max(0, (career?.played ?? 0) - (result ? 1 : 0));
  const currentRound = Math.min(career?.round ?? (matchesPlayedBeforeCurrent + 1), totalRounds);
  const roundFixtures = fixtures.filter((fixture) => fixture.round === currentRound);
  const allDivisionRoundFixtures: DivisionFixture[] = (["Série A", "Série B", "Série C", "Série D"] as BrazilianDivision[]).flatMap((division): DivisionFixture[] => {
    const clubs = getClubsByDivision(division);
    if (division === "Série D") {
      const groups = [...new Set(clubs.map((club) => club.group).filter((value): value is string => Boolean(value)))];
      return groups.flatMap((groupName) => {
        const groupClubs = clubs.filter((club) => club.group === groupName);
        return buildFixtures(groupClubs, (groupClubs.length - 1) * 2)
          .filter((fixture) => fixture.round === currentRound)
          .map((fixture) => ({ ...fixture, division, groupName }));
      });
    }
    return buildFixtures(clubs, (clubs.length - 1) * 2)
      .filter((fixture) => fixture.round === currentRound)
      .map((fixture) => ({ ...fixture, division, groupName: undefined as string | undefined }));
  });
  const careerFixture = roundFixtures.find((fixture) => fixture.home.name === career?.club || fixture.away.name === career?.club);
  const fixtureOpponent = careerFixture ? (careerFixture.home.name === career?.club ? careerFixture.away : careerFixture.home) : null;
  const [speed, setSpeed] = useState<MatchSpeed>("medium");
  const [ticketPrice, setTicketPrice] = useState(() => {
    const saved = Number(window.localStorage.getItem("ketvfm-ticket-price"));
    return Number.isFinite(saved) && saved > 0 ? saved : 50;
  });
  useEffect(() => { window.localStorage.setItem("ketvfm-ticket-price", String(ticketPrice)); }, [ticketPrice]);
  const [minute, setMinute] = useState(() => readMatchSession().minute ?? 0);
  const [playing, setPlaying] = useState(() => readMatchSession().playing ?? false);
  const [halftime, setHalftime] = useState(() => readMatchSession().halftime ?? false);
  const [formation, setFormation] = useState<Formation>(() => readMatchSession().formation ?? "4-3-3");
  const [pressure, setPressure] = useState<Pressure>(() => readMatchSession().pressure ?? "Média");
  const [tacticalApproach, setTacticalApproach] = useState<"defensive" | "balanced" | "attacking">(() => readMatchSession().tacticalApproach ?? career?.approach ?? "balanced");
  const [substitutions, setSubstitutions] = useState(() => readMatchSession().substitutions ?? 0);
  const [substitutionNote, setSubstitutionNote] = useState(() => readMatchSession().substitutionNote ?? "");
  const [playerOutId, setPlayerOutId] = useState(() => readMatchSession().playerOutId ?? "");
  const [playerInId, setPlayerInId] = useState(() => readMatchSession().playerInId ?? "");
  const [lineupSelections, setLineupSelections] = useState<Record<string, string>>(() => readMatchSession().lineupSelections ?? {});
  const [matchFinalized, setMatchFinalized] = useState(() => readMatchSession().finalized ?? false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setMinute((current) => {
        if (current === 44) {
          setPlaying(false);
          setHalftime(true);
          return 45;
        }
        if (current >= 89) {
          setPlaying(false);
          return 90;
        }
        return current + 1;
      });
    }, SPEEDS[speed].interval);
    return () => window.clearInterval(timer);
  }, [playing, speed]);

  useEffect(() => {
    if (!result) {
      window.localStorage.removeItem(MATCH_SESSION_KEY);
      return;
    }
    const session: SavedMatchSession = { result, roundResults, minute, playing, halftime, formation, pressure, tacticalApproach, substitutions, substitutionNote, playerOutId, playerInId, lineupSelections, finalized: matchFinalized };
    window.localStorage.setItem(MATCH_SESSION_KEY, JSON.stringify(session));
  }, [result, roundResults, minute, playing, halftime, formation, pressure, tacticalApproach, substitutions, substitutionNote, playerOutId, playerInId, lineupSelections, matchFinalized]);

  useEffect(() => {
    if (!career || minute !== 90 || !result || matchFinalized) return;
    const won = result.homeGoals > result.awayGoals;
    const drew = result.homeGoals === result.awayGoals;
    const updated = { ...career, played: career.played + 1, fanMorale: Math.max(0, Math.min(100, (career.fanMorale ?? 70) + (won ? 7 : drew ? 1 : -7))), boardConfidence: Math.max(0, Math.min(100, (career.boardConfidence ?? 70) + (won ? 9 : drew ? -1 : -9))) };
    const clubPlayers = VERIFIED_PLAYERS_2026.filter((player) => player.clubId === career.club.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-"));
    const nextMorale = { ...readPlayerMorale() };
    clubPlayers.forEach((player) => {
      const scored = result.events.filter((event) => event.minute <= 90 && event.clubId === result.home.id && event.playerId === player.id).length;
      const delta = (won ? 4 : drew ? 1 : -3) + (scored * 5) + 1;
      nextMorale[player.id] = clampMorale((nextMorale[player.id] ?? 65) + delta);
    });
    window.localStorage.setItem(PLAYER_MORALE_KEY, JSON.stringify(nextMorale));
    window.localStorage.setItem("ketvfm-career", JSON.stringify(updated));
    setCareer(updated);
    setMatchFinalized(true);
  }, [minute, result, matchFinalized, career]);

  useEffect(() => {
    if (!career || minute !== 90 || !result || Object.keys(roundResults).length > 0) return;
    const completedRoundResults: Record<string, MatchResult> = {};
    allDivisionRoundFixtures
      .filter((fixture) => fixture.home.name !== career.club && fixture.away.name !== career.club)
      .forEach((fixture) => {
        const homeTeam: MatchTeam = { id: fixture.home.id, name: fixture.home.name, attack: 70, midfield: 70, defense: 70, players: VERIFIED_PLAYERS_2026.filter((player) => player.clubId === fixture.home.id).map(({ id, name }) => ({ id, name })) };
        const awayTeam: MatchTeam = { id: fixture.away.id, name: fixture.away.name, attack: 70, midfield: 70, defense: 70, players: VERIFIED_PLAYERS_2026.filter((player) => player.clubId === fixture.away.id).map(({ id, name }) => ({ id, name })) };
        const key = fixture.round + "-" + fixture.home.id + "-" + fixture.away.id;
        completedRoundResults[key] = simulateMatch(homeTeam, awayTeam);
      });
    setRoundResults(completedRoundResults);
  }, [minute, result, roundResults, allDivisionRoundFixtures, career]);

  if (!career) {
    return <section className="rounded-md border border-border bg-card p-8"><h1 className="text-3xl font-bold uppercase">Nenhuma carreira encontrada</h1><p className="mt-2 text-muted-foreground">Crie sua carreira antes de entrar em campo.</p><Link to="/nova-carreira" className="mt-5 inline-block rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Criar carreira</Link></section>;
  }

  const visibleEvents = result?.events.filter((event) => event.minute <= minute) ?? [];
  // O placar desta simulação sempre usa o clube do treinador como mandante; o estádio deve seguir o time exibido no lado esquerdo do placar, não o mando original do calendário.
  const stadium = STADIUMS[result?.home.name ?? careerFixture?.home.name ?? career.club] ?? "Estádio não cadastrado";
  const progress = (minute / 90) * 100;
  const careerClubId = career.club.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
  const availableSubstitutionPlayers = VERIFIED_PLAYERS_2026.filter((player) => player.clubId === careerClubId);
  const tacticalRows = formationRows(formation);
  const positionMatches = (role: string, position: string) => role === position || (role === "LAT" && position === "DEF");
  const selectedLineupPlayers = Object.values(lineupSelections).filter(Boolean);
  function renderTacticalBoard(withSubstitutions: boolean) {
    return <section className="mt-5 rounded-xl border-2 border-primary bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-widest text-primary">{withSubstitutions ? "Intervalo · ajustes do treinador" : "Pré-jogo · escalação"}</p><h2 className="mt-1 font-display text-2xl font-black uppercase">Campo tático · {formation}</h2><p className="mt-1 text-sm text-muted-foreground">Escolha a formação e defina quem joga em cada posição antes de entrar em campo.</p></div>
        <label className="text-sm font-semibold">Esquema tático<select value={formation} onChange={e => setFormation(e.target.value as Formation)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2"><option>4-4-2</option><option>4-3-3</option><option>3-5-2</option><option>4-2-3-1</option><option>3-3-4</option><option>5-3-2</option><option>4-5-1</option><option>3-1-4-2</option><option>4-2-4</option><option>4-3-2-1</option><option>3-4-3</option><option>5-4-1</option><option>4-1-4-1</option></select></label>
      </div>
      <div className="mt-4 rounded-xl border-2 border-emerald-700 bg-emerald-950 p-3 sm:p-5">
        <div className="rounded-lg border border-emerald-600/70 bg-emerald-900/30 p-3">
          <div className="mb-3 flex justify-between text-[10px] font-bold uppercase tracking-widest text-emerald-100"><span>{career.club}</span><span>Seu time</span></div>
          <div className="space-y-3">
            {tacticalRows.map((row,rowIndex) => <div key={rowIndex} className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {row.map((role,index) => {
                const slot = rowIndex + "-" + index;
                const currentId = lineupSelections[slot] ?? "";
                const choices = availableSubstitutionPlayers.filter(player => positionMatches(role, player.position));
                const current = availableSubstitutionPlayers.find(player => player.id === currentId);
                return <label key={slot} className="flex w-[145px] flex-col items-center rounded-md border border-emerald-500/60 bg-emerald-800/90 p-2 text-center">
                  <span className="text-[10px] font-black text-emerald-100">{role}</span>
                  <select aria-label={"Jogador na posição " + role} value={currentId} onChange={e => setLineupSelections(old => ({...old,[slot]:e.target.value}))} className="mt-1 w-full rounded border border-emerald-600 bg-emerald-950 px-1 py-2 text-center text-[11px] font-bold text-white">
                    <option value="">Escolher atleta</option>
                    {choices.map(player => <option key={player.id} value={player.id} disabled={selectedLineupPlayers.includes(player.id) && player.id !== currentId}>{player.name}</option>)}
                  </select>
                  {current && <span className="mt-1 text-[10px] text-emerald-100">Moral {readPlayerMorale()[current.id] ?? 65}/100</span>}
                </label>;
              })}
            </div>)}
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">A base de elencos é parcial. Se não houver atleta compatível com uma posição, ela ficará sem escalação até o cadastro do jogador.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Postura<select value={tacticalApproach} onChange={e => setTacticalApproach(e.target.value as typeof tacticalApproach)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="defensive">Defensiva</option><option value="balanced">Equilibrada</option><option value="attacking">Ofensiva</option></select></label>
        <label className="text-sm font-semibold">Pressão<select value={pressure} onChange={e => setPressure(e.target.value as Pressure)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option>Baixa</option><option>Média</option><option>Alta</option></select></label>
      </div>
      {withSubstitutions && <div className="mt-5 rounded-md border border-border p-4">
        <p className="font-bold">Substituições: {substitutions}/5</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold">Quem vai sair?<select value={playerOutId} onChange={e => setPlayerOutId(e.target.value)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="">Selecione o jogador</option>{availableSubstitutionPlayers.filter(p => selectedLineupPlayers.includes(p.id)).map(p => <option key={p.id} value={p.id}>{p.name} · {p.position}</option>)}</select></label>
          <label className="text-sm font-semibold">Quem vai entrar?<select value={playerInId} onChange={e => setPlayerInId(e.target.value)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3"><option value="">Selecione o jogador</option>{availableSubstitutionPlayers.filter(p => !selectedLineupPlayers.includes(p.id) || p.id === playerOutId).map(p => <option key={p.id} value={p.id}>{p.name} · {p.position}</option>)}</select></label>
        </div>
        <button type="button" disabled={substitutions >= 5 || !playerOutId || !playerInId || playerOutId === playerInId} onClick={() => {
          const outgoing = availableSubstitutionPlayers.find(p => p.id === playerOutId);
          const incoming = availableSubstitutionPlayers.find(p => p.id === playerInId);
          if (!outgoing || !incoming) return;
          const slot = Object.keys(lineupSelections).find(key => lineupSelections[key] === outgoing.id);
          if (slot) setLineupSelections(old => ({...old,[slot]:incoming.id}));
          setSubstitutions(n => n + 1);
          setSubstitutionNote("Sai " + outgoing.name + "; entra " + incoming.name + ".");
          setResult(current => current ? ({...current,home:{...current.home,players:[...(current.home.players ?? []).filter(p => p.id !== outgoing.id),{id:incoming.id,name:incoming.name}]}}) : current);
          setPlayerOutId(""); setPlayerInId("");
        }} className="mt-4 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary disabled:opacity-40">Confirmar substituição</button>
        {substitutionNote && <p className="mt-2 text-sm font-semibold text-primary">{substitutionNote}</p>}
      </div>}
    </section>;
  }

  function play() {
    if (!fixtureOpponent || !careerFixture || playing) return;
    const own: MatchTeam = {
      id: career!.club.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-"),
      name: career!.club,
      attack: 70, midfield: 70, defense: 70, approach: tacticalApproach,
      players: VERIFIED_PLAYERS_2026.filter((player) => player.clubId === career!.club.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")).map(({ id, name }) => ({ id, name })),
    };
    const rival: MatchTeam = {
      id: fixtureOpponent.id,
      name: fixtureOpponent.name,
      attack: 70, midfield: 70, defense: 70,
      players: VERIFIED_PLAYERS_2026.filter((player) => player.clubId === fixtureOpponent.id).map(({ id, name }) => ({ id, name })),
    };
    const selectedPlayers = Object.values(lineupSelections).filter(Boolean).map(id => availableSubstitutionPlayers.find(player => player.id === id)).filter((player): player is typeof availableSubstitutionPlayers[number] => Boolean(player)).map(({id,name}) => ({id,name}));
    if (selectedPlayers.length) own.players = selectedPlayers;
    const next = simulateMatch(own, rival, Math.random, 1, 45);
    // Os demais confrontos só recebem resultado depois que a partida do treinador terminar.
    // Assim, a rodada não revela placares futuros no início do jogo.
    setRoundResults({});
    setResult(next);
    setMinute(0);
    setHalftime(false);
    setMatchFinalized(false);
    setSubstitutions(0);
    setSubstitutionNote("");
    setPlayerOutId("");
    setPlayerInId("");
    setSubstitutions(0);
    setPlaying(true);
  }

  function resetMatch() {
    setPlaying(false);
    setHalftime(false);
    setMinute(0);
    setResult(null);
    setMatchFinalized(false);
    setRoundResults({});
    const nextRound = Math.min(currentRound + 1, totalRounds);
    const advancedCareer = { ...career!, round: nextRound };
    window.localStorage.setItem("ketvfm-career", JSON.stringify(advancedCareer));
    setCareer(advancedCareer);
    window.localStorage.removeItem(MATCH_SESSION_KEY);
  }

  return (
    <>
      <PageHeader kicker={`${career.division} · Temporada ${career.season}`} title="Central da partida">
        Treinador: {career.coach} · Clube: {career.club}
      </PageHeader>
      {!result && careerFixture && renderTacticalBoard(false)}
      {result && <section className="mt-6 rounded-md border border-primary bg-hero p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">{minute === 90 ? "Apito final" : "Partida ao vivo"}</p>
          <p className="font-display text-2xl font-black tabular-nums">{minute}' <span className="text-sm font-semibold text-muted-foreground">/ 90'</span></p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-background"><div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} /></div>
        <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-2"><Crest club={result.home.name} /><p className="font-display text-sm font-bold uppercase sm:text-lg">{result.home.name}</p></div>
          <p className="text-4xl font-black tabular-nums sm:text-5xl">{visibleEvents.filter((event) => event.clubId === result.home.id).length} × {visibleEvents.filter((event) => event.clubId === result.away.id).length}</p>
          <div className="flex flex-col items-center gap-2"><Crest club={result.away.name} /><p className="font-display text-sm font-bold uppercase sm:text-lg">{result.away.name}</p></div>
        </div>
        <div className="mt-4 rounded-md border-2 border-primary bg-primary/10 px-4 py-3 text-center"><p className="font-display text-xl font-black uppercase tracking-wider text-primary">{stadium}</p><p className="mt-1 text-sm font-bold">Público simulado: {estimatedAttendance(result.home.id, result.away.id).toLocaleString("pt-BR")} torcedores</p><p className="mt-1 text-sm text-muted-foreground">Renda estimada: {money(estimatedAttendance(result.home.id, result.away.id) * ticketPrice)}</p></div>
        <div className="mt-6 grid gap-2 rounded-md border border-border bg-card p-4 text-sm sm:grid-cols-2">
          <p><span className="text-muted-foreground">Estádio:</span> {stadium}</p>
          <p><span className="text-muted-foreground">Tempo:</span> {minute < 90 ? "Em andamento" : "Encerrado"}</p>
          <p><span className="text-muted-foreground">Competição:</span> Simulação livre · {career.division}</p>
          <p><span className="text-muted-foreground">Horário da partida:</span> {careerFixture ? `${careerFixture.weekday} · ${careerFixture.kickoff} (horário de Brasília)` : "A definir"}</p>
          <p><span className="text-muted-foreground">Esquema:</span> {formation}</p>
          <p><span className="text-muted-foreground">Postura:</span> {tacticalApproach === "defensive" ? "Defensiva" : tacticalApproach === "attacking" ? "Ofensiva" : "Equilibrada"}</p>
          <p><span className="text-muted-foreground">Pressão:</span> {pressure}</p>
        </div>
        <h3 className="mt-7 border-b border-border pb-2 text-lg font-bold uppercase">Lances da partida</h3>
        {visibleEvents.length ? <ol className="mt-3 space-y-2">{visibleEvents.map((event, index) => <li key={`${event.minute}-${index}`} className="flex flex-wrap justify-between gap-2 rounded bg-card px-3 py-2 text-sm"><span>⚽ {event.clubName} · <strong>{event.playerName ? `Gol de ${event.playerName}` : "Autor ainda não cadastrado para este clube"}</strong></span><strong>{event.minute}'</strong></li>)}</ol> : <p className="mt-3 text-sm text-muted-foreground">{minute === 90 ? "Nenhum gol nesta partida." : "A partida está rolando. Os lances aparecerão aqui conforme o relógio avançar."}</p>}
        <p className="mt-3 text-xs text-amber-600">Os autores dos gols dependem do cadastro de elencos reais. O jogo não atribui gols a nomes inventados.</p>
        <p className="mt-5 text-sm text-muted-foreground">Partidas disputadas nesta carreira: {career.played}. A simulação ainda não altera a classificação oficial.</p>
        {minute === 90 && <button onClick={resetMatch} className="mt-4 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:border-primary">Preparar nova partida</button>}
      </section>}
      {result && <section className="mt-4 rounded-md border border-primary/60 bg-card p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Comando tático</p>
        <h2 className="mt-1 font-display text-xl font-black uppercase">Ajustes disponíveis durante toda a partida</h2>
        <p className="mt-1 text-sm text-muted-foreground">Altere o esquema, a postura e a pressão a qualquer momento, inclusive no intervalo. As escolhas atuais serão consideradas na próxima etapa da simulação.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="text-sm font-semibold">Esquema tático<select value={formation} onChange={(e) => setFormation(e.target.value as Formation)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>4-4-2</option><option>4-3-3</option><option>3-5-2</option><option>4-2-3-1</option></select></label>
          <label className="text-sm font-semibold">Postura<select value={tacticalApproach} onChange={(e) => setTacticalApproach(e.target.value as typeof tacticalApproach)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option value="defensive">Defensiva</option><option value="balanced">Equilibrada</option><option value="attacking">Ofensiva</option></select></label>
          <label className="text-sm font-semibold">Pressão<select value={pressure} onChange={(e) => setPressure(e.target.value as Pressure)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>Baixa</option><option>Média</option><option>Alta</option></select></label>
        </div>
      </section>}

      <section className="mb-6 grid gap-4 rounded-md border border-border bg-card p-5 sm:grid-cols-2">
        <MoraleMeter title="Moral com a torcida" value={career.fanMorale ?? 70} description="Reage aos resultados da equipe." />
        <MoraleMeter title="Confiança da diretoria" value={career.boardConfidence ?? 70} description="Reage aos resultados e às metas do clube." />
        <p className="sm:col-span-2 text-xs text-muted-foreground">Indicadores iniciais em 70/100. Nesta etapa, variam conforme o resultado da partida; metas, finanças e protestos serão conectados depois.</p>
      </section>
      <div className="rounded-md border border-border bg-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Calendário da carreira</p>
        <h2 className="mt-2 text-2xl font-bold uppercase">Todos os jogos da rodada {currentRound}</h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Todas as divisões · {allDivisionRoundFixtures.length} confrontos nesta rodada</p>
        <p className="mt-1 text-sm text-muted-foreground">Dias e horários simulados para a sua temporada, no horário de Brasília. Não são datas ou horários oficiais da CBF.</p>
        <div className="mt-5 space-y-3">
          {allDivisionRoundFixtures.map((fixture, fixtureIndex) => {
            const isCareerMatch = fixture.division === career.division && (fixture.home.name === career.club || fixture.away.name === career.club);
            const startsDivision = fixtureIndex === 0 || allDivisionRoundFixtures[fixtureIndex - 1]?.division !== fixture.division || allDivisionRoundFixtures[fixtureIndex - 1]?.groupName !== fixture.groupName;
            return <Fragment key={fixture.division + "-" + (fixture.groupName ?? "geral") + "-" + fixture.round + "-" + fixture.home.id}>
              {startsDivision && <div className="col-span-full flex items-center gap-3 py-3"><div className="h-px flex-1 bg-primary/60" /><h3 className="rounded-md border border-primary/50 bg-primary/10 px-5 py-2 font-display text-lg font-black uppercase tracking-wider text-primary">{fixture.division}{fixture.groupName ? " · Grupo " + fixture.groupName : ""}</h3><div className="h-px flex-1 bg-primary/60" /></div>}
              <div className={`rounded-md border p-3 ${isCareerMatch ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-background"}`}>
              <div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{fixture.division}{fixture.groupName ? " · Grupo " + fixture.groupName : ""} · Jogo {fixtureIndex + 1}</span><span className="text-[10px] font-semibold text-muted-foreground">{fixture.weekday} · {fixture.kickoff} (Brasília)</span>{isCareerMatch && <span className="text-[10px] font-black uppercase tracking-widest text-primary">Seu confronto</span>}</div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <div className="flex min-w-0 items-center gap-2"><Crest club={fixture.home.name}/><span className="truncate text-sm font-semibold">{fixture.home.name}</span></div>
                {(() => { const key = fixture.round + "-" + fixture.home.id + "-" + fixture.away.id; const score = isCareerMatch ? (result ? { homeGoals: result.events.filter((event) => event.minute <= minute && event.clubName === fixture.home.name).length, awayGoals: result.events.filter((event) => event.minute <= minute && event.clubName === fixture.away.name).length } : null) : roundResults[key]; return score ? <span className="rounded-md bg-primary/10 px-4 py-2 text-lg font-black tabular-nums text-primary">{score.homeGoals} × {score.awayGoals}</span> : <span className="rounded bg-muted px-2 py-1 text-xs font-black text-muted-foreground">VS</span>; })()}
                <div className="flex min-w-0 items-center justify-end gap-2"><span className="truncate text-right text-sm font-semibold">{fixture.away.name}</span><Crest club={fixture.away.name}/></div>
              </div>
              {(() => { const key = fixture.round + "-" + fixture.home.id + "-" + fixture.away.id; const matchResult = isCareerMatch ? result : roundResults[key]; const shownEvents = matchResult?.events.filter((event) => !isCareerMatch || event.minute <= minute) ?? []; return shownEvents.length > 0 ? <div className="mt-2 rounded bg-background/70 px-3 py-2 text-xs"><p className="mb-1 font-bold uppercase tracking-wide text-primary">Gols da partida</p><div className="flex flex-wrap gap-x-4 gap-y-1">{shownEvents.map((event, index) => <span key={event.minute + "-" + index} className="text-muted-foreground">{event.minute}' · <strong className="text-foreground">{event.playerName ?? "Autor não cadastrado"}</strong> ({event.clubName})</span>)}</div></div> : null; })()}
              
              <div className="mt-3 rounded-md border border-primary/40 bg-primary/5 px-3 py-2 text-center"><p className="font-display text-sm font-black uppercase tracking-wide text-primary">{STADIUMS[fixture.home.name] ?? "Estádio a confirmar"}</p><p className="mt-1 text-xs font-semibold text-muted-foreground">Público simulado: {estimatedAttendance(fixture.home.id, fixture.away.id).toLocaleString("pt-BR")} torcedores</p></div>
              <div className="col-span-3 mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-2"><span className="text-xs font-semibold text-muted-foreground">Estádio do mandante: <strong className="text-foreground">{STADIUMS[fixture.home.name] ?? "Local de mando a confirmar"}</strong></span>{isCareerMatch && <button type="button" onClick={() => { if (result && minute < 90 && !halftime) setPlaying(true); else if (!result) play(); }} disabled={playing || (!!result && minute >= 90) || halftime} className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-50">{playing ? "Partida em andamento..." : result && minute < 90 ? "Retomar partida" : result ? "Partida realizada" : "Jogar partida"}</button>}</div>
              </div>
            </Fragment>;
          })}
        </div>
        <div className="mt-5 grid gap-3 rounded-md border border-border bg-background p-4 sm:grid-cols-2 sm:items-end"><label className="text-sm font-semibold">Preço do ingresso (R$)<input type="number" min="1" max="10000" step="0.5" value={ticketPrice} onChange={(e) => setTicketPrice(Math.max(1, Number(e.target.value) || 1))} className="mt-2 w-full rounded-md border border-input bg-card px-3 py-3 text-foreground" /></label><p className="text-xs text-muted-foreground">O valor fica salvo nesta sessão do navegador e será usado para calcular a renda estimada do seu mando.</p></div>
        <div className="mt-5"><p className="mb-2 text-sm font-semibold">Velocidade da partida</p><div className="flex flex-wrap gap-2" role="group" aria-label="Velocidade da partida">{(Object.keys(SPEEDS) as MatchSpeed[]).map((key) => <button key={key} type="button" onClick={() => setSpeed(key)} aria-pressed={speed === key} className={`rounded-md border px-5 py-2.5 text-sm font-bold ${speed === key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"} disabled:opacity-50`}>{SPEEDS[key].label}</button>)}</div></div>
        {!careerFixture && <p className="mt-4 text-sm text-muted-foreground">Seu clube não tem jogo nesta rodada.</p>}
      </div>

      {halftime && result && <>{renderTacticalBoard(true)}<section className="mt-4"><button onClick={() => { if (!result) return; const selectedPlayers = Object.values(lineupSelections).filter(Boolean).map(id => availableSubstitutionPlayers.find(player => player.id === id)).filter((player): player is typeof availableSubstitutionPlayers[number] => Boolean(player)).map(({id,name}) => ({id,name})); const adjustedHome = { ...result.home, approach: tacticalApproach, players: selectedPlayers.length ? selectedPlayers : result.home.players }; const secondHalf = simulateMatch(adjustedHome, result.away, Math.random, 46, 90); setResult(current => current ? ({ ...current, home: adjustedHome, homeGoals: current.homeGoals + secondHalf.homeGoals, awayGoals: current.awayGoals + secondHalf.awayGoals, events: [...current.events, ...secondHalf.events] }) : current); setHalftime(false); setPlaying(true); }} className="rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground">Começar segundo tempo</button></section></>}

      {result && <section className="mt-4 rounded-md border border-border bg-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-bold">Velocidade da partida</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Velocidade da partida">
            {(Object.keys(SPEEDS) as MatchSpeed[]).map((key) => <button key={key} type="button" onClick={() => setSpeed(key)} aria-pressed={speed === key} className={`rounded-md border px-5 py-2.5 text-sm font-bold ${speed === key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"}`}>{SPEEDS[key].label}</button>)}
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">A velocidade pode ser alterada antes ou durante a partida.</p>
      </section>}


    </>
  );
}
