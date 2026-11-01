import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import { VERIFIED_PLAYERS_2026 } from "@/modules/players/database";

export const Route = createFileRoute("/clubes")({
  head: () => ({ meta: [
    { title: "Clubes — KE TV Futebol Manager" },
    { name: "description", content: "Clubes brasileiros, elencos e estatísticas." },
  ] }),
  component: Page,
});

const divisions: BrazilianDivision[] = ["Série A", "Série B", "Série C", "Série D"];

const CREST_FILES: Record<string, string> = {
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
  "Grêmio": "Grêmio.png",
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
const FOOTYLOGOS_SLUGS: Record<string, string> = {
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
  "Atlético-BA": "atletico-de-alagoinhas",
  "Atlético-CE": "atletico-cearense",
  "Brasil-RS": "brasil-de-pelotas",
  "Democrata GV": "democrata-gv",
  "Fluminense-PI": "fluminense-pi",
  "Operário-MT": "operario-mt",
};
function logoSlug(name: string) {
  return FOOTYLOGOS_SLUGS[name] ?? name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function ClubCrest({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const localFile = CREST_FILES[name];
  const src = localFile
    ? `https://raw.githubusercontent.com/Lobobinho/Escudos-dos-Clubes-do-Brasileirao-2026/master/${encodeURIComponent(localFile)}`
    : `https://www.footylogos.com/dls/logo/rgba-v1/${logoSlug(name)}.png`;
  if (failed) return <span aria-label={`Escudo de ${name} indisponível`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-black text-primary">{name.split(/\s+/).map(part => part[0]).slice(0, 3).join("")}</span>;
  return <img src={src} alt={`Escudo do ${name}`} loading="lazy" onError={() => setFailed(true)} className="h-11 w-11 shrink-0 object-contain" />;
}

function Page() {
  const [division, setDivision] = useState<BrazilianDivision>("Série A");
  const [search, setSearch] = useState("");
  const clubs = useMemo(() => getClubsByDivision(division).filter(club =>
    club.name.toLocaleLowerCase("pt-BR").includes(search.toLocaleLowerCase("pt-BR"))
  ), [division, search]);

  return (
    <>
      <PageHeader kicker="Competições · Clubes" title="Clubes">
        Escolha uma divisão e abra um clube para consultar o elenco cadastrado e acessar as estatísticas dos atletas.
      </PageHeader>
      <div className="mb-5 grid gap-3 sm:grid-cols-[1fr_2fr]">
        <label className="text-sm font-semibold">Divisão
          <select value={division} onChange={e => setDivision(e.target.value as BrazilianDivision)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3">
            {divisions.map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold">Buscar clube
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Digite o nome do clube..." className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3" />
        </label>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-xl font-bold uppercase">{division}</h2>
        <span className="text-xs text-muted-foreground">{clubs.length} clubes</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map(club => {
          const count = VERIFIED_PLAYERS_2026.filter(player => player.clubId === club.id).length;
          return (
            <article key={club.id} className="rounded-md border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-3">
                <div><h3 className="font-display text-lg font-bold uppercase">{club.name}</h3><p className="text-xs text-muted-foreground">{club.state}{club.group ? ` · Grupo ${club.group.replace("A", "")}` : ""}</p></div>
                <ClubCrest name={club.name} />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">{count ? `${count} atletas cadastrados` : "Elenco aguardando cadastro"}</span>
                <Link to="/jogadores" className="rounded-md bg-primary px-3 py-2 text-xs font-bold text-primary-foreground">Ver elenco e estatísticas</Link>
              </div>
            </article>
          );
        })}
      </div>
      {!clubs.length && <p className="rounded-md border border-dashed border-border p-6 text-sm text-muted-foreground">Nenhum clube encontrado com esse nome.</p>}
    </>
  );
}
