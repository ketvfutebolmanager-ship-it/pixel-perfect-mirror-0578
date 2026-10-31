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
];
export const PLAYER_DATA_AS_OF = "2026-10-31";
export const PLAYER_DATA_STATUS = "partial-verified";
