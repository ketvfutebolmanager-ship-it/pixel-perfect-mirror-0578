import type { BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";

export type PlayerPosition = "GOL" | "ZAG" | "LAT" | "VOL" | "MEI" | "ATA" | "DEF";
export type PlayerRecord = {
  id: string;
  name: string;
  clubId: string;
  clubName: string;
  division: BrazilianDivision;
  position: PlayerPosition;
  age?: number;
  shirtNumber?: number;
  seasonStats?: { appearances: number; minutes: number; goals: number; assists: number; yellowCards: number; secondYellowCards: number; redCards: number };
  source: string;
  verifiedAt: string;
};

// Importação inicial parcial: jogadores com estatísticas individuais identificadas na fonte.
// Não representa os elencos completos; idade e camisa ficam vazias quando não confirmadas.
export const VERIFIED_PLAYERS_2026: PlayerRecord[] = [
  {
    "id": "k-viveros-athletico-paranaense",
    "name": "K. Viveros",
    "clubId": "athletico-paranaense",
    "clubName": "Athletico Paranaense",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 31,
      "minutes": 2787,
      "goals": 21,
      "assists": 3,
      "yellowCards": 6,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "pedro-flamengo",
    "name": "Pedro",
    "clubId": "flamengo",
    "clubName": "Flamengo",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 33,
      "minutes": 2626,
      "goals": 18,
      "assists": 6,
      "yellowCards": 2,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "gabriel-barbosa-santos",
    "name": "Gabriel Barbosa",
    "clubId": "santos",
    "clubName": "Santos",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 25,
      "minutes": 1933,
      "goals": 15,
      "assists": 3,
      "yellowCards": 8,
      "secondYellowCards": 0,
      "redCards": 1
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "kaio-jorge-cruzeiro",
    "name": "Kaio Jorge",
    "clubId": "cruzeiro",
    "clubName": "Cruzeiro",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 26,
      "minutes": 2058,
      "goals": 12,
      "assists": 2,
      "yellowCards": 2,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "carlos-vinicius-gremio",
    "name": "Carlos Vinícius",
    "clubId": "gremio",
    "clubName": "Grêmio",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 32,
      "minutes": 2555,
      "goals": 11,
      "assists": 1,
      "yellowCards": 6,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "luciano-juba-bahia",
    "name": "Luciano Juba",
    "clubId": "bahia",
    "clubName": "Bahia",
    "division": "Série A",
    "position": "DEF",
    "seasonStats": {
      "appearances": 29,
      "minutes": 2456,
      "goals": 11,
      "assists": 1,
      "yellowCards": 4,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "samuel-lino-flamengo",
    "name": "Samuel Lino",
    "clubId": "flamengo",
    "clubName": "Flamengo",
    "division": "Série A",
    "position": "MEI",
    "seasonStats": {
      "appearances": 32,
      "minutes": 2224,
      "goals": 11,
      "assists": 9,
      "yellowCards": 4,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "danilo-santos-botafogo",
    "name": "Danilo Santos",
    "clubId": "botafogo",
    "clubName": "Botafogo",
    "division": "Série A",
    "position": "MEI",
    "seasonStats": {
      "appearances": 25,
      "minutes": 2125,
      "goals": 10,
      "assists": 2,
      "yellowCards": 2,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "j-calleri-sao-paulo",
    "name": "J. Calleri",
    "clubId": "sao-paulo",
    "clubName": "São Paulo",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 27,
      "minutes": 2106,
      "goals": 10,
      "assists": 2,
      "yellowCards": 6,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "rene-vitoria",
    "name": "Renê",
    "clubId": "vitoria",
    "clubName": "Vitória",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 24,
      "minutes": 1679,
      "goals": 10,
      "assists": 1,
      "yellowCards": 3,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "j-lopez-palmeiras",
    "name": "J. López",
    "clubId": "palmeiras",
    "clubName": "Palmeiras",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 30,
      "minutes": 2254,
      "goals": 9,
      "assists": 6,
      "yellowCards": 2,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "jaja-silva-remo",
    "name": "Jája Silva",
    "clubId": "remo",
    "clubName": "Remo",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 27,
      "minutes": 1673,
      "goals": 9,
      "assists": 1,
      "yellowCards": 2,
      "secondYellowCards": 0,
      "redCards": 1
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "john-kennedy-fluminense",
    "name": "John Kennedy",
    "clubId": "fluminense",
    "clubName": "Fluminense",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 18,
      "minutes": 1147,
      "goals": 9,
      "assists": 1,
      "yellowCards": 0,
      "secondYellowCards": 0,
      "redCards": 1
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "luciano-sao-paulo",
    "name": "Luciano",
    "clubId": "sao-paulo",
    "clubName": "São Paulo",
    "division": "Série A",
    "position": "ATA",
    "seasonStats": {
      "appearances": 26,
      "minutes": 1857,
      "goals": 9,
      "assists": 1,
      "yellowCards": 5,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "matheus-pereira-cruzeiro",
    "name": "Matheus Pereira",
    "clubId": "cruzeiro",
    "clubName": "Cruzeiro",
    "division": "Série A",
    "position": "MEI",
    "seasonStats": {
      "appearances": 30,
      "minutes": 2560,
      "goals": 9,
      "assists": 7,
      "yellowCards": 12,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "mikael-crb",
    "name": "Mikael",
    "clubId": "crb",
    "clubName": "CRB",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 33,
      "minutes": 2619,
      "goals": 16,
      "assists": 4,
      "yellowCards": 1,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "robson-novorizontino",
    "name": "Robson",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 32,
      "minutes": 2496,
      "goals": 16,
      "assists": 5,
      "yellowCards": 5,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "boschilia-operario-ferroviario",
    "name": "Boschilia",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "MEI",
    "seasonStats": {
      "appearances": 28,
      "minutes": 2424,
      "goals": 13,
      "assists": 4,
      "yellowCards": 8,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "chrystian-barletta-sport-recife",
    "name": "Chrystian Barletta",
    "clubId": "sport-recife",
    "clubName": "Sport Recife",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 29,
      "minutes": 2539,
      "goals": 13,
      "assists": 4,
      "yellowCards": 8,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "gustavo-coutinho-atletico-goianiense",
    "name": "Gustavo Coutinho",
    "clubId": "atletico-goianiense",
    "clubName": "Atlético Goianiense",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 30,
      "minutes": 2182,
      "goals": 13,
      "assists": 0,
      "yellowCards": 7,
      "secondYellowCards": 0,
      "redCards": 1
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "perotti-sport-recife",
    "name": "Perotti",
    "clubId": "sport-recife",
    "clubName": "Sport Recife",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 34,
      "minutes": 2695,
      "goals": 12,
      "assists": 1,
      "yellowCards": 2,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "bruno-santos-londrina",
    "name": "Bruno Santos",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 16,
      "minutes": 1433,
      "goals": 11,
      "assists": 3,
      "yellowCards": 1,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "romulo-novorizontino",
    "name": "Romulo",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "MEI",
    "seasonStats": {
      "appearances": 35,
      "minutes": 2714,
      "goals": 11,
      "assists": 9,
      "yellowCards": 2,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "everton-morelli-botafogo-de-ribeirao-preto",
    "name": "Everton Morelli",
    "clubId": "botafogo-de-ribeirao-preto",
    "clubName": "Botafogo de Ribeirão Preto",
    "division": "Série B",
    "position": "MEI",
    "seasonStats": {
      "appearances": 33,
      "minutes": 2761,
      "goals": 10,
      "assists": 2,
      "yellowCards": 5,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "andre-luis-vila-nova",
    "name": "André Luís",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "seasonStats": {
      "appearances": 25,
      "minutes": 1705,
      "goals": 9,
      "assists": 2,
      "yellowCards": 5,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "hygor-botafogo-de-ribeirao-preto",
    "name": "Hygor",
    "clubId": "botafogo-de-ribeirao-preto",
    "clubName": "Botafogo de Ribeirão Preto",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 28,
      "minutes": 1993,
      "goals": 9,
      "assists": 0,
      "yellowCards": 0,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "janderson-vila-nova",
    "name": "Janderson",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "seasonStats": {
      "appearances": 34,
      "minutes": 2836,
      "goals": 9,
      "assists": 8,
      "yellowCards": 4,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "kadu-goias",
    "name": "Kadu",
    "clubId": "goias",
    "clubName": "Goiás",
    "division": "Série B",
    "position": "ATA",
    "seasonStats": {
      "appearances": 23,
      "minutes": 1657,
      "goals": 9,
      "assists": 1,
      "yellowCards": 3,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "mailton-fortaleza",
    "name": "Maílton",
    "clubId": "fortaleza",
    "clubName": "Fortaleza",
    "division": "Série B",
    "position": "DEF",
    "seasonStats": {
      "appearances": 30,
      "minutes": 2345,
      "goals": 9,
      "assists": 3,
      "yellowCards": 5,
      "secondYellowCards": 0,
      "redCards": 1
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    "id": "rai-juventude",
    "name": "Raí",
    "clubId": "juventude",
    "clubName": "Juventude",
    "division": "Série B",
    "position": "MEI",
    "seasonStats": {
      "appearances": 34,
      "minutes": 2603,
      "goals": 9,
      "assists": 5,
      "yellowCards": 3,
      "secondYellowCards": 0,
      "redCards": 0
    },
    "source": "Classificação Geral — estatísticas Brasileirão 2026 (consulta em 31/10/2026)",
    "verifiedAt": "2026-10-31"
  },
  {
    id: "tinga-coritiba", name: "Tinga", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "LAT",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "maicon-coritiba", name: "Maicon", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ZAG",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rodrigo-moledo-coritiba", name: "Rodrigo Moledo", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ZAG",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "felipe-jonatan-coritiba", name: "Felipe Jonatan", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "LAT",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "fabricio-bustos-coritiba", name: "Fabricio Bustos", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "LAT",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "thiago-santos-coritiba", name: "Thiago Santos", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ZAG",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "tiago-coser-coritiba", name: "Tiago Coser", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ZAG",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-melo-coritiba", name: "Bruno Melo", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "LAT",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "jacy-coritiba", name: "Jacy", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ZAG",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rodrigo-gelado-coritiba", name: "Rodrigo Gelado", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "LAT",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "nicolas-fonseca-coritiba", name: "Nicolás Fonseca", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "VOL",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "josue-coritiba", name: "Josué", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "MEI",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "sebastian-gomez-coritiba", name: "Sebastián Gómez", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "MEI",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "richard-coelho-coritiba", name: "Richard Coelho", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "VOL",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "vini-paulista-coritiba", name: "Vini Paulista", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "MEI",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-oliveira-coritiba", name: "Gustavo Oliveira", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "MEI",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "vitor-tissi-coritiba", name: "Vitor Tissi", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "VOL",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "eberth-coritiba", name: "Éberth", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "joaquin-lavega-coritiba", name: "Joaquín Lavega", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-ronier-coritiba", name: "Lucas Ronier", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "brian-ocampo-coritiba", name: "Brian Ocampo", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "paulo-roberto-coritiba", name: "Paulo Roberto", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "keno-coritiba", name: "Keno", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "fabinho-coritiba", name: "Fabinho", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-rocha-coritiba", name: "Pedro Rocha", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "breno-lopes-coritiba", name: "Breno Lopes", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "renato-marques-coritiba", name: "Renato Marques", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rodrigo-rodrigues-coritiba", name: "Rodrigo Rodrigues", clubId: "coritiba", clubName: "Coritiba", division: "Série A", position: "ATA",
    source: "365Scores — elenco Coritiba 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
,
  {
    id: "carlos-miguel-palmeiras", name: "Carlos Miguel", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "marcelo-lomba-palmeiras", name: "Marcelo Lomba", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "GOL", shirtNumber: 14,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-bertinato-palmeiras", name: "Bruno Bertinato", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "GOL", shirtNumber: 21,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-gomez-palmeiras", name: "Gustavo Gómez", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ZAG", shirtNumber: 15,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "alexander-barboza-palmeiras", name: "Alexander Barboza", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ZAG", shirtNumber: 2,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-fuchs-palmeiras", name: "Bruno Fuchs", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "murilo-palmeiras", name: "Murilo", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ZAG", shirtNumber: 26,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "luiz-benedetti-palmeiras", name: "Luiz Benedetti", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ZAG", shirtNumber: 43,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "agustin-giay-palmeiras", name: "Agustín Giay", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "LAT", shirtNumber: 4,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "jefte-palmeiras", name: "Jefté", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "LAT", shirtNumber: 6,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "khellven-palmeiras", name: "Khellven", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "LAT", shirtNumber: 12,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "joaquin-piquerez-palmeiras", name: "Joaquín Piquerez", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "LAT", shirtNumber: 22,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "arthur-palmeiras", name: "Arthur", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "LAT", shirtNumber: 56,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "marlon-freitas-palmeiras", name: "Marlon Freitas", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "VOL", shirtNumber: 17,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "andreas-pereira-palmeiras", name: "Andreas Pereira", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "VOL", shirtNumber: 8,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "emiliano-martinez-palmeiras", name: "Emiliano Martínez", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "VOL", shirtNumber: 32,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-evangelista-palmeiras", name: "Lucas Evangelista", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "MEI", shirtNumber: 30,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "larson-palmeiras", name: "Larson", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "MEI", shirtNumber: 48,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "mauricio-palmeiras", name: "Mauricio", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "MEI", shirtNumber: 18,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "felipe-anderson-palmeiras", name: "Felipe Anderson", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "MEI", shirtNumber: 7,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "jhon-arias-palmeiras", name: "Jhon Arias", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "MEI", shirtNumber: 11,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "vitor-roque-palmeiras", name: "Vitor Roque", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "paulinho-palmeiras", name: "Paulinho", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ATA", shirtNumber: 10,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "ramon-sosa-palmeiras", name: "Ramón Sosa", clubId: "palmeiras", clubName: "Palmeiras", division: "Série A", position: "ATA", shirtNumber: 19,
    source: "Site oficial do Palmeiras — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  }
  {
    id: "stiven-mendoza-athletico-paranaense", name: "Stiven Mendoza", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 7,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "kevin-viveros-athletico-paranaense", name: "Kevin Viveros", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "kerwin-vargas-athletico-paranaense", name: "Kerwin Vargas", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 18,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "jorge-rivaldo-athletico-paranaense", name: "Jorge Rivaldo", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 19,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "leozinho-athletico-paranaense", name: "Leozinho", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 21,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "felipe-chiqueti-athletico-paranaense", name: "Felipe Chiqueti", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 47,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "renan-viana-athletico-paranaense", name: "Renan Viana", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 50,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "renan-peixoto-athletico-paranaense", name: "Renan Peixoto", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ATA", shirtNumber: 70,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "felipinho-athletico-paranaense", name: "Felipinho", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 5,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-cruz-athletico-paranaense", name: "João Cruz", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 8,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-zapelli-athletico-paranaense", name: "Bruno Zapelli", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 10,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "luiz-gustavo-athletico-paranaense", name: "Luiz Gustavo", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 14,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "jadson-athletico-paranaense", name: "Jadson", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 16,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "alejandro-garcia-athletico-paranaense", name: "Alejandro García", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 17,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "juan-portilla-athletico-paranaense", name: "Juan Portilla", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 27,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "dudu-kogitzki-athletico-paranaense", name: "Dudu Kogitzki", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 53,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "diogo-riquelme-athletico-paranaense", name: "Diogo Riquelme", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "MEI", shirtNumber: 63,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "gilberto-dos-santos-athletico-paranaense", name: "Gilberto dos Santos", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "DEF", shirtNumber: 2,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-pele-athletico-paranaense", name: "Léo Pelé", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "arthur-dias-athletico-paranaense", name: "Arthur Dias", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "LAT", shirtNumber: 4,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-derik-athletico-paranaense", name: "Léo Derik", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "LAT", shirtNumber: 6,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "gilberto-moraes-athletico-paranaense", name: "Gilberto Moraes", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "LAT", shirtNumber: 12,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "carlos-teran-athletico-paranaense", name: "Carlos Terán", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ZAG", shirtNumber: 22,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "dantas-athletico-paranaense", name: "Dantas", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "LAT", shirtNumber: 25,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "claudinho-athletico-paranaense", name: "Claudinho", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "LAT", shirtNumber: 26,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "gaston-benavidez-athletico-paranaense", name: "Gastón Benavídez", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "LAT", shirtNumber: 29,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "juan-felipe-aguirre-athletico-paranaense", name: "Juan Felipe Aguirre", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "ZAG", shirtNumber: 33,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-esquivel-athletico-paranaense", name: "Lucas Esquivel", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "LAT", shirtNumber: 37,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "mycael-athletico-paranaense", name: "Mycael", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "santos-athletico-paranaense", name: "Santos", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "GOL", shirtNumber: 23,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-soares-athletico-paranaense", name: "Matheus Soares", clubId: "athletico-paranaense", clubName: "Athletico Paranaense", division: "Série A", position: "GOL", shirtNumber: 42,
    source: "Bússola do Futebol — elenco Athletico-PR 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "anderson-chapecoense", name: "Anderson", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "GOL", shirtNumber: 98,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-werner-chapecoense", name: "Gabriel Werner", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "GOL", shirtNumber: 14,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "kaina-chapecoense", name: "Kainã", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "GOL", shirtNumber: 34,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-aurelio-chapecoense", name: "Matheus Aurélio", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "GOL", shirtNumber: 30,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rafael-santos-chapecoense", name: "Rafael Santos", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "doma-chapecoense", name: "Doma", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-paulo-chapecoense", name: "João Paulo", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ZAG", shirtNumber: 4,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "kauan-chapecoense", name: "Kauan", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ZAG", shirtNumber: 21,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rafael-thyere-chapecoense", name: "Rafael Thyere", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ZAG", shirtNumber: 15,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "victor-caetano-chapecoense", name: "Victor Caetano", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ZAG", shirtNumber: 25,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "vinicius-chapecoense", name: "Vinicius", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ZAG", shirtNumber: 35,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-pacheco-chapecoense", name: "Bruno Pacheco", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "LAT", shirtNumber: 91,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-tubarao-chapecoense", name: "Bruno Tubarão", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "LAT", shirtNumber: 20,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "dudu-chapecoense", name: "Dudu", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "LAT", shirtNumber: 23,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "everton-chapecoense", name: "Everton", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "LAT", shirtNumber: 26,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "fernando-chapecoense", name: "Fernando", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "LAT", shirtNumber: 12,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "heitor-chapecoense", name: "Heitor", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "LAT", shirtNumber: 5,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "mancha-chapecoense", name: "Mancha", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "LAT", shirtNumber: 6,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-matias-chapecoense", name: "Bruno Matias", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "VOL", shirtNumber: 16,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "vinicius-balieiro-chapecoense", name: "Vinicius Balieiro", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "VOL", shirtNumber: 17,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "david-chapecoense", name: "David", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "VOL", shirtNumber: 19,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "camilo-chapecoense", name: "Camilo", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "VOL", shirtNumber: 27,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rosivan-chapecoense", name: "Rosivan", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "VOL", shirtNumber: 55,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rafael-carvalheira-chapecoense", name: "Rafael Carvalheira", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "VOL", shirtNumber: 99,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "giovanni-augusto-chapecoense", name: "Giovanni Augusto", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "MEI", shirtNumber: 10,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "max-chapecoense", name: "Max", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "MEI", shirtNumber: 22,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "miguel-carvalho-chapecoense", name: "Miguel Carvalho", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "MEI", shirtNumber: 80,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "robert-chapecoense", name: "Robert", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "MEI", shirtNumber: 8,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "yago-felipe-chapecoense", name: "Yago Felipe", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "MEI", shirtNumber: 88,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "dylan-borrero-chapecoense", name: "Dylan Borrero", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ATA", shirtNumber: 77,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "franco-rossi-chapecoense", name: "Franco Rossi", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ATA", shirtNumber: 29,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "marcinho-chapecoense", name: "Marcinho", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ATA", shirtNumber: 7,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "mauricio-garcez-chapecoense", name: "Maurício Garcez", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ATA", shirtNumber: 31,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rubens-chapecoense", name: "Rubens", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ATA", shirtNumber: 70,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "tulio-eduardo-chapecoense", name: "Túlio Eduardo", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "yannick-bolasie-chapecoense", name: "Yannick Bolasie", clubId: "chapecoense", clubName: "Chapecoense", division: "Série A", position: "ATA", shirtNumber: 11,
    source: "Site oficial da Chapecoense — elenco profissional 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "thiago-couto-sport-recife", name: "Thiago Couto", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "GOL", shirtNumber: 26,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "brenno-sport-recife", name: "Brenno", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "GOL", shirtNumber: 1,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "denis-sport-recife", name: "Denis", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "GOL", shirtNumber: 12,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "adriano-sport-recife", name: "Adriano", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "GOL", shirtNumber: 42,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "marcelo-ajul-sport-recife", name: "Marcelo Ajul", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ZAG", shirtNumber: 3,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "benevenuto-sport-recife", name: "Benevenuto", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ZAG", shirtNumber: 5,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "patrick-sport-recife", name: "Patrick", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ZAG", shirtNumber: 63,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "kayky-sport-recife", name: "Kayky", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ZAG", shirtNumber: 33,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "habraao-sport-recife", name: "Habraão", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ZAG", shirtNumber: 42,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rai-lopes-sport-recife", name: "Raí Lopes", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "LAT", shirtNumber: 76,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "augusto-pucci-sport-recife", name: "Augusto Pucci", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "LAT", shirtNumber: 68,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "felipinho-sport-recife", name: "Felipinho", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "LAT", shirtNumber: 60,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "rafinha-sport-recife", name: "Rafinha", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "LAT", shirtNumber: 66,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "claudinho-sport-recife", name: "Claudinho", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "LAT", shirtNumber: 27,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "edson-lucas-sport-recife", name: "Edson Lucas", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "LAT", shirtNumber: 96,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "fernando-sobral-sport-recife", name: "Fernando Sobral", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "VOL", shirtNumber: 88,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "biel-sport-recife", name: "Biel", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "VOL", shirtNumber: 6,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "adriel-sport-recife", name: "Adriel", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "VOL", shirtNumber: 54,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "murilo-rhikman-sport-recife", name: "Murilo Rhikman", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "VOL", shirtNumber: 15,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "patrick-de-paula-sport-recife", name: "Patrick de Paula", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "VOL", shirtNumber: 7,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "ze-gabriel-sport-recife", name: "Zé Gabriel", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "VOL", shirtNumber: 23,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "willian-oliveira-sport-recife", name: "Willian Oliveira", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "VOL", shirtNumber: 29,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "diego-hernandez-sport-recife", name: "Diego Hernández", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "MEI", shirtNumber: 20,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "juan-alano-sport-recife", name: "Juan Alano", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "MEI", shirtNumber: 8,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "carlos-de-pena-sport-recife", name: "Carlos de Pena", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "MEI", shirtNumber: 10,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "chrystian-barletta-sport-recife", name: "Chrystian Barletta", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ATA", shirtNumber: 30,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "kervin-andrade-sport-recife", name: "Kervin Andrade", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ATA", shirtNumber: 80,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "dudu-teodora-sport-recife", name: "Dudu Teodora", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ATA", shirtNumber: 77,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-perotti-sport-recife", name: "Pedro Perotti", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ATA", shirtNumber: 9,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "marlon-douglas-sport-recife", name: "Marlon Douglas", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ATA", shirtNumber: 31,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "clayson-sport-recife", name: "Clayson", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ATA", shirtNumber: 25,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
  {
    id: "neto-pessoa-sport-recife", name: "Neto Pessoa", clubId: "sport-recife", clubName: "Sport Recife", division: "Série B", position: "ATA", shirtNumber: 19,
    source: "Site oficial do Sport — jogadores profissionais 2026 (consulta em 31/10/2026)", verifiedAt: "2026-10-31"
  },
];
export const PLAYER_DATA_AS_OF = "2026-10-31";
export const PLAYER_DATA_STATUS = "partial-verified";
