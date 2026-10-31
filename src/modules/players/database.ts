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
  },
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
  {
    id: "rossi-flamengo", name: "Agustín Rossi", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "andrew-flamengo", name: "Andrew", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "GOL", shirtNumber: 42,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "dyogo-alves-flamengo", name: "Dyogo Alves", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "GOL", shirtNumber: 49,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-ortiz-flamengo", name: "Léo Ortiz", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-pereira-flamengo", name: "Léo Pereira", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ZAG", shirtNumber: 4,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "danilo-flamengo", name: "Danilo", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ZAG", shirtNumber: 13,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "vitao-flamengo", name: "Vitão", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ZAG", shirtNumber: 44,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-victor-flamengo", name: "João Victor", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ZAG", shirtNumber: 61,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "varela-flamengo", name: "Guillermo Varela", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "LAT", shirtNumber: 2,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "ayrton-lucas-flamengo", name: "Ayrton Lucas", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "LAT", shirtNumber: 6,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "emerson-royal-flamengo", name: "Emerson Royal", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "LAT", shirtNumber: 22,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "alex-sandro-flamengo", name: "Alex Sandro", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "LAT", shirtNumber: 26,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "pulgar-flamengo", name: "Erick Pulgar", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "VOL", shirtNumber: 5,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "saul-flamengo", name: "Saúl Ñíguez", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "MEI", shirtNumber: 8,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "arrascaeta-flamengo", name: "Giorgian de Arrascaeta", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "MEI", shirtNumber: 10,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "carrascal-flamengo", name: "Jorge Carrascal", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "MEI", shirtNumber: 15,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "de-la-cruz-flamengo", name: "Nicolás de la Cruz", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "MEI", shirtNumber: 18,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "paqueta-flamengo", name: "Lucas Paquetá", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "MEI", shirtNumber: 20,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "jorginho-flamengo", name: "Jorginho", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "VOL", shirtNumber: 21,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "evertton-araujo-flamengo", name: "Evertton Araújo", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "VOL", shirtNumber: 52,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "luiz-araujo-flamengo", name: "Luiz Araújo", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 7,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-flamengo", name: "Pedro", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "anthony-valencia-flamengo", name: "Anthony Valencia", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 14,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "samuel-lino-flamengo", name: "Samuel Lino", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 16,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "plata-flamengo", name: "Gonzalo Plata", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 19,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-henrique-flamengo", name: "Bruno Henrique", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 27,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "joaquin-freitas-flamengo", name: "Joaquín Freitas", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 30,
    source: "Elenco Flamengo 2026 — conferência em 31/10/2026; elenco oficial e relação de camisas", verifiedAt: "2026-10-31"
  },
  {
    id: "hugo-souza-corinthians", name: "Hugo Souza", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "felipe-longo-corinthians", name: "Felipe Longo", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "GOL", shirtNumber: 40,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaue-corinthians", name: "Kauê", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "GOL", shirtNumber: 51,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheuzinho-corinthians", name: "Matheuzinho", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "LAT", shirtNumber: 2,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-paulista-corinthians", name: "Gabriel Paulista", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-pedro-tchoca-corinthians", name: "João Pedro Tchoca", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ZAG", shirtNumber: 4,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andre-ramalho-corinthians", name: "André Ramalho", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ZAG", shirtNumber: 5,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-henrique-corinthians", name: "Gustavo Henrique", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ZAG", shirtNumber: 13,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-milans-corinthians", name: "Pedro Milans", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "LAT", shirtNumber: 20,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-bidu-corinthians", name: "Matheus Bidu", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "LAT", shirtNumber: 21,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fabrizio-angileri-corinthians", name: "Fabrizio Angileri", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "LAT", shirtNumber: 26,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "hugo-farias-corinthians", name: "Hugo Farias", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "LAT", shirtNumber: 46,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "iago-machado-corinthians", name: "Iago Machado", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ZAG", shirtNumber: 55,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "breno-bidon-corinthians", name: "Breno Bidon", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 7,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rodrigo-garro-corinthians", name: "Rodrigo Garro", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 8,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vitinho-corinthians", name: "Vitinho", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 11,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "raniele-corinthians", name: "Raniele", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "VOL", shirtNumber: 14,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andre-carrillo-corinthians", name: "André Carrillo", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 19,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-pereira-corinthians", name: "Matheus Pereira", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 23,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "allan-corinthians", name: "Allan", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "VOL", shirtNumber: 29,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "charles-corinthians", name: "Charles", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "VOL", shirtNumber: 35,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andre-luiz-corinthians", name: "André Luiz", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 49,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "zakaria-labyad-corinthians", name: "Zakaria Labyad", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 52,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jesse-lingard-corinthians", name: "Jesse Lingard", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 77,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alex-santana-corinthians", name: "Alex Santana", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "MEI", shirtNumber: 80,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "yuri-alberto-corinthians", name: "Yuri Alberto", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "memphis-depay-corinthians", name: "Memphis Depay", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 10,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-raul-corinthians", name: "Pedro Raul", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 18,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kayke-corinthians", name: "Kayke", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 31,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaio-cesar-corinthians", name: "Kaio César", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 37,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gui-negao-corinthians", name: "Gui Negão", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 56,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "dieguinho-corinthians", name: "Dieguinho", clubId: "corinthians", clubName: "Corinthians", division: "Série A", position: "ATA", shirtNumber: 61,
    source: "Bússola do Futebol — elenco Corinthians 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "everson-atletico-mineiro", name: "Everson", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "GOL", shirtNumber: 22,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-delfim-atletico-mineiro", name: "Gabriel Delfim", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "robert-atletico-mineiro", name: "Robert", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "GOL", shirtNumber: 31,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-cobra-atletico-mineiro", name: "Pedro Cobra", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "GOL", shirtNumber: 46,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-duarte-atletico-mineiro", name: "Léo Duarte", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lyanco-atletico-mineiro", name: "Lyanco", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ZAG", shirtNumber: 13,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ruan-atletico-mineiro", name: "Ruan", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ZAG", shirtNumber: 4,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vitor-hugo-atletico-mineiro", name: "Vitor Hugo", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ZAG", shirtNumber: 14,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vitao-atletico-mineiro", name: "Vitão", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ZAG", shirtNumber: 40,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "samuel-atletico-mineiro", name: "Samuel", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ZAG", shirtNumber: 34,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "preciado-atletico-mineiro", name: "Álvaro Preciado", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "LAT", shirtNumber: 23,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "renan-lodi-atletico-mineiro", name: "Renan Lodi", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "LAT", shirtNumber: 6,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "natanael-atletico-mineiro", name: "Natanael", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "LAT", shirtNumber: 2,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "luis-gustavo-atletico-mineiro", name: "Luis Gustavo", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "LAT", shirtNumber: 32,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaua-pascini-atletico-mineiro", name: "Kauã Pascini", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "LAT", shirtNumber: 36,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fred-atletico-mineiro", name: "Fred", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "VOL", shirtNumber: 7,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "franco-atletico-mineiro", name: "Franco", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "VOL", shirtNumber: 21,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kevin-castano-atletico-mineiro", name: "Kevin Castaño", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "VOL", shirtNumber: 15,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "maycon-atletico-mineiro", name: "Maycon", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "VOL", shirtNumber: 8,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alexsander-atletico-mineiro", name: "Alexsander", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "VOL", shirtNumber: 5,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "tomas-perez-atletico-mineiro", name: "Tomás Pérez", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "VOL", shirtNumber: 25,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "bernard-atletico-mineiro", name: "Bernard", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "MEI", shirtNumber: 11,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-scarpa-atletico-mineiro", name: "Gustavo Scarpa", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "MEI", shirtNumber: 10,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "igor-gomes-atletico-mineiro", name: "Igor Gomes", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "MEI", shirtNumber: 17,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "reinier-atletico-mineiro", name: "Reinier", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "MEI", shirtNumber: 19,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "indice-atletico-mineiro", name: "Índio", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "MEI", shirtNumber: 38,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cisse-atletico-mineiro", name: "Mamady Cissé", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "MEI", shirtNumber: 39,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "victor-hugo-atletico-mineiro", name: "Victor Hugo", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "MEI", shirtNumber: 30,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cassierra-atletico-mineiro", name: "Cassierra", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cuello-atletico-mineiro", name: "Cuello", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ATA", shirtNumber: 28,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "dudu-atletico-mineiro", name: "Dudu", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ATA", shirtNumber: 92,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alan-minda-atletico-mineiro", name: "Alan Minda", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ATA", shirtNumber: 27,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "caua-soares-atletico-mineiro", name: "Cauã Soares", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ATA", shirtNumber: 29,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "murillo-atletico-mineiro", name: "Murillo", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ATA", shirtNumber: 41,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "thiago-borbas-atletico-mineiro", name: "Thiago Borbas", clubId: "atletico-mineiro", clubName: "Atlético Mineiro", division: "Série A", position: "ATA", shirtNumber: 18,
    source: "Galo Digital — elenco profissional 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ronaldo-bahia", name: "Ronaldo", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-vieira-bahia", name: "Léo Vieira", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "GOL", shirtNumber: 22,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "guido-herrera-bahia", name: "Guido Herrera", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "GOL", shirtNumber: 17,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ze-guilherme-bahia", name: "Zé Guilherme", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "LAT", shirtNumber: 66,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "roman-gomez-bahia", name: "Román Gómez", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "LAT", shirtNumber: 31,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "luciano-juba-bahia", name: "Luciano Juba", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "LAT", shirtNumber: 46,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "david-duarte-bahia", name: "David Duarte", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ZAG", shirtNumber: 33,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marcos-victor-bahia", name: "Marcos Victor", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ZAG", shirtNumber: 44,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "luiz-gustavo-bahia", name: "Luiz Gustavo", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ZAG", shirtNumber: 43,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marco-moreno-bahia", name: "Marco Moreno", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kanu-bahia", name: "Kanu", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ZAG", shirtNumber: 4,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "everton-ribeiro-bahia", name: "Éverton Ribeiro", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "MEI", shirtNumber: 10,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "nicolas-acevedo-bahia", name: "Nicolás Acevedo", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "VOL", shirtNumber: 5,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "david-martins-bahia", name: "David Martins", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "MEI", shirtNumber: 63,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "erick-bahia", name: "Erick", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "VOL", shirtNumber: 14,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rodrigo-nestor-bahia", name: "Rodrigo Nestor", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "MEI", shirtNumber: 11,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "michel-araujo-bahia", name: "Michel Araújo", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "MEI", shirtNumber: 15,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lautaro-lopez-bahia", name: "Lautaro López", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "MEI", shirtNumber: 18,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "caio-alexandre-bahia", name: "Caio Alexandre", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "VOL", shirtNumber: 8,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jean-lucas-bahia", name: "Jean Lucas", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "VOL", shirtNumber: 6,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ademir-bahia", name: "Ademir", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 7,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ruan-pablo-bahia", name: "Ruan Pablo", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 77,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "erick-pulga-bahia", name: "Erick Pulga", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 16,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "willian-jose-bahia", name: "Willian José", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 12,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "mateo-sanabria-bahia", name: "Mateo Sanabria", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 23,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaue-furquim-bahia", name: "Kauê Furquim", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 57,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kike-olivera-bahia", name: "Kike Olivera", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 99,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alejo-veliz-bahia", name: "Alejo Véliz", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "everaldo-bahia", name: "Everaldo", clubId: "bahia", clubName: "Bahia", division: "Série A", position: "ATA", shirtNumber: 27,
    source: "Site oficial do Esporte Clube Bahia — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "weverton-gremio", name: "Weverton", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "GOL", shirtNumber: 1,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-grando-gremio", name: "Gabriel Grando", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "GOL", shirtNumber: 12,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "thiago-beltrame-gremio", name: "Thiago Beltrame", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "GOL", shirtNumber: 24,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-menegon-gremio", name: "Gabriel Menegon", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "GOL", shirtNumber: 31,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "balbuena-gremio", name: "Fabián Balbuena", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ZAG", shirtNumber: 2,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-martins-gremio", name: "Gustavo Martins", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ZAG", shirtNumber: 6,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kannemann-gremio", name: "Walter Kannemann", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ZAG", shirtNumber: 4,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "viery-gremio", name: "Viery", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ZAG", shirtNumber: 44,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "wagner-leonardo-gremio", name: "Wagner Leonardo", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ZAG", shirtNumber: 3,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "luis-eduardo-gremio", name: "Luis Eduardo", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ZAG", shirtNumber: 43,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "wallace-gremio", name: "Wallace", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ZAG", shirtNumber: 82,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "caio-paulista-gremio", name: "Caio Paulista", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "LAT", shirtNumber: 38,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-pedro-gremio", name: "João Pedro", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "LAT", shirtNumber: 18,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marcos-rocha-gremio", name: "Marcos Rocha", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "LAT", shirtNumber: 14,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marlon-gremio", name: "Marlon", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "LAT", shirtNumber: 23,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-gabriel-gremio", name: "Pedro Gabriel", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "LAT", shirtNumber: 54,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "dodi-gremio", name: "Dodi", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "VOL", shirtNumber: 17,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "erick-noriega-gremio", name: "Erick Noriega", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "VOL", shirtNumber: 8,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "juan-nardoni-gremio", name: "Juan Nardoni", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "VOL", shirtNumber: 5,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "leonel-perez-gremio", name: "Leonel Pérez", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "MEI", shirtNumber: 33,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "monsalve-gremio", name: "Monsalve", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "MEI", shirtNumber: 11,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "riquelme-gremio", name: "Riquelme", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "MEI", shirtNumber: 65,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "roger-gremio", name: "Roger", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "MEI", shirtNumber: 47,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "tiago-gremio", name: "Tiago", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "MEI", shirtNumber: 39,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "villasanti-gremio", name: "Mathías Villasanti", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "VOL", shirtNumber: 20,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "willian-gremio", name: "Willian", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "MEI", shirtNumber: 10,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "amuzu-gremio", name: "Francis Amuzu", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 9,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "braithwaite-gremio", name: "Martin Braithwaite", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 22,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "carlos-vinicius-gremio", name: "Carlos Vinícius", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 95,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "enamorado-gremio", name: "José Enamorado", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 99,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pavon-gremio", name: "Cristian Pavon", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 7,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "tete-gremio", name: "Tetê", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 21,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-mec-gremio", name: "Gabriel Mec", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 37,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andre-henrique-gremio", name: "André Henrique", clubId: "gremio", clubName: "Grêmio", division: "Série A", position: "ATA", shirtNumber: 77,
    source: "Site oficial do Grêmio — elenco profissional, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-paulo-goleiro-santos", name: "João Paulo", clubId: "santos", clubName: "Santos", division: "Série A", position: "GOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-pedro-goleiro-santos", name: "João Pedro", clubId: "santos", clubName: "Santos", division: "Série A", position: "GOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rodrigo-falcao-santos", name: "Rodrigo Falcão", clubId: "santos", clubName: "Santos", division: "Série A", position: "GOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "diogenes-santos", name: "Diógenes", clubId: "santos", clubName: "Santos", division: "Série A", position: "GOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-brazao-santos", name: "Gabriel Brazão", clubId: "santos", clubName: "Santos", division: "Série A", position: "GOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-ananias-santos", name: "João Ananias", clubId: "santos", clubName: "Santos", division: "Série A", position: "ZAG",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "luan-peres-santos", name: "Luan Peres", clubId: "santos", clubName: "Santos", division: "Série A", position: "ZAG",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-verissimo-santos", name: "Lucas Veríssimo", clubId: "santos", clubName: "Santos", division: "Série A", position: "ZAG",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "adonis-frias-santos", name: "Adonis Frías", clubId: "santos", clubName: "Santos", division: "Série A", position: "ZAG",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ze-ivaldo-santos", name: "Zé Ivaldo", clubId: "santos", clubName: "Santos", division: "Série A", position: "ZAG",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-alencar-santos", name: "João Alencar", clubId: "santos", clubName: "Santos", division: "Série A", position: "ZAG",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "escobar-santos", name: "Escobar", clubId: "santos", clubName: "Santos", division: "Série A", position: "LAT",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rafael-gonzaga-santos", name: "Rafael Gonzaga", clubId: "santos", clubName: "Santos", division: "Série A", position: "LAT",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vinicius-lira-santos", name: "Vinícius Lira", clubId: "santos", clubName: "Santos", division: "Série A", position: "LAT",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "davizinho-santos", name: "Davizinho", clubId: "santos", clubName: "Santos", division: "Série A", position: "LAT",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "igor-vinicius-santos", name: "Igor Vinícius", clubId: "santos", clubName: "Santos", division: "Série A", position: "LAT",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rodinei-santos", name: "Rodinei", clubId: "santos", clubName: "Santos", division: "Série A", position: "LAT",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lima-santos", name: "Lima", clubId: "santos", clubName: "Santos", division: "Série A", position: "MEI",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "miguelito-santos", name: "Miguelito", clubId: "santos", clubName: "Santos", division: "Série A", position: "MEI",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "neymar-santos", name: "Neymar Jr", clubId: "santos", clubName: "Santos", division: "Série A", position: "MEI",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "coutinho-santos", name: "Philippe Coutinho", clubId: "santos", clubName: "Santos", division: "Série A", position: "MEI",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-bontempo-santos", name: "Gabriel Bontempo", clubId: "santos", clubName: "Santos", division: "Série A", position: "MEI",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rollheiser-santos", name: "Benjamín Rollheiser", clubId: "santos", clubName: "Santos", division: "Série A", position: "MEI",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "oliva-santos", name: "Christian Oliva", clubId: "santos", clubName: "Santos", division: "Série A", position: "VOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "samuel-pierri-santos", name: "Samuel Pierri", clubId: "santos", clubName: "Santos", division: "Série A", position: "VOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "willian-arao-santos", name: "Willian Arão", clubId: "santos", clubName: "Santos", division: "Série A", position: "VOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "arthur-melo-santos", name: "Arthur", clubId: "santos", clubName: "Santos", division: "Série A", position: "VOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-henrique-santos", name: "Gustavo Henrique", clubId: "santos", clubName: "Santos", division: "Série A", position: "VOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-schmidt-santos", name: "João Schmidt", clubId: "santos", clubName: "Santos", division: "Série A", position: "VOL",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "moises-santos", name: "Moisés", clubId: "santos", clubName: "Santos", division: "Série A", position: "ATA",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rony-santos", name: "Rony", clubId: "santos", clubName: "Santos", division: "Série A", position: "ATA",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "thaciano-santos", name: "Thaciano", clubId: "santos", clubName: "Santos", division: "Série A", position: "ATA",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "barreal-santos", name: "Álvaro Barreal", clubId: "santos", clubName: "Santos", division: "Série A", position: "ATA",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "caballero-santos", name: "Gustavo Caballero", clubId: "santos", clubName: "Santos", division: "Série A", position: "ATA",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "everton-cebolinha-santos", name: "Everton Cebolinha", clubId: "santos", clubName: "Santos", division: "Série A", position: "ATA",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-barbosa-santos", name: "Gabriel Barbosa", clubId: "santos", clubName: "Santos", division: "Série A", position: "ATA",
    source: "Santos FC — elenco masculino oficial e CBF Série A 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-batista-botafogo", name: "Gabriel Batista", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "GOL",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "warleson-botafogo", name: "Warleson", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "GOL",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alex-telles-botafogo", name: "Alex Telles", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "LAT",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "anthony-botafogo", name: "Anthony", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ZAG",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "arthur-chaves-botafogo", name: "Arthur Chaves", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ZAG",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ferraresi-botafogo", name: "Nahuel Ferraresi", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ZAG",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-pereira-botafogo", name: "Gabriel Pereira", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ZAG",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "carlos-eduardo-botafogo", name: "Carlos Eduardo", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "LAT",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaio-pantaleao-botafogo", name: "Kaio Pantaleão", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ZAG",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-monzon-botafogo", name: "Lucas Monzón", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ZAG",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marcal-botafogo", name: "Fernando Marçal", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "LAT",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "mateo-ponte-botafogo", name: "Mateo Ponte", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "LAT",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "paulo-victor-botafogo", name: "Paulo Victor", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "LAT",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vitinho-botafogo", name: "Vitinho", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "LAT",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "allan-botafogo", name: "Allan", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "VOL",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "danilo-santos-botafogo", name: "Danilo Santos", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "MEI",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cristian-medina-botafogo", name: "Cristian Medina", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "VOL",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-martins-botafogo", name: "Matheus Martins", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ATA",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "junior-santos-botafogo", name: "Júnior Santos", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ATA",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kauan-botafogo", name: "Kauan", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "MEI",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "huguinho-botafogo", name: "Huguinho", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ATA",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "tiquinho-botafogo", name: "Tiquinho Soares", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ATA",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ziyech-botafogo", name: "Hakim Ziyech", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "MEI",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jose-kadir-botafogo", name: "José Kadir", clubId: "botafogo", clubName: "Botafogo", division: "Série A", position: "ATA",
    source: "Botafogo FR — elenco profissional oficial 2026 e escalação CBF Série A, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cassio-cruzeiro", name: "Cássio", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "GOL",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "otavio-cruzeiro", name: "Otávio", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "GOL",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-aragao-cruzeiro", name: "Léo Aragão", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "GOL",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fabricio-bruno-cruzeiro", name: "Fabrício Bruno", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ZAG",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jonathan-jesus-cruzeiro", name: "Jonathan Jesus", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ZAG",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-marcelo-cruzeiro", name: "João Marcelo", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ZAG",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-villalba-cruzeiro", name: "Lucas Villalba", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ZAG",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fagner-cruzeiro", name: "Fagner", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "LAT",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "william-cruzeiro", name: "William", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "LAT",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaua-moraes-cruzeiro", name: "Kauã Moraes", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "LAT",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-rojas-cruzeiro", name: "Gabriel Rojas", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "LAT",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matias-vina-cruzeiro", name: "Matías Viña", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "LAT",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-romero-cruzeiro", name: "Lucas Romero", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "VOL",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ze-lucas-cruzeiro", name: "Zé Lucas", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "VOL",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-silva-cruzeiro", name: "Lucas Silva", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "VOL",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-henrique-cruzeiro", name: "Matheus Henrique", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "MEI",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gerson-cruzeiro", name: "Gerson", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "MEI",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-pereira-cruzeiro", name: "Matheus Pereira", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "MEI",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "felipe-morais-cruzeiro", name: "Felipe Morais", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "MEI",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "keny-arroyo-cruzeiro", name: "Keny Arroyo", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "wanderson-cruzeiro", name: "Wanderson", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "wesley-cruzeiro", name: "Wesley", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-costa-cruzeiro", name: "João Costa", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucho-rodriguez-cruzeiro", name: "Lucho Rodríguez", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaique-kenji-cruzeiro", name: "Kaique Kenji", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marquinhos-cruzeiro", name: "Marquinhos", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-pec-cruzeiro", name: "Gabriel Pec", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "luis-sinisterra-cruzeiro", name: "Luis Sinisterra", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-rodrigues-cruzeiro", name: "Bruno Rodrigues", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaio-jorge-cruzeiro", name: "Kaio Jorge", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "neiser-villarreal-cruzeiro", name: "Néiser Villarreal", clubId: "cruzeiro", clubName: "Cruzeiro", division: "Série A", position: "ATA",
    source: "Cruzeiro Esporte Clube — elenco profissional e janela 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rafael-sao-paulo", name: "Rafael", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "GOL",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "carlos-coronel-sao-paulo", name: "Carlos Coronel", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "GOL",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-pedro-sao-paulo", name: "João Pedro", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "GOL",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "young-sao-paulo", name: "Young", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "GOL",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "toloi-sao-paulo", name: "Rafael Tolói", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ZAG",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "arboleda-sao-paulo", name: "Arboleda", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ZAG",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "domingos-duarte-sao-paulo", name: "Domingos Duarte", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ZAG",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "sabino-sao-paulo", name: "Sabino", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ZAG",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "isac-sao-paulo", name: "Isac", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ZAG",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "osorio-sao-paulo", name: "Luis Osorio", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ZAG",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "iago-sao-paulo", name: "Iago", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "LAT",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "enzo-diaz-sao-paulo", name: "Enzo Díaz", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "LAT",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "wendell-sao-paulo", name: "Wendell", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "LAT",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-ramon-sao-paulo", name: "Lucas Ramon", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "LAT",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "buta-sao-paulo", name: "Aurélio Buta", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "LAT",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cedric-sao-paulo", name: "Cédric Soares", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "LAT",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-lima-sao-paulo", name: "Pedro Lima", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "LAT",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marcos-antonio-sao-paulo", name: "Marcos Antônio", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "MEI",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "bobadilla-sao-paulo", name: "Damián Bobadilla", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "MEI",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "newton-sao-paulo", name: "Newton", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "VOL",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pablo-maia-sao-paulo", name: "Pablo Maia", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "VOL",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-ferreira-sao-paulo", name: "Pedro Ferreira", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "MEI",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "djhordney-sao-paulo", name: "Djhordney", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "MEI",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cauly-sao-paulo", name: "Cauly", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "MEI",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "danielzinho-sao-paulo", name: "Danielzinho", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "MEI",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-moura-sao-paulo", name: "Lucas Moura", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jonathan-calleri-sao-paulo", name: "Jonathan Calleri", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "luciano-sao-paulo", name: "Luciano", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ferreirinha-sao-paulo", name: "Ferreira", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andre-silva-sao-paulo", name: "André Silva", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "victor-sa-sao-paulo", name: "Victor Sá", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "tete-sao-paulo", name: "Tetê", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "artur-sao-paulo", name: "Artur", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-santana-sao-paulo", name: "Gustavo Santana", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucca-marques-sao-paulo", name: "Lucca Marques", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ryan-francisco-sao-paulo", name: "Ryan Francisco", clubId: "sao-paulo", clubName: "São Paulo", division: "Série A", position: "ATA",
    source: "São Paulo FC — elenco profissional oficial e relação CBF 2026, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fabio-fluminense", name: "Fábio", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "GOL",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marcelo-pitaluga-fluminense", name: "Marcelo Pitaluga", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "GOL",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vitor-eudes-fluminense", name: "Vitor Eudes", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "GOL",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-felix-fluminense", name: "Gustavo Félix", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "GOL",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "thiago-silva-fluminense", name: "Thiago Silva", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jemmes-fluminense", name: "Jemmes", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ignacio-fluminense", name: "Ignácio", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "igor-rabello-fluminense", name: "Igor Rabello", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "juan-freytes-fluminense", name: "Juan Freytes", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "julian-millan-fluminense", name: "Julián Millán", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gorgulho-fluminense", name: "Gorgulho", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "breno-britez-fluminense", name: "Breno Britez", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ZAG",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "samuel-xavier-fluminense", name: "Samuel Xavier", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rene-fluminense", name: "Renê", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "guilherme-arana-fluminense", name: "Guilherme Arana", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "guga-fluminense", name: "Guga", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vagno-fluminense", name: "Vagno", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "julio-fidelis-fluminense", name: "Júlio Fidélis", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kaio-borges-fluminense", name: "Kaio Borges", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "richard-wendell-fluminense", name: "Richard Wendell", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "LAT",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "facundo-bernal-fluminense", name: "Facundo Bernal", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "VOL",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "martinelli-fluminense", name: "Martinelli", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ganso-fluminense", name: "PH Ganso", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "savarino-fluminense", name: "Savarino", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "nonato-fluminense", name: "Nonato", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alisson-fluminense", name: "Alisson", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucho-acosta-fluminense", name: "Lucho Acosta", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "hercules-fluminense", name: "Hércules", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "davi-melo-fluminense", name: "Davi Melo", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "otavio-fluminense", name: "Otávio", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "VOL",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ruan-sales-fluminense", name: "Ruan Sales", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "naara-fluminense", name: "Naarã", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "paulinho-fluminense", name: "Paulinho", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "peter-fluminense", name: "Peter", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andrey-fluminense", name: "Andrey", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "MEI",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "soteldo-fluminense", name: "Soteldo", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "john-kennedy-fluminense", name: "John Kennedy", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "german-cano-fluminense", name: "Germán Cano", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "canobbio-fluminense", name: "Canobbio", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rodrigo-castillo-fluminense", name: "Rodrigo Castillo", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kevin-serna-fluminense", name: "Kevin Serna", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-reis-fluminense", name: "Matheus Reis", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "riquelme-felipe-fluminense", name: "Riquelme Felipe", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "wesley-nata-fluminense", name: "Wesley Natã", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "isack-gabriel-fluminense", name: "Isack Gabriel", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "keven-samuel-fluminense", name: "Keven Samuel", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "enzo-munerato-fluminense", name: "Enzo Munerato", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-lourenco-fluminense", name: "João Lourenço", clubId: "fluminense", clubName: "Fluminense", division: "Série A", position: "ATA",
    source: "CBF Série A 2026 e lista de inscritos do Fluminense para Libertadores, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cleiton-red-bull-bragantino", name: "Cleiton", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "GOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "tiago-volpi-red-bull-bragantino", name: "Tiago Volpi", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "GOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fernando-costa-red-bull-bragantino", name: "Fernando Costa", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "GOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fabricio-red-bull-bragantino", name: "Fabrício", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "GOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-reis-red-bull-bragantino", name: "Gustavo Reis", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "GOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "guzman-rodriguez-red-bull-bragantino", name: "Guzmán Rodríguez", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ZAG",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "eduardo-santos-red-bull-bragantino", name: "Eduardo Santos", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ZAG",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alix-vinicius-red-bull-bragantino", name: "Alix Vinícius", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ZAG",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pedro-henrique-red-bull-bragantino", name: "Pedro Henrique", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ZAG",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-marques-red-bull-bragantino", name: "Gustavo Marques", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ZAG",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "agustin-santanna-red-bull-bragantino", name: "Agustín Sant'Anna", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "LAT",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andres-hurtado-red-bull-bragantino", name: "Andrés Hurtado", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "LAT",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vanderlan-red-bull-bragantino", name: "Vanderlan", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "LAT",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "juninho-capixaba-red-bull-bragantino", name: "Juninho Capixaba", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "LAT",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "caue-red-bull-bragantino", name: "Cauê", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "LAT",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fabinho-red-bull-bragantino", name: "Fabinho", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "VOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-girotto-red-bull-bragantino", name: "Gabriel Girotto", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "VOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "eric-ramires-red-bull-bragantino", name: "Eric Ramires", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "MEI",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "nacho-sosa-red-bull-bragantino", name: "Nacho Sosa", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "VOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rodriguinho-red-bull-bragantino", name: "Rodriguinho", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "MEI",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gustavo-neves-red-bull-bragantino", name: "Gustavo Neves", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "MEI",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-fernandes-red-bull-bragantino", name: "Matheus Fernandes", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "VOL",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "eduardo-sasha-red-bull-bragantino", name: "Eduardo Sasha", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "isidro-pitta-red-bull-bragantino", name: "Isidro Pitta", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "fernando-red-bull-bragantino", name: "Fernando", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vinicinho-red-bull-bragantino", name: "Vinicinho", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-barbosa-red-bull-bragantino", name: "Lucas Barbosa", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "davi-gomes-red-bull-bragantino", name: "Davi Gomes", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "henry-mosquera-red-bull-bragantino", name: "Henry Mosquera", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jose-herrera-red-bull-bragantino", name: "José Herrera", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marcelinho-red-bull-bragantino", name: "Marcelinho", clubId: "red-bull-bragantino", clubName: "Red Bull Bragantino", division: "Série A", position: "ATA",
    source: "Red Bull Bragantino — elenco profissional 2026, publicado em 27/07/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "leo-jardim-vasco-da-gama", name: "Léo Jardim", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "GOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "daniel-fuzato-vasco-da-gama", name: "Daniel Fuzato", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "GOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "pablo-vasco-da-gama", name: "Pablo", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "GOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "joao-vitor-vasco-da-gama", name: "João Vitor", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "LAT",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "paulo-henrique-vasco-da-gama", name: "Paulo Henrique", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "LAT",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "puma-rodriguez-vasco-da-gama", name: "Puma Rodríguez", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "LAT",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cuiabano-vasco-da-gama", name: "Cuiabano", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "LAT",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-piton-vasco-da-gama", name: "Lucas Piton", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "LAT",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "paulinho-vasco-da-gama", name: "Paulinho", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "LAT",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "carlos-cuesta-vasco-da-gama", name: "Carlos Cuesta", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ZAG",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-pereira-vasco-da-gama", name: "Gabriel Pereira", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ZAG",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lucas-freitas-vasco-da-gama", name: "Lucas Freitas", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ZAG",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "robert-renan-vasco-da-gama", name: "Robert Renan", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ZAG",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "saldivia-vasco-da-gama", name: "Alan Saldivia", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ZAG",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "walace-falcao-vasco-da-gama", name: "Walace Falcão", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ZAG",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "cauan-barros-vasco-da-gama", name: "Cauan Barros", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "VOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "jair-vasco-da-gama", name: "Jair", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "VOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "thiago-mendes-vasco-da-gama", name: "Thiago Mendes", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "VOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ramon-rique-vasco-da-gama", name: "Ramon Rique", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "VOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "tche-tche-vasco-da-gama", name: "Tchê Tchê", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "VOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "mateus-carvalho-vasco-da-gama", name: "Mateus Carvalho", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "VOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "santiago-sosa-vasco-da-gama", name: "Santiago Sosa", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "VOL",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "rojas-vasco-da-gama", name: "Johan Rojas", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "MEI",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "lescano-vasco-da-gama", name: "Lescano", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "MEI",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "spinelli-vasco-da-gama", name: "Claudio Spinelli", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "brenner-vasco-da-gama", name: "Brenner", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "marino-hinestroza-vasco-da-gama", name: "Marino Hinestroza", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "andres-gomez-vasco-da-gama", name: "Andrés Gómez", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "nuno-moreira-vasco-da-gama", name: "Nuno Moreira", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "david-vasco-da-gama", name: "David", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "adson-vasco-da-gama", name: "Adson", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "facundo-colidio-vasco-da-gama", name: "Facundo Colidio", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-duarte-vasco-da-gama", name: "Bruno Duarte", clubId: "vasco-da-gama", clubName: "Vasco da Gama", division: "Série A", position: "ATA",
    source: "NETVASCO — elenco 2026 atualizado em 31/10/2026 e relação CONMEBOL Sudamericana 2026", verifiedAt: "2026-10-31"
  },
  {
    id: "sergio-rochet-internacional", name: "Sergio Rochet", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "GOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "anthoni-internacional", name: "Anthoni", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "GOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "diego-esser-internacional", name: "Diego Esser", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "GOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kauan-jesus-internacional", name: "Kauan Jesus", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "GOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-cunha-internacional", name: "Matheus Cunha", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "GOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "felix-torres-internacional", name: "Félix Torres", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ZAG",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "gabriel-mercado-internacional", name: "Gabriel Mercado", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ZAG",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "guillermo-maripan-internacional", name: "Guillermo Maripán", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ZAG",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "juninho-internacional", name: "Juninho", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ZAG",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "victor-gabriel-internacional", name: "Victor Gabriel", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ZAG",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "bernabei-internacional", name: "Bernabei", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "LAT",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "braian-aguirre-internacional", name: "Braian Aguirre", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "LAT",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-gomes-internacional", name: "Bruno Gomes", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "LAT",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "matheus-bahia-internacional", name: "Matheus Bahia", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "LAT",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alan-patrick-internacional", name: "Alan Patrick", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "MEI",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "bruno-henrique-internacional", name: "Bruno Henrique", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "VOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "calebe-internacional", name: "Calebe", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "MEI",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "niclas-eliasson-internacional", name: "Niclas Eliasson", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "MEI",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "paulinho-internacional", name: "Paulinho", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "MEI",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "ronaldo-internacional", name: "Ronaldo", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "VOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "thiago-maia-internacional", name: "Thiago Maia", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "VOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "villagra-internacional", name: "Villagra", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "VOL",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "alerrandro-internacional", name: "Alerrandro", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ATA",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "johan-carbonero-internacional", name: "Johan Carbonero", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ATA",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "kayky-internacional", name: "Kayky", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ATA",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "sanabria-internacional", name: "Sanabria", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ATA",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "vitinho-internacional", name: "Vitinho", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ATA",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "youssef-kanaan-internacional", name: "Youssef Kanaan", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ATA",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
  {
    id: "yuri-salenave-internacional", name: "Yuri Salenave", clubId: "internacional", clubName: "Internacional", division: "Série A", position: "ATA",
    source: "Site oficial do Sport Club Internacional — elenco masculino, consulta em 31/10/2026", verifiedAt: "2026-10-31"
  },
];
export const PLAYER_DATA_AS_OF = "2026-10-31";
export const PLAYER_DATA_STATUS = "partial-verified";
