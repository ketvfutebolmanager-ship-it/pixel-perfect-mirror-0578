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
export const VERIFIED_PLAYERS_2026: PlayerRecord[

] = [
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
      id: "anthony-valencia-flamengo", name: "Anthony Valencia", clubId: "flamengo", clubName: "Flamengo", division: "Série A", position: "ATA", shirtNumber: 14,
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
  {
      id: "georgemy-mirassol", name: "Georgemy", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "GOL", shirtNumber: 1,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "walter-mirassol", name: "Walter", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "GOL", shirtNumber: 22,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "alex-muralha-mirassol", name: "Alex Muralha", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "GOL", shirtNumber: 23,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "thomazella-mirassol", name: "Thomazella", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "GOL", shirtNumber: 90,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "lucas-oliveira-mirassol", name: "Lucas Oliveira", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ZAG", shirtNumber: 2,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "willian-machado-mirassol", name: "Willian Machado", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ZAG", shirtNumber: 3,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "joao-victor-mirassol", name: "João Victor", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ZAG", shirtNumber: 34,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "gabriel-knesowitsch-mirassol", name: "Gabriel Knesowitsch", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ZAG", shirtNumber: 44,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "marcelinho-mirassol", name: "Marcelinho", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ZAG", shirtNumber: 53,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "reinaldo-mirassol", name: "Reinaldo", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "LAT", shirtNumber: 6,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "victor-luis-mirassol", name: "Victor Luis", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "LAT", shirtNumber: 12,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "elias-mirassol", name: "Elias", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "LAT", shirtNumber: 18,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "daniel-borges-mirassol", name: "Daniel Borges", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "LAT", shirtNumber: 20,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "igor-formiga-mirassol", name: "Igor Formiga", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "LAT", shirtNumber: 32,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "japa-mirassol", name: "Japa", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 5,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "shaylon-mirassol", name: "Shaylon", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 7,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "denilson-mirassol", name: "Denilson", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 8,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "chico-kim-mirassol", name: "Chico Kim", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 10,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "jose-aldo-mirassol", name: "José Aldo", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 21,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "neto-moura-mirassol", name: "Neto Moura", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 25,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "eduardo-mirassol", name: "Eduardo", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 33,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "gustavo-cazonatti-mirassol", name: "Gustavo Cazonatti", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 55,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "wallisson-mirassol", name: "Wallisson", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "MEI", shirtNumber: 80,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ze-roberto-mirassol", name: "Zé Roberto", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 9,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "negueba-mirassol", name: "Negueba", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 11,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "gustavo-silva-mirassol", name: "Gustavo Silva", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 16,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "fernandinho-mirassol", name: "Fernandinho", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 17,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "bruno-santos-mirassol", name: "Bruno Santos", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 30,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "alesson-mirassol", name: "Alesson", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 77,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "edson-carioca-mirassol", name: "Edson Carioca", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 95,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "carlos-eduardo-mirassol", name: "Carlos Eduardo", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 96,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "andre-luis-mirassol", name: "André Luis", clubId: "mirassol", clubName: "Mirassol", division: "Série A", position: "ATA", shirtNumber: 99,
      source: "Bússola do Futebol — elenco Mirassol 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ivan-remo-remo", name: "Ivan", clubId: "remo", clubName: "Remo", division: "Série A", position: "GOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "marcelo-rangel-remo-remo", name: "Marcelo Rangel", clubId: "remo", clubName: "Remo", division: "Série A", position: "GOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ygor-vinhas-remo", name: "Ygor Vinhas", clubId: "remo", clubName: "Remo", division: "Série A", position: "GOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "leo-andrade-remo-remo", name: "Léo Andrade", clubId: "remo", clubName: "Remo", division: "Série A", position: "ZAG",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "marllon-remo-remo", name: "Marllon", clubId: "remo", clubName: "Remo", division: "Série A", position: "ZAG",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "matheus-felipe-remo-remo", name: "Matheus Felipe", clubId: "remo", clubName: "Remo", division: "Série A", position: "ZAG",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "duplexe-tchamba-remo", name: "Duplexe Tchamba", clubId: "remo", clubName: "Remo", division: "Série A", position: "ZAG",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ze-ivaldo-remo-remo", name: "Zé Ivaldo", clubId: "remo", clubName: "Remo", division: "Série A", position: "ZAG",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "joao-lucas-remo-remo", name: "João Lucas", clubId: "remo", clubName: "Remo", division: "Série A", position: "LAT",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "marcelinho-remo-remo", name: "Marcelinho", clubId: "remo", clubName: "Remo", division: "Série A", position: "LAT",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "matheus-alexandre-remo-remo", name: "Matheus Alexandre", clubId: "remo", clubName: "Remo", division: "Série A", position: "LAT",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "marlon-remo-remo", name: "Marlon", clubId: "remo", clubName: "Remo", division: "Série A", position: "LAT",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "mayk-remo-remo", name: "Mayk", clubId: "remo", clubName: "Remo", division: "Série A", position: "LAT",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "edson-fernando-remo", name: "Edson Fernando", clubId: "remo", clubName: "Remo", division: "Série A", position: "VOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "jaderson-remo", name: "Jaderson", clubId: "remo", clubName: "Remo", division: "Série A", position: "VOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "patrick-remo-remo", name: "Patrick", clubId: "remo", clubName: "Remo", division: "Série A", position: "VOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "leonel-picco-remo", name: "Leonel Picco", clubId: "remo", clubName: "Remo", division: "Série A", position: "VOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ze-welison-remo", name: "Zé Welison", clubId: "remo", clubName: "Remo", division: "Série A", position: "VOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ze-ricardo-remo", name: "Zé Ricardo", clubId: "remo", clubName: "Remo", division: "Série A", position: "VOL",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "david-braga-remo", name: "David Braga", clubId: "remo", clubName: "Remo", division: "Série A", position: "MEI",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "vitor-bueno-remo-remo", name: "Vitor Bueno", clubId: "remo", clubName: "Remo", division: "Série A", position: "MEI",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "alef-manga-remo", name: "Alef Manga", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "galeano-remo-remo", name: "Galeano", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "eduardo-melo-remo", name: "Eduardo Melo", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "jaja-remo-remo", name: "Jajá", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "yago-pikachu-remo", name: "Yago Pikachu", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "gabriel-poveda-remo", name: "Gabriel Poveda", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "gabriel-taliari-remo", name: "Gabriel Taliari", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "tico-remo-remo", name: "Tico", clubId: "remo", clubName: "Remo", division: "Série A", position: "ATA",
      source: "ge — elenco atual do Remo após reformulação, publicado em 13/09/2026; conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "lucas-arcanjo-vitoria", name: "Lucas Arcanjo", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "GOL", shirtNumber: 1,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "fintelman-vitoria", name: "Fintelman", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "GOL", shirtNumber: 35,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "yuri-sena-vitoria", name: "Yuri Sena", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "GOL", shirtNumber: 71,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "emanuel-britez-vitoria", name: "Emanuel Brítez", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 2,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "darlan-vitoria", name: "Darlan", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 3,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "camutanga-vitoria", name: "Camutanga", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 4,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ramon-vitoria-vitoria", name: "Ramon", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "LAT", shirtNumber: 13,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "kauan-coutinho-vitoria", name: "Kauan Coutinho", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 18,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "caca-vitoria", name: "Cacá", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 25,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "edenilson-vitoria-vitoria", name: "Edenilson", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 26,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "luan-candido-vitoria", name: "Luan Cândido", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "LAT", shirtNumber: 36,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "edu-ribeiro-vitoria", name: "Edu Ribeiro", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 43,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "nathan-mendes-vitoria", name: "Nathan Mendes", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "LAT", shirtNumber: 45,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "fabiano-vitoria-vitoria", name: "Fabiano", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "LAT", shirtNumber: 70,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "jamerson-vitoria", name: "Jamerson", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "LAT", shirtNumber: 83,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "mateus-silva-vitoria", name: "Mateus Silva", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ZAG", shirtNumber: 98,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "emmanuel-martinez-vitoria", name: "Emmanuel Martínez", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "MEI", shirtNumber: 6,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "tomas-pochettino-vitoria", name: "Tomás Pochettino", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "MEI", shirtNumber: 8,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "matheuzinho-vitoria", name: "Matheuzinho", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "MEI", shirtNumber: 10,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "walace-vitoria", name: "Walace", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "VOL", shirtNumber: 15,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ruben-ismael-vitoria", name: "Rúben Ismael", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "MEI", shirtNumber: 16,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "dudu-vitoria-vitoria", name: "Dudu", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "VOL", shirtNumber: 21,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "wendell-santos-vitoria", name: "Wendell Santos", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "MEI", shirtNumber: 41,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "gabriel-baralhas-vitoria", name: "Gabriel Baralhas", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "VOL", shirtNumber: 44,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ze-vitor-vitoria-vitoria", name: "Zé Vitor", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "VOL", shirtNumber: 88,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "caique-goncalves-vitoria", name: "Caíque Gonçalves", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "VOL", shirtNumber: 95,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "marinho-vitoria", name: "Marinho", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 7,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "alex-bruno-vitoria", name: "Alex Bruno", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 9,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "osvaldo-vitoria", name: "Osvaldo", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 11,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "diego-tarzia-vitoria", name: "Diego Tarzia", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 12,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "lucas-silva-vitoria-vitoria", name: "Lucas Silva", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 20,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "fabri-vitoria", name: "Fabrí", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 23,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "anderson-pato-vitoria", name: "Anderson Pato", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 28,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "erick-vitoria-vitoria", name: "Erick", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 33,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "ignacio-laquintana-vitoria", name: "Ignacio Laquintana", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 77,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "renato-kayzer-vitoria", name: "Renato Kayzer", clubId: "vitoria", clubName: "Vitória", division: "Série A", position: "ATA", shirtNumber: 79,
      source: "Bússola do Futebol — elenco Vitória 2026, conferido em 31/10/2026", verifiedAt: "2026-10-31"
    },
  {
      id: "renan-braganca-america-rn", name: "Renan Bragança", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "GOL",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "lucas-araujo-america-rn", name: "Lucas Araújo", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "GOL",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "guilherme-paraiba-america-rn", name: "Guilherme Paraíba", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ZAG",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "renzo-america-rn", name: "Renzo", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ZAG",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "lucas-rodrigues-america-rn", name: "Lucas Rodrigues", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ZAG",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "pedro-jorge-america-rn", name: "Pedro Jorge", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ZAG",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "pedrao-america-rn", name: "Pedrão", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ZAG",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "gustavo-america-rn", name: "Gustavo", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ZAG",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "elias-america-rn", name: "Elias", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "LAT",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "evandro-america-rn", name: "Evandro", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "LAT",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "brenno-america-rn", name: "Brenno", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "MEI",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "balotelli-america-rn", name: "Balotelli", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "VOL",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "antonio-villa-america-rn", name: "Antônio Villa", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "MEI",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "allan-america-rn", name: "Allan", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "MEI",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "henrique-america-rn", name: "Henrique", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "MEI",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "jadson-america-rn", name: "Jadson", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "VOL",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "copetti-america-rn", name: "Copetti", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "VOL",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "caue-america-rn", name: "Cauê", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "MEI",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "joaozinho-america-rn", name: "Joãozinho", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ATA",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "galvan-america-rn", name: "Galvan", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ATA",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "luiz-thiago-america-rn", name: "Luiz Thiago", clubId: "america-rn", clubName: "América-RN", division: "Série D", position: "ATA",
      source: "https://www.americadenatalsaf.com.br/jogadores/elenco-principal", verifiedAt: "2026-11-02"
    },
  {
      id: "lucas-amaral-central", name: "Lucas Amaral", clubId: "central", clubName: "Central", division: "Série D", position: "GOL",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "luiz-ricardo-central", name: "Luiz Ricardo", clubId: "central", clubName: "Central", division: "Série D", position: "GOL",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "eduardo-elias-central", name: "Eduardo Elias", clubId: "central", clubName: "Central", division: "Série D", position: "ZAG",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "romulo-central", name: "Rômulo", clubId: "central", clubName: "Central", division: "Série D", position: "ZAG",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "wellington-central", name: "Wellington", clubId: "central", clubName: "Central", division: "Série D", position: "ZAG",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "jadson-sergipano-central", name: "Jadson Sergipano", clubId: "central", clubName: "Central", division: "Série D", position: "ZAG",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "guilherme-lucena-central", name: "Guilherme Lucena", clubId: "central", clubName: "Central", division: "Série D", position: "LAT",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "polegar-central", name: "Polegar", clubId: "central", clubName: "Central", division: "Série D", position: "LAT",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "filipe-ramon-central", name: "Filipe Ramon", clubId: "central", clubName: "Central", division: "Série D", position: "LAT",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "gilmar-central", name: "Gilmar", clubId: "central", clubName: "Central", division: "Série D", position: "LAT",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "henrique-silva-central", name: "Henrique Silva", clubId: "central", clubName: "Central", division: "Série D", position: "VOL",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "leo-carvalho-central", name: "Léo Carvalho", clubId: "central", clubName: "Central", division: "Série D", position: "VOL",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "claudevan-central", name: "Claudevan", clubId: "central", clubName: "Central", division: "Série D", position: "VOL",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "alisson-santana-central", name: "Alisson Santana", clubId: "central", clubName: "Central", division: "Série D", position: "VOL",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "michel-chuva-central", name: "Michel Chuva", clubId: "central", clubName: "Central", division: "Série D", position: "VOL",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "emerson-bacas-central", name: "Emerson Bacas", clubId: "central", clubName: "Central", division: "Série D", position: "MEI",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "bruninho-central", name: "Bruninho", clubId: "central", clubName: "Central", division: "Série D", position: "MEI",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "leandro-costa-central", name: "Leandro Costa", clubId: "central", clubName: "Central", division: "Série D", position: "ATA",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "caio-vinicius-central", name: "Caio Vinícius", clubId: "central", clubName: "Central", division: "Série D", position: "ATA",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "henrique-alves-central", name: "Henrique Alves", clubId: "central", clubName: "Central", division: "Série D", position: "ATA",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "caxito-central", name: "Caxito", clubId: "central", clubName: "Central", division: "Série D", position: "ATA",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "maicon-central", name: "Maicon", clubId: "central", clubName: "Central", division: "Série D", position: "ATA",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "william-anicete-central", name: "William Anicete", clubId: "central", clubName: "Central", division: "Série D", position: "ATA",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "romario-central", name: "Romário", clubId: "central", clubName: "Central", division: "Série D", position: "ATA",
      source: "https://ge.globo.com/pe/caruaru-regiao/futebol/times/central/noticia/2026/09/28/central-anuncia-volante-e-chega-a-25-reforcos-para-disputa-do-campeonato-pernambucano.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "da-moroni-laguna", name: "Dã Moroni", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "breninho-laguna", name: "Breninho", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "mario-silva-laguna", name: "Mario Silva", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "everton-luiz-laguna", name: "Everton Luiz", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "ryan-laguna", name: "Ryan", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "gustavinho-laguna", name: "Gustavinho", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "vini-luiz-laguna", name: "Vini Luiz", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "guilherme-sampaio-laguna", name: "Guilherme Sampaio", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "joao-vitor-laguna", name: "João Vítor", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "kaike-wallace-laguna", name: "Kaike Wallace", clubId: "laguna", clubName: "Laguna", division: "Série D", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/60415?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "joao-vitor-batista-maguary", name: "João Vitor Batista", clubId: "maguary", clubName: "Maguary", division: "Série D", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/59116?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "julio-cesar-maguary", name: "Júlio César", clubId: "maguary", clubName: "Maguary", division: "Série D", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/59116?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "richardson-maguary", name: "Richardson", clubId: "maguary", clubName: "Maguary", division: "Série D", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/59116?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "rhuan-rodrigues-maguary", name: "Rhuan Rodrigues", clubId: "maguary", clubName: "Maguary", division: "Série D", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/59116?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "bruno-lopes-maguary", name: "Bruno Lopes", clubId: "maguary", clubName: "Maguary", division: "Série D", position: "GOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/59116?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "italo-maguary", name: "Ítalo", clubId: "maguary", clubName: "Maguary", division: "Série D", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-d/2026/59116?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "gabriel-razera-ituano", name: "Gabriel Razera", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "ATA", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "vinicius-de-oliveira-pinto-ituano", name: "Vinícius de Oliveira Pinto", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "ATA", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "lucas-leandro-wingert-ituano", name: "Lucas Leandro Wingert", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "GOL", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "lucas-soares-stefanello-ituano", name: "Lucas Soares Stefanello", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "MEI", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "marlon-yan-cavalcanti-da-silva-ituano", name: "Marlon Yan Cavalcanti da Silva", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "MEI", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "gabriel-rodrigues-marques-ituano", name: "Gabriel Rodrigues Marques", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "ATA", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "victor-silva-dos-reis-ituano", name: "Victor Silva dos Reis", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "LAT", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "wesley-borges-da-silva-ituano", name: "Wesley Borges da Silva", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "LAT", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "pedro-barbosa-malheiros-ituano", name: "Pedro Barbosa Malheiros", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "MEI", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "joao-vinicius-chiduben-paulino-tahi-ituano", name: "João Vinicius Chiduben Paulino Tahi", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "ATA", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "bruno-teruel-ituano", name: "Bruno Teruel", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "MEI", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "leonardo-souza-de-oliveira-ituano", name: "Leonardo Souza de Oliveira", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "ZAG", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "kauan-richard-leal-silva-ituano", name: "Kauan Richard Leal Silva", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "LAT", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "guilherme-xavier-de-oliveira-ituano", name: "Guilherme Xavier de Oliveira", clubId: "ituano", clubName: "Ituano", division: "Série C", position: "MEI", source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/64742", verifiedAt: "2026-11-02"
    },
  {
      id: "eduardo-moura-confianca", name: "Eduardo Moura", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "icaro-confianca", name: "Ícaro", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "adryan-confianca", name: "Adryan", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "renilson-confianca", name: "Renilson", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "weriton-confianca", name: "Weriton", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "LAT", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "guilherme-nunes-confianca", name: "Guilherme Nunes", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "lorran-confianca", name: "Lorran", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "kelvyn-confianca", name: "Kelvyn", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "MEI", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "nicholas-confianca", name: "Nicholas", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "MEI", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "danielzinho-confianca", name: "Danielzinho", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "iago-silva-confianca", name: "Iago Silva", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "renanzinho-confianca", name: "Renanzinho", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "maikon-aquino-confianca", name: "Maikon Aquino", clubId: "confianca", clubName: "Confiança", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/confianca/noticia/2025/11/18/confianca-anuncia-trio-de-jogadores-para-elenco-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "jefferson-itabaiana", name: "Jefferson", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "GOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "julio-cesar-itabaiana", name: "Júlio Cesar", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "GOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "william-itabaiana", name: "William", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "GOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "leo-souza-itabaiana", name: "Léo Souza", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "GOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "betao-itabaiana", name: "Betão", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "dequinha-itabaiana", name: "Dequinha", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "gustavo-cintra-itabaiana", name: "Gustavo Cintra", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "gustavo-fagundes-itabaiana", name: "Gustavo Fagundes", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ZAG", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "caio-felipe-itabaiana", name: "Caio Felipe", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "LAT", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "isaque-itabaiana", name: "Isaque", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "LAT", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "manoel-itabaiana", name: "Manoel", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "LAT", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "tarcisio-itabaiana", name: "Tarcísio", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "LAT", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "gustavo-crecci-itabaiana", name: "Gustavo Crecci", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "jair-itabaiana", name: "Jair", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "karl-itabaiana", name: "Karl", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "dudu-itabaiana", name: "Dudu", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "victor-luis-itabaiana", name: "Victor Luis", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "yago-henrique-itabaiana", name: "Yago Henrique", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "VOL", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "dione-itabaiana", name: "Dione", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "MEI", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "igor-lemos-itabaiana", name: "Igor Lemos", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "MEI", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "vitinho-itabaiana", name: "Vitinho", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "MEI", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "kayan-itabaiana", name: "Kayan", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "MEI", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "elimar-itabaiana", name: "Elimar", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "jonata-bastos-itabaiana", name: "Jonata Bastos", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "leilson-itabaiana", name: "Leilson", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "luan-silva-itabaiana", name: "Luan Silva", clubId: "itabaiana", clubName: "Itabaiana", division: "Série C", position: "ATA", source: "https://ge.globo.com/se/futebol/times/itabaiana/noticia/2025/12/23/itabaiana-apresenta-elenco-e-novos-uniformes-para-2026.ghtml", verifiedAt: "2026-11-02"
    },
  {
      id: "jean-drosny-paysandu", name: "Jean Drosny", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "GOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "gabriel-mesquita-paysandu", name: "Gabriel Mesquita", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "GOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "levi-trindade-paysandu", name: "Levi Silva Trindade", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "GOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "marcao-paysandu", name: "Marcos Vinicius Nascimento da Silva", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "GOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "edilson-paysandu", name: "Edilson José da Silva Júnior", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "LAT",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "jp-galvao-paysandu", name: "João Pedro Galvão de Carvalho", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "LAT",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "matheus-capixaba-paysandu", name: "Matheus Cardoso de Souza", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "LAT",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "caua-dias-paysandu", name: "Cauã Dias Dias", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "LAT",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "facundo-bonifazi-paysandu", name: "Facundo Bonifazi Castro", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "LAT",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "luciano-taboca-paysandu", name: "Luciano Souza Santos", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "LAT",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "bruno-bispo-paysandu", name: "Bruno Bispo dos Anjos", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "castro-paysandu", name: "Luiz Felipe Castro Neto", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "pedro-carrerette-paysandu", name: "Pedro Henrique Carrerette Lima", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "iarley-paysandu", name: "Iarley Brito Gonçalves", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "caua-libonati-paysandu", name: "Cauã Libonati do Nascimento", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "gustavo-henrique-paysandu", name: "Gustavo Henrique Santos", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "lucas-rodrigues-paysandu", name: "Lucas Rodrigues dos Santos", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ZAG",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "renan-castro-paysandu", name: "Renan Santos de Castro", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "LAT",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "brian-macapa-paysandu", name: "Brian Wendell Melo de Souza", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "caio-mello-paysandu", name: "Caio de Mello Vianna Pedrosa Galvão", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "henrico-paysandu", name: "Alvaro Henrico Brasil Aleixo de Paiva", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "pedro-henrique-paysandu", name: "Pedro Henrique Gonçalves da Silva", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "tiago-indio-paysandu", name: "Tiago Costa de Sousa", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "matheus-vargas-paysandu", name: "Matheus de Vargas", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "VOL",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "henrique-salomoni-paysandu", name: "Henrique Viana Salomoni", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "lucas-cardoso-paysandu", name: "Lucas Cardoso Moreira", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "marcinho-paysandu", name: "Marcio Barbosa Vieira Junior", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "radsley-paysandu", name: "Radsley Eduardo Gonçalves Ramos", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "pablo-baianinho-paysandu", name: "Pablo Santos de Alcantara", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "danilo-peu-paysandu", name: "Danilo de Souza Lima", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "italo-carvalho-paysandu", name: "Italo de Carvalho Rocha Lima", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "juninho-paysandu", name: "Jose Romualdo Pedro Junior", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "kleiton-pego-paysandu", name: "Kleiton Pego Duarte", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "thayllon-paysandu", name: "Thayllon Lopes Medeiros", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "thalyson-paysandu", name: "Thalyson Ricardo de Souza Gonçalves", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "kaua-hinkel-paysandu", name: "Kaua Hinkel Santos Vieira", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "miguel-angelo-paysandu", name: "Miguel Angelo Braga da Silva", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "nicolas-schiappacasse-paysandu", name: "Nicolas Augusto Rocha dos Santos", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "ATA",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "kukri-paysandu", name: "Krowakreti Viviane Kajipok", clubId: "paysandu", clubName: "Paysandu", division: "Série C", position: "MEI",
      source: "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-c/2026/20017?tab=atletas", verifiedAt: "2026-11-02"
    },
  {
      id: "vinicius-nautico", name: "Vinícius", clubId: "nautico", clubName: "Náutico", division: "Série B", position: "ATA",
      seasonStats: { appearances: 28, minutes: 2295, goals: 9, assists: 3, yellowCards: 2, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "alisson-safira-juventude", name: "Alisson Safira", clubId: "juventude", clubName: "Juventude", division: "Série B", position: "ATA",
      seasonStats: { appearances: 34, minutes: 2077, goals: 7, assists: 3, yellowCards: 4, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "crystopher-crb", name: "Crystopher", clubId: "crb", clubName: "CRB", division: "Série B", position: "MEI",
      seasonStats: { appearances: 32, minutes: 2727, goals: 7, assists: 8, yellowCards: 2, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "vinicius-diniz-operario-ferroviario", name: "Vinícius Diniz", clubId: "operario-ferroviario", clubName: "Operário Ferroviário", division: "Série B", position: "MEI",
      seasonStats: { appearances: 34, minutes: 2826, goals: 7, assists: 1, yellowCards: 8, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "dada-belmonte-crb", name: "Dadá Belmonte", clubId: "crb", clubName: "CRB", division: "Série B", position: "MEI",
      seasonStats: { appearances: 34, minutes: 2843, goals: 6, assists: 6, yellowCards: 3, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "daniel-penha-avai", name: "Daniel Penha", clubId: "avai", clubName: "Avaí", division: "Série B", position: "ATA",
      seasonStats: { appearances: 24, minutes: 1801, goals: 6, assists: 1, yellowCards: 4, secondYellowCards: 0, redCards: 1 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "fellipe-mateus-criciuma", name: "Fellipe Mateus", clubId: "criciuma", clubName: "Criciúma", division: "Série B", position: "MEI",
      seasonStats: { appearances: 33, minutes: 2511, goals: 6, assists: 0, yellowCards: 3, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "kauan-cuiaba", name: "Kauan", clubId: "cuiaba", clubName: "Cuiabá", division: "Série B", position: "ATA",
      seasonStats: { appearances: 32, minutes: 1881, goals: 6, assists: 3, yellowCards: 1, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "matheus-bianqui-novorizontino", name: "Matheus Bianqui", clubId: "novorizontino", clubName: "Novorizontino", division: "Série B", position: "MEI",
      seasonStats: { appearances: 28, minutes: 1650, goals: 6, assists: 0, yellowCards: 5, secondYellowCards: 1, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "melk-ceara", name: "Melk", clubId: "ceara", clubName: "Ceará", division: "Série B", position: "MEI",
      seasonStats: { appearances: 30, minutes: 1719, goals: 6, assists: 5, yellowCards: 1, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "pedrinho-sao-bernardo", name: "Pedrinho", clubId: "sao-bernardo", clubName: "São Bernardo", division: "Série B", position: "ATA",
      seasonStats: { appearances: 25, minutes: 1497, goals: 6, assists: 0, yellowCards: 0, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "vitinho-fortaleza", name: "Vitinho", clubId: "fortaleza", clubName: "Fortaleza", division: "Série B", position: "MEI",
      seasonStats: { appearances: 28, minutes: 1706, goals: 6, assists: 0, yellowCards: 3, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "anselmo-ramon-goias", name: "Anselmo Ramon", clubId: "goias", clubName: "Goiás", division: "Série B", position: "ATA",
      seasonStats: { appearances: 23, minutes: 1177, goals: 5, assists: 3, yellowCards: 1, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "brandao-ponte-preta", name: "Brandão", clubId: "ponte-preta", clubName: "Ponte Preta", division: "Série B", position: "ATA",
      seasonStats: { appearances: 25, minutes: 1718, goals: 5, assists: 1, yellowCards: 1, secondYellowCards: 1, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      id: "caio-dantas-operario-ferroviario", name: "Caio Dantas", clubId: "operario-ferroviario", clubName: "Operário Ferroviário", division: "Série B", position: "ATA",
      seasonStats: { appearances: 31, minutes: 1335, goals: 5, assists: 0, yellowCards: 1, secondYellowCards: 0, redCards: 0 },
      source: "https://classificacaogeral.com.br/jogadores/brasileirao-serie-b/2026", verifiedAt: "2026-11-08"
    },
  {
      "id": "italo-carvalho-paysandu",
      "name": "Ítalo Carvalho",
      "clubId": "paysandu",
      "clubName": "Paysandu",
      "division": "Série C",
      "position": "ATA",
      "source": "https://ge.globo.com/pa/futebol/times/paysandu/noticia/2026/09/04/italo-quer-acesso-e-titulo-da-serie-c-no-paysandu-para-fechar-melhor-ano-da-carreira.ghtml",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "juninho-paysandu",
      "name": "Juninho",
      "clubId": "paysandu",
      "clubName": "Paysandu",
      "division": "Série C",
      "position": "ATA",
      "source": "https://ge.globo.com/pa/futebol/times/paysandu/noticia/2026/10/23/paysandu-adquire-direitos-do-atacante-juninho-que-assina-por-mais-dois-anos.ghtml",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nico-schiappacasse-paysandu",
      "name": "Nico Schiappacasse",
      "clubId": "paysandu",
      "clubName": "Paysandu",
      "division": "Série C",
      "position": "ATA",
      "source": "https://ge.globo.com/pa/futebol/times/paysandu/noticia/2026/09/09/nico-schiappacasse-treina-com-paysandu-e-aguarda-detalhes-burocraticos-para-assinar.ghtml",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nene-botafogo-da-paraiba",
      "name": "Nenê",
      "clubId": "botafogo-da-paraiba",
      "clubName": "Botafogo da Paraíba",
      "division": "Série C",
      "position": "MEI",
      "source": "https://ge.globo.com/pb/futebol/noticia/2026/10/15/mais-um-ano-aos-45-nene-termina-temporada-no-botafogo-pb-sem-acesso-mas-projeta-futuro.ghtml",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-pedro-martins-brusque",
      "name": "João Pedro Martins",
      "clubId": "brusque",
      "clubName": "Brusque",
      "division": "Série C",
      "position": "ATA",
      "source": "https://www.transfermarkt.com.br/joao-pedro/profil/spieler/428787",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vitor-barreto-ferroviaria",
      "name": "Vitor Barreto",
      "clubId": "ferroviaria",
      "clubName": "Ferroviária",
      "division": "Série C",
      "position": "ATA",
      "source": "https://www.ogol.com.br/jogador/vitor-barreto/691669",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "getulio-inter-de-limeira",
      "name": "Getúlio",
      "clubId": "inter-de-limeira",
      "clubName": "Inter de Limeira",
      "division": "Série C",
      "position": "ATA",
      "source": "https://interdelimeira.com/player/getulio/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gustavo-america-mineiro",
      "name": "Gustavo",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "william-america-mineiro",
      "name": "William",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "cassio-america-mineiro",
      "name": "Cássio",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "italo-brito-america-mineiro",
      "name": "Ítalo Brito",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "bruno-brigido-america-mineiro",
      "name": "Bruno Brígido",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-sena-pereira-america-mineiro",
      "name": "Gabriel Sena Pereira",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheus-couto-simoes-america-mineiro",
      "name": "Matheus Couto Simões",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "emerson-santos-america-mineiro",
      "name": "Emerson Santos",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-sosa-america-mineiro",
      "name": "Lucas Sosa",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rafael-barcelos-america-mineiro",
      "name": "Rafael Barcelos",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "heitor-america-mineiro",
      "name": "Heitor",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "alex-america-mineiro",
      "name": "Alex",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "tobias-ostchega-america-mineiro",
      "name": "Tobías Ostchega",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "manoel-america-mineiro",
      "name": "Manoel",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luidy-america-mineiro",
      "name": "Luidy",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "fabio-america-mineiro",
      "name": "Fábio",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "filipe-dahora-america-mineiro",
      "name": "Filipe Dahora",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "thallyson-america-mineiro",
      "name": "Thallyson",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ricardo-silva-america-mineiro",
      "name": "Ricardo Silva",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-de-oliveira-da-silva-america-mineiro",
      "name": "Gabriel De Oliveira Da Silva",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "cristian-do-espirito-santo-rodrigues-america-mineiro",
      "name": "Cristian Do Espirito Santo Rodrigues",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-vinicius-da-rosa-kappel-america-mineiro",
      "name": "Pedro Vinicius Da Rosa Kappel",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rian-henrique-de-melo-rodrigues-america-mineiro",
      "name": "Rian Henrique De Melo Rodrigues",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ruan-victor-pereira-santana-america-mineiro",
      "name": "Ruan Victor Pereira Santana",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "DEF",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "fernando-elizari-america-mineiro",
      "name": "Fernando Elizari",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-domingos-america-mineiro",
      "name": "Gabriel Domingos",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "felipe-amaral-america-mineiro",
      "name": "Felipe Amaral",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ale-america-mineiro",
      "name": "Alê",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "eduardo-luiz-person-america-mineiro",
      "name": "Eduardo Luiz Person",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "julio-cesar-leme-do-nascimento-america-mineiro",
      "name": "Julio César Leme Do Nascimento",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "murilo-rodrigues-povoa-america-mineiro",
      "name": "Murilo Rodrigues Povoa",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "otavio-goncalves-america-mineiro",
      "name": "Otávio Gonçalves",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "barreto-america-mineiro",
      "name": "Barreto",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jorge-roa-america-mineiro",
      "name": "Jorge Roa",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "derick-martins-pereira-america-mineiro",
      "name": "Derick Martins Pereira",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-oliveira-santos-america-mineiro",
      "name": "Gabriel Oliveira Santos",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-felipe-campos-pereira-america-mineiro",
      "name": "Luiz Felipe Campos Pereira",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-parede-america-mineiro",
      "name": "Guilherme Parede",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "willian-america-mineiro",
      "name": "Willian",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rodrigo-pineiro-america-mineiro",
      "name": "Rodrigo Piñeiro",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gonzalo-mastriani-america-mineiro",
      "name": "Gonzalo Mastriani",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "paulo-victor-america-mineiro",
      "name": "Paulo Victor",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "italo-gabriel-charbaje-de-souza-america-mineiro",
      "name": "Italo Gabriel Charbaje De Souza",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kaique-zizero-america-mineiro",
      "name": "Kaique Zizero",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matias-segovia-america-mineiro",
      "name": "Matías Segovia",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-geovane-paranhos-santos-america-mineiro",
      "name": "Pedro Geovane Paranhos Santos",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcelo-macola-america-mineiro",
      "name": "Marcelo Maçola",
      "clubId": "america-mineiro",
      "clubName": "América Mineiro",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.golmates.com/pt/brasil/time/america-mineiro/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jhonatan-luiz-athletic-club",
      "name": "Jhonatan Luiz",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luan-polli-athletic-club",
      "name": "Luan Polli",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "glauco-athletic-club",
      "name": "Glauco",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "eduardo-freire-athletic-club",
      "name": "Eduardo Freire",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jhonatan-silva-athletic-club",
      "name": "Jhonatan Silva",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "DEF",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-belezi-athletic-club",
      "name": "Lucas Belezi",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "DEF",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-indio-athletic-club",
      "name": "Gabriel Índio",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "DEF",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "felipe-vieira-athletic-club",
      "name": "Felipe Vieira",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "DEF",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "diogo-batista-athletic-club",
      "name": "Diogo Batista",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "DEF",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "zeca-athletic-club",
      "name": "Zeca",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "DEF",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcelo-henrique-athletic-club",
      "name": "Marcelo Henrique",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "DEF",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gustavinho-athletic-club",
      "name": "Gustavinho",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ian-luccas-athletic-club",
      "name": "Ian Luccas",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "felipe-negrucci-athletic-club",
      "name": "Felipe Negrucci",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gian-cabezas-athletic-club",
      "name": "Gian Cabezas",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "eduardo-filipe-athletic-club",
      "name": "Eduardo Filipe",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "david-braga-athletic-club",
      "name": "David Braga",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kauan-lindes-athletic-club",
      "name": "Kauan Lindes",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "alexandre-pena-athletic-club",
      "name": "Alexandre Pena",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jota-athletic-club",
      "name": "Jota",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "copete-athletic-club",
      "name": "Copete",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-miguel-athletic-club",
      "name": "João Miguel",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kauan-rodrigues-athletic-club",
      "name": "Kauan Rodrigues",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-oliveira-athletic-club",
      "name": "Pedro Oliveira",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "yago-santos-athletic-club",
      "name": "Yago Santos",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "assis-athletic-club",
      "name": "Assis",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "douglas-pele-athletic-club",
      "name": "Douglas Pelé",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-fernando-athletic-club",
      "name": "Luiz Fernando",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "yarlen-athletic-club",
      "name": "Yarlen",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "dixon-vera-athletic-club",
      "name": "Dixon Vera",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "carlinhos-athletic-club",
      "name": "Carlinhos",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ronaldo-tavares-athletic-club",
      "name": "Ronaldo Tavares",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gustavao-athletic-club",
      "name": "Gustavão",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ruan-assis-athletic-club",
      "name": "Ruan Assis",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "max-athletic-club",
      "name": "Max",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-carioca-athletic-club",
      "name": "Gabriel Carioca",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leo-chu-athletic-club",
      "name": "Léo Chú",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "carlito-athletic-club",
      "name": "Carlito",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wili-aponza-athletic-club",
      "name": "Wili Aponzá",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "otusanya-athletic-club",
      "name": "Otusanya",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-moyses-athletic-club",
      "name": "Gabriel Moysés",
      "clubId": "athletic-club",
      "clubName": "Athletic Club",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/athletic-club/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wladimir-atletico-goianiense",
      "name": "Wladimir",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "GOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "paulo-vitor-atletico-goianiense",
      "name": "Paulo Vitor",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "GOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leo-atletico-goianiense",
      "name": "Léo",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "GOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "paulo-henrique-atletico-goianiense",
      "name": "Paulo Henrique",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "GOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "yuri-atletico-goianiense",
      "name": "Yuri",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "GOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "adriano-martins-atletico-goianiense",
      "name": "Adriano Martins",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "tito-atletico-goianiense",
      "name": "Tito",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nata-felipe-atletico-goianiense",
      "name": "Natã Felipe",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "junior-barreto-atletico-goianiense",
      "name": "Junior Barreto",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheus-bebeto-atletico-goianiense",
      "name": "Matheus Bebeto",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gustavo-daniel-atletico-goianiense",
      "name": "Gustavo Daniel",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-lopes-atletico-goianiense",
      "name": "Guilherme Lopes",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jampierre-atletico-goianiense",
      "name": "Jampierre",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ewerthon-atletico-goianiense",
      "name": "Ewerthon",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "felipe-guimaraes-atletico-goianiense",
      "name": "Felipe Guimarães",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kaua-henrique-atletico-goianiense",
      "name": "Kauã Henrique",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "warley-atletico-goianiense",
      "name": "Warley",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "yuri-silva-atletico-goianiense",
      "name": "Yuri Silva",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "LAT",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lima-atletico-goianiense",
      "name": "Lima",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "MEI",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "klebert-atletico-goianiense",
      "name": "Klebert",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "igor-henrique-atletico-goianiense",
      "name": "Igor Henrique",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "geovane-atletico-goianiense",
      "name": "Geovane",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-marques-atletico-goianiense",
      "name": "Guilherme Marques",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "MEI",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leandro-vilela-atletico-goianiense",
      "name": "Leandro Vilela",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "cristiano-atletico-goianiense",
      "name": "Cristiano",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "daniel-peixoto-atletico-goianiense",
      "name": "Daniel Peixoto",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "henrique-freitas-atletico-goianiense",
      "name": "Henrique Freitas",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "netinho-atletico-goianiense",
      "name": "Netinho",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "VOL",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marrony-atletico-goianiense",
      "name": "Marrony",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "MEI",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheusinho-atletico-goianiense",
      "name": "Matheusinho",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "MEI",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gustavo-maia-atletico-goianiense",
      "name": "Gustavo Maia",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "MEI",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "david-terans-atletico-goianiense",
      "name": "David Terans",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "MEI",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "bruno-jose-atletico-goianiense",
      "name": "Bruno José",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leo-tocantins-atletico-goianiense",
      "name": "Léo Tocantins",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "geovany-soares-atletico-goianiense",
      "name": "Geovany Soares",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "brenno-atletico-goianiense",
      "name": "Brenno",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-pae-atletico-goianiense",
      "name": "Gabriel Paê",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-pedro-atletico-goianiense",
      "name": "João Pedro",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kahiser-atletico-goianiense",
      "name": "Kahiser",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kaua-marley-atletico-goianiense",
      "name": "Kauã Marley",
      "clubId": "atletico-goianiense",
      "clubName": "Atlético Goianiense",
      "division": "Série B",
      "position": "ATA",
      "source": "https://atleticogoianiense.com.br/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kaua-santos-avai",
      "name": "Kauã Santos",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "MEI",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "filipinho-avai",
      "name": "Filipinho",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rildo-avai",
      "name": "Rildo",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vinicius-immig-avai",
      "name": "Vinícius Immig",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "MEI",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "caio-suassuna-avai",
      "name": "Caio Suassuna",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-cipriano-avai",
      "name": "Gabriel Cipriano",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leo-chu-avai",
      "name": "Léo Chú",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "juan-rocha-avai",
      "name": "Juan Rocha",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leo-gamalho-avai",
      "name": "Léo Gamalho",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "william-avai",
      "name": "William",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "LAT",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-vitor-avai",
      "name": "João Vitor",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "LAT",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedrao-avai",
      "name": "Pedrão",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "reynaldo-avai",
      "name": "Reynaldo",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "bruno-ferreira-avai",
      "name": "Bruno Ferreira",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "GOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "isaias-avai",
      "name": "Isaías",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wenderson-avai",
      "name": "Wenderson",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "VOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jefferson-maciel-avai",
      "name": "Jefferson Maciel",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "paulo-vitor-avai",
      "name": "Paulo Vitor",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "VOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-henrique-avai",
      "name": "Luiz Henrique",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "VOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-aquino-avai",
      "name": "Guilherme Aquino",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "hyan-avai",
      "name": "Hyan",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "VOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kevin-avai",
      "name": "Kevin",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-cuiaba-avai",
      "name": "Pedro Cuiabá",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "VOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-simples-avai",
      "name": "Gabriel Simples",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "allyson-avai",
      "name": "Allyson",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wallison-avai",
      "name": "Wallison",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "LAT",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "del-piage-avai",
      "name": "Del Piage",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "VOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "douglas-teixeira-avai",
      "name": "Douglas Teixeira",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "LAT",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "quaresma-avai",
      "name": "Quaresma",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "LAT",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ze-ricardo-avai",
      "name": "Zé Ricardo",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "VOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jean-lucas-avai",
      "name": "Jean Lucas",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "MEI",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gaspar-avai",
      "name": "Gaspar",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "ATA",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "otavio-avai",
      "name": "Otávio",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "GOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "igor-bohn-avai",
      "name": "Igor Bohn",
      "clubId": "avai",
      "clubName": "Avaí",
      "division": "Série B",
      "position": "GOL",
      "source": "https://avai.com.br/futebol/profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "victor-souza-botafogo-de-ribeirao-preto",
      "name": "Victor Souza",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jordan-botafogo-de-ribeirao-preto",
      "name": "Jordan",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "brenno-botafogo-de-ribeirao-preto",
      "name": "Brenno",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "adriano-botafogo-de-ribeirao-preto",
      "name": "Adriano",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ericson-botafogo-de-ribeirao-preto",
      "name": "Ericson",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vilar-botafogo-de-ribeirao-preto",
      "name": "Vilar",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wallace-botafogo-de-ribeirao-preto",
      "name": "Wallace",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "carlos-eduardo-botafogo-de-ribeirao-preto",
      "name": "Carlos Eduardo",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-mariano-botafogo-de-ribeirao-preto",
      "name": "Guilherme Mariano",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "darlan-botafogo-de-ribeirao-preto",
      "name": "Darlan",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "badaro-botafogo-de-ribeirao-preto",
      "name": "Badaró",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jonathan-botafogo-de-ribeirao-preto",
      "name": "Jonathan",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "patrick-brey-botafogo-de-ribeirao-preto",
      "name": "Patrick Brey",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-inocencio-botafogo-de-ribeirao-preto",
      "name": "Gabriel Inocêncio",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedrinho-botafogo-de-ribeirao-preto",
      "name": "Pedrinho",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "felipe-vieira-botafogo-de-ribeirao-preto",
      "name": "Felipe Vieira",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "henrique-teles-botafogo-de-ribeirao-preto",
      "name": "Henrique Teles",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leandro-maciel-botafogo-de-ribeirao-preto",
      "name": "Leandro Maciel",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "morelli-botafogo-de-ribeirao-preto",
      "name": "Morelli",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rafael-gava-botafogo-de-ribeirao-preto",
      "name": "Rafael Gava",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheus-sales-botafogo-de-ribeirao-preto",
      "name": "Matheus Sales",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marquinho-botafogo-de-ribeirao-preto",
      "name": "Marquinho",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marco-antonio-botafogo-de-ribeirao-preto",
      "name": "Marco Antônio",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "yuri-felipe-botafogo-de-ribeirao-preto",
      "name": "Yuri Felipe",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "thiago-moraes-botafogo-de-ribeirao-preto",
      "name": "Thiago Moraes",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ze-hugo-botafogo-de-ribeirao-preto",
      "name": "Zé Hugo",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "erik-rebello-botafogo-de-ribeirao-preto",
      "name": "Erik Rebello",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kelvin-botafogo-de-ribeirao-preto",
      "name": "Kelvin",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jefferson-nem-botafogo-de-ribeirao-preto",
      "name": "Jefferson Nem",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-queiroz-botafogo-de-ribeirao-preto",
      "name": "Guilherme Queiroz",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "arthur-caike-botafogo-de-ribeirao-preto",
      "name": "Arthur Caíke",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcio-maranhao-botafogo-de-ribeirao-preto",
      "name": "Márcio Maranhão",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jadson-botafogo-de-ribeirao-preto",
      "name": "Jadson",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luizao-botafogo-de-ribeirao-preto",
      "name": "Luizão",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wesley-santos-botafogo-de-ribeirao-preto",
      "name": "Wesley Santos",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "thalles-botafogo-de-ribeirao-preto",
      "name": "Thalles",
      "clubId": "botafogo-de-ribeirao-preto",
      "clubName": "Botafogo de Ribeirão Preto",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/botafogo-sp/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "caique-franca-ceara",
      "name": "Caíque França",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "GOL",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gustavo-martins-ceara",
      "name": "Gustavo Martins",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "GOL",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheus-nogueira-ceara",
      "name": "Matheus Nogueira",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "GOL",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "richard-ceara",
      "name": "Richard",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "GOL",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "eder-ceara",
      "name": "Éder",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "julio-cesar-ceara",
      "name": "Júlio César",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-otavio-ceara",
      "name": "Luiz Otávio",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luizao-ceara",
      "name": "Luizão",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-gilmar-ceara",
      "name": "Pedro Gilmar",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "thalisson-ceara",
      "name": "Thalisson",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "bryan-borges-ceara",
      "name": "Bryan Borges",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "LAT",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rafael-ramos-ceara",
      "name": "Rafael Ramos",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "LAT",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "sanchez-ceara",
      "name": "Sanchez",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "LAT",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "savio-ceara",
      "name": "Sávio",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "LAT",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "giovanni-pavani-ceara",
      "name": "Giovanni Pavani",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "MEI",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-gabriel-ceara",
      "name": "João Gabriel",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "MEI",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-mugni-ceara",
      "name": "Lucas Mugni",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "MEI",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheus-araujo-ceara",
      "name": "Matheus Araújo",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "MEI",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-esli-ceara",
      "name": "Pedro Esli",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "MEI",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "richardson-ceara",
      "name": "Richardson",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "VOL",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vina-ceara",
      "name": "Vina",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "MEI",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vinicius-zanocelo-ceara",
      "name": "Vinicius Zanocelo",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "VOL",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "enzo-lodovico-ceara",
      "name": "Enzo Lodovico",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-amaral-ceara",
      "name": "Gabriel Amaral",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lenny-lobato-ceara",
      "name": "Lenny Lobato",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucca-ceara",
      "name": "Lucca",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nico-ferreira-ceara",
      "name": "Nico Ferreira",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "renzo-lopez-ceara",
      "name": "Renzo López",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rian-santana-ceara",
      "name": "Rian Santana",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "saulo-mineiro-ceara",
      "name": "Saulo Mineiro",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wendel-silva-ceara",
      "name": "Wendel Silva",
      "clubId": "ceara",
      "clubName": "Ceará",
      "division": "Série B",
      "position": "ATA",
      "source": "https://midia.cearasc.com/elenco/Profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "fabio-crb",
      "name": "Fábio",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "GOL",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheus-crb",
      "name": "Matheus",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "GOL",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pablo-crb",
      "name": "Pablo",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "GOL",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vitor-caetano-crb",
      "name": "Vitor Caetano",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "GOL",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "anderson-crb",
      "name": "Anderson",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "bressan-crb",
      "name": "Bressan",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "fabio-alemao-crb",
      "name": "Fábio Alemão",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "heitor-brissantt-crb",
      "name": "Heitor Brissantt",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "henri-crb",
      "name": "Henri",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kevin-crb",
      "name": "Kevin",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lyncon-crb",
      "name": "Lyncon",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ruy-crb",
      "name": "Ruy",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wallace-crb",
      "name": "Wallace",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "hereda-crb",
      "name": "Hereda",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "LAT",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leo-campos-crb",
      "name": "Léo Campos",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "LAT",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-lovat-crb",
      "name": "Lucas Lovat",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "LAT",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "carlos-avila-crb",
      "name": "Carlos Avila",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "caua-carvalho-crb",
      "name": "Cauã Carvalho",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "daniel-crb",
      "name": "Daniel",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "david-braw-crb",
      "name": "David Braw",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "de-lucca-crb",
      "name": "De Lucca",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "VOL",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "e-mecena-crb",
      "name": "E. Mecena",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "geovane-crb",
      "name": "Geovane",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-estrella-crb",
      "name": "Guilherme Estrella",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luizao-crb",
      "name": "Luizão",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "maycon-crb",
      "name": "Maycon",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "VOL",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-castro-crb",
      "name": "Pedro Castro",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rian-crb",
      "name": "Rian",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "thiaguinho-crb",
      "name": "Thiaguinho",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "MEI",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "anthony-crb",
      "name": "Anthony",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "cipriano-sampaio-crb",
      "name": "Cipriano Sampaio",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "douglas-baggio-crb",
      "name": "Douglas Baggio",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-crb",
      "name": "Guilherme",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-pato-crb",
      "name": "Guilherme Pato",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "hiago-crb",
      "name": "Hiago",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-neto-crb",
      "name": "João Neto",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-phellype-crb",
      "name": "Luiz Phellype",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vinicius-barata-crb",
      "name": "Vinicius Barata",
      "clubId": "crb",
      "clubName": "CRB",
      "division": "Série B",
      "position": "ATA",
      "source": "https://tudosobrefutebol.com.br/club/crb",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "alisson-criciuma",
      "name": "Alisson",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "GOL",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "airton-criciuma",
      "name": "Airton",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "GOL",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-criciuma",
      "name": "Pedro",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "GOL",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rodrigo-criciuma",
      "name": "Rodrigo",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "castan-criciuma",
      "name": "Castán",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "cesar-martins-criciuma",
      "name": "César Martins",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "bruno-alves-criciuma",
      "name": "Bruno Alves",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "romulo-junior-criciuma",
      "name": "Rômulo Júnior",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "octavio-criciuma",
      "name": "Octávio",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ruan-criciuma",
      "name": "Ruan",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcelo-hermes-criciuma",
      "name": "Marcelo Hermes",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "LAT",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcinho-criciuma",
      "name": "Marcinho",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "LAT",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "hiago-criciuma",
      "name": "Hiago",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "LAT",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "willean-lepo-criciuma",
      "name": "Willean Lepo",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "LAT",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gui-lobo-criciuma",
      "name": "Gui Lobo",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "VOL",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jean-irmer-criciuma",
      "name": "Jean Irmer",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "VOL",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ronald-criciuma",
      "name": "Ronald",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "VOL",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "thiaguinho-criciuma",
      "name": "Thiaguinho",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "VOL",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "eduardo-criciuma",
      "name": "Eduardo",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "MEI",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jhonata-robert-criciuma",
      "name": "Jhonata Robert",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "MEI",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "otero-criciuma",
      "name": "Otero",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "MEI",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "waguininho-criciuma",
      "name": "Waguininho",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ATA",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nicolas-criciuma",
      "name": "Nicolas",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ATA",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "diego-goncalves-criciuma",
      "name": "Diego Gonçalves",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ATA",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "yuri-tanque-criciuma",
      "name": "Yuri Tanque",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ATA",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "romarinho-criciuma",
      "name": "Romarinho",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ATA",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "caue-criciuma",
      "name": "Cauê",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ATA",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-carlos-criciuma",
      "name": "João Carlos",
      "clubId": "criciuma",
      "clubName": "Criciúma",
      "division": "Série B",
      "position": "ATA",
      "source": "https://criciuma.com.br/imprensa/servico-de-jogo/ficha/equipes/elenco-profissional",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-carlos-cuiaba",
      "name": "João Carlos",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gustavo-busatto-cuiaba",
      "name": "Gustavo Busatto",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jean-carlos-cuiaba",
      "name": "Jean Carlos",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcelo-carne-cuiaba",
      "name": "Marcelo Carné",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luis-soares-cuiaba",
      "name": "Luís Soares",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "alan-empereur-cuiaba",
      "name": "Alan Empereur",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vitor-mendes-cuiaba",
      "name": "Vitor Mendes",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-basso-cuiaba",
      "name": "João Basso",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "igor-inocencio-cuiaba",
      "name": "Igor Inocêncio",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "LAT",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "raylan-cuiaba",
      "name": "Raylan",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "LAT",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "eric-melo-cuiaba",
      "name": "Eric Melo",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "LAT",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lorenzo-cuiaba",
      "name": "Lorenzo",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "LAT",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "calebe-cuiaba",
      "name": "Calebe",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "VOL",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "weverson-cuiaba",
      "name": "Weverson",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "VOL",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wesley-dias-cuiaba",
      "name": "Wesley Dias",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "VOL",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-otavio-cuiaba",
      "name": "Luiz Otávio",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "david-miguel-cuiaba",
      "name": "David Miguel",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pepe-cuiaba",
      "name": "Pepê",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "raul-cuiaba",
      "name": "Raul",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "eliel-cuiaba",
      "name": "Eliel",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kauan-cristtyan-cuiaba",
      "name": "Kauan Cristtyan",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcos-junior-cuiaba",
      "name": "Marcos Júnior",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "peixoto-cuiaba",
      "name": "Peixoto",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jean-dias-cuiaba",
      "name": "Jean Dias",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-henrique-cuiaba",
      "name": "Pedro Henrique",
      "clubId": "cuiaba",
      "clubName": "Cuiabá",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cuiabaesporteclube.com.br/futebol/5/time-profissional/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-ricardo-fortaleza",
      "name": "João Ricardo",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "GOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "vinicius-silvestre-fortaleza",
      "name": "Vinícius Silvestre",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "GOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "magrao-fortaleza",
      "name": "Magrão",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "GOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "cassio-fortaleza",
      "name": "Cássio",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "GOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "neris-fortaleza",
      "name": "Neris",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "britez-fortaleza",
      "name": "Brítez",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-gazal-fortaleza",
      "name": "Lucas Gazal",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luan-freitas-fortaleza",
      "name": "Luan Freitas",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "tomas-cardona-fortaleza",
      "name": "Tomás Cardona",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kaua-rocha-fortaleza",
      "name": "Kauã Rocha",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "mauricio-mucuri-fortaleza",
      "name": "Maurício Mucuri",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "LAT",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-fuentes-fortaleza",
      "name": "Gabriel Fuentes",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "LAT",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "paulinho-fortaleza",
      "name": "Paulinho",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "LAT",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kaio-henrique-fortaleza",
      "name": "Kaio Henrique",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "LAT",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pierre-fortaleza",
      "name": "Pierre",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pochettino-fortaleza",
      "name": "Pochettino",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "MEI",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ronald-fortaleza",
      "name": "Ronald",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-crispim-fortaleza",
      "name": "Lucas Crispim",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "MEI",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-emanoel-fortaleza",
      "name": "Lucas Emanoel",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "MEI",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "matheus-rossetto-fortaleza",
      "name": "Matheus Rossetto",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jailson-fortaleza",
      "name": "Jailson",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rodrigo-santos-fortaleza",
      "name": "Rodrigo Santos",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "bruninho-fortaleza",
      "name": "Bruninho",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ryan-fortaleza",
      "name": "Ryan",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucca-prior-fortaleza",
      "name": "Lucca Prior",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "MEI",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rodriguinho-fortaleza",
      "name": "Rodriguinho",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "MEI",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-sasha-fortaleza",
      "name": "Lucas Sasha",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "VOL",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "miritello-fortaleza",
      "name": "Miritello",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-henrique-fortaleza",
      "name": "Pedro Henrique",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nathan-fogaca-fortaleza",
      "name": "Nathan Fogaça",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gb-fortaleza",
      "name": "GB",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "juan-cantillo-fortaleza",
      "name": "Juan Cantillo",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "welliton-fortaleza",
      "name": "Welliton",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-fernando-fortaleza",
      "name": "Luiz Fernando",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "paulo-baya-fortaleza",
      "name": "Paulo Baya",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "chico-da-costa-fortaleza",
      "name": "Chico da Costa",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kayke-queiroz-fortaleza",
      "name": "Kayke Queiroz",
      "clubId": "fortaleza",
      "clubName": "Fortaleza",
      "division": "Série B",
      "position": "ATA",
      "source": "https://fortaleza1918.com.br/elenco/",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rodrigo-soares-goias",
      "name": "Rodrigo Soares",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "LAT",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "brayann-goias",
      "name": "Brayann",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ezequiel-goias",
      "name": "Ezequiel",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wellington-rato-goias",
      "name": "Wellington Rato",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "tadeu-goias",
      "name": "Tadeu",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "murilo-goias",
      "name": "Murilo",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luiz-felipe-goias",
      "name": "Luiz Felipe",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "geirton-goias",
      "name": "Geirton",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jean-carlos-goias",
      "name": "Jean Carlos",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-fernandes-goias",
      "name": "Lucas Fernandes",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nicolas-goias",
      "name": "Nicolas",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "LAT",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ramon-menezes-goias",
      "name": "Ramon Menezes",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "djalma-goias",
      "name": "Djalma",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "willie-goias",
      "name": "Willie",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "julio-gouvea-goias",
      "name": "Júlio Gouvea",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "guilherme-baldoria-goias",
      "name": "Guilherme Baldória",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "VOL",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcos-vinicius-goias",
      "name": "Marcos Vinicius",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "thiago-rodrigues-goias",
      "name": "Thiago Rodrigues",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "GOL",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "cadu-goias",
      "name": "Cadu",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "esli-garcia-goias",
      "name": "Esli Garcia",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pablo-goias",
      "name": "Pablo",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-lima-goias",
      "name": "Lucas Lima",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-ribeiro-goias",
      "name": "Lucas Ribeiro",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedrinho-goias",
      "name": "Pedrinho",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "filipe-machado-goias",
      "name": "Filipe Machado",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "VOL",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "juninho-goias",
      "name": "Juninho",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "VOL",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "fonseca-goias",
      "name": "Fonseca",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "hygor-goias",
      "name": "Hygor",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "assis-goias",
      "name": "Assis",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-guilherme-goias",
      "name": "João Guilherme",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lourenco-goias",
      "name": "Lourenço",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "MEI",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "halerrandrio-goias",
      "name": "Halerrandrio",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "ATA",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-rodrigues-goias",
      "name": "Lucas Rodrigues",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "VOL",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "danilo-goias",
      "name": "Danilo",
      "clubId": "goias",
      "clubName": "Goiás",
      "division": "Série B",
      "position": "LAT",
      "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20028",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pedro-rocha-juventude",
      "name": "Pedro Rocha",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ruan-carneiro-juventude",
      "name": "Ruan Carneiro",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "jandrei-juventude",
      "name": "Jandrei",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "GOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "titi-juventude",
      "name": "Titi",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "messias-juventude",
      "name": "Messias",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rodrigo-sam-juventude",
      "name": "Rodrigo Sam",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "marcos-paulo-juventude",
      "name": "Marcos Paulo",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-pinheiro-juventude",
      "name": "Gabriel Pinheiro",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ZAG",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "aderlan-juventude",
      "name": "Aderlan",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "patryck-juventude",
      "name": "Patryck",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rai-ramos-juventude",
      "name": "Raí Ramos",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "wadson-juventude",
      "name": "Wadson",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "diogo-barbosa-juventude",
      "name": "Diogo Barbosa",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "nathan-santos-juventude",
      "name": "Nathan Santos",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "LAT",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luan-martins-juventude",
      "name": "Luan Martins",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "pablo-roberto-juventude",
      "name": "Pablo Roberto",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-mineiro-juventude",
      "name": "Lucas Mineiro",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "leo-indio-juventude",
      "name": "Léo Índio",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "iba-ly-juventude",
      "name": "Iba Ly",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "ray-breno-juventude",
      "name": "Ray Breno",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-pires-juventude",
      "name": "Gabriel Pires",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luis-mandaca-juventude",
      "name": "Luis Mandaca",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "kaynan-juventude",
      "name": "Kaynan",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "rai-silva-juventude",
      "name": "Raí Silva",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "MEI",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "davi-goes-juventude",
      "name": "Davi Góes",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "VOL",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "alan-kardec-juventude",
      "name": "Alan Kardec",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "mp-juventude",
      "name": "MP",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "fabio-lima-juventude",
      "name": "Fábio Lima",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "manuel-castro-juventude",
      "name": "Manuel Castro",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "luis-amarilla-juventude",
      "name": "Luis Amarilla",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "gabriel-taliari-juventude",
      "name": "Gabriel Taliari",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "allanzinho-juventude",
      "name": "Allanzinho",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "carlinhos-juventude",
      "name": "Carlinhos",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "juan-christian-juventude",
      "name": "Juan Christian",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "lucas-alves-juventude",
      "name": "Lucas Alves",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    },
  {
      "id": "joao-scatolin-juventude",
      "name": "João Scatolin",
      "clubId": "juventude",
      "clubName": "Juventude",
      "division": "Série B",
      "position": "ATA",
      "source": "https://esportes.portalinside.com/time/juventude/elenco",
      "verifiedAt": "2026-11-08"
    }
,
  {
    "id": "mauricio-kozlinski-londrina",
    "name": "Maurício Kozlinski",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luan-ribeiro-londrina",
    "name": "Luan Ribeiro",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "thiago-parente-londrina",
    "name": "Thiago Parente",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "eduardo-zanella-londrina",
    "name": "Eduardo Zanella",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "andre-dhominique-londrina",
    "name": "André Dhominique",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kevyn-londrina",
    "name": "Kevyn",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-monteiro-londrina",
    "name": "Rafael Monteiro",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caio-londrina",
    "name": "Caio",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-lacerda-londrina",
    "name": "Gabriel Lacerda",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "heron-londrina",
    "name": "Heron",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "wallace-londrina",
    "name": "Wallace",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "yago-lincoln-londrina",
    "name": "Yago Lincoln",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "yuri-lima-londrina",
    "name": "Yuri Lima",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "andre-cardoso-londrina",
    "name": "André Cardoso",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "andre-luiz-londrina",
    "name": "André Luiz",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabiano-londrina",
    "name": "Fabiano",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-tavares-londrina",
    "name": "João Tavares",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-marques-londrina",
    "name": "Lucas Marques",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "murilo-chico-londrina",
    "name": "Murilo Chico",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "chumbinho-londrina",
    "name": "Chumbinho",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caio-maia-londrina",
    "name": "Caio Maia",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabricio-londrina",
    "name": "Fabrício",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gilberto-londrina",
    "name": "Gilberto",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "iago-teles-londrina",
    "name": "Iago Teles",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "juninho-londrina",
    "name": "Juninho",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "paulinho-moccelin-londrina",
    "name": "Paulinho Moccelin",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vitinho-londrina",
    "name": "Vitinho",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vitor-jacare-londrina",
    "name": "Vitor Jacaré",
    "clubId": "londrina",
    "clubName": "Londrina",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.londrinaesporteclube.com.br/futebol/profissional/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gaston-guruceaga-nautico",
    "name": "Gastón Guruceaga",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "GOL",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "muriel-nautico",
    "name": "Muriel",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "GOL",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "betao-nautico",
    "name": "Betão",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavo-henrique-nautico",
    "name": "Gustavo Henrique",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igor-fernandes-nautico",
    "name": "Igor Fernandes",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-indio-nautico",
    "name": "Léo Índio",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mateus-silva-nautico",
    "name": "Mateus Silva",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "wanderson-nautico",
    "name": "Wanderson",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "arnaldo-nautico",
    "name": "Arnaldo",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "LAT",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emanuel-nautico",
    "name": "Emanuel",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "LAT",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-ribeiro-nautico",
    "name": "Matheus Ribeiro",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "LAT",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "reginaldo-nautico",
    "name": "Reginaldo",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "LAT",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luiz-paulo-nautico",
    "name": "Luiz Paulo",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "LAT",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-jance-nautico",
    "name": "Léo Jance",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "LAT",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ryan-carlos-nautico",
    "name": "Ryan Carlos",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "LAT",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "auremir-nautico",
    "name": "Auremir",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "VOL",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "halanzinho-nautico",
    "name": "Halanzinho",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "VOL",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luiz-felipe-nautico",
    "name": "Luiz Felipe",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "VOL",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "samuel-nautico",
    "name": "Samuel",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "VOL",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "wenderson-nautico",
    "name": "Wenderson",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "VOL",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jean-carlos-nautico",
    "name": "Jean Carlos",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "MEI",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pato-nunez-nautico",
    "name": "Pato Nuñez",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "MEI",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "felipe-redaelli-nautico",
    "name": "Felipe Redaelli",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "MEI",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "danielzinho-nautico",
    "name": "Danielzinho",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "derek-nautico",
    "name": "Derek",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "benjamin-borasi-nautico",
    "name": "Benjamín Borasi",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "junior-todinho-nautico",
    "name": "Junior Todinho",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kaua-maranhao-nautico",
    "name": "Kauã Maranhão",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luiz-claudio-nautico",
    "name": "Luiz Claudio",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "paulo-sergio-nautico",
    "name": "Paulo Sérgio",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rosa-nautico",
    "name": "Rosa",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "victor-andrade-nautico",
    "name": "Victor Andrade",
    "clubId": "nautico",
    "clubName": "Náutico",
    "division": "Série B",
    "position": "ATA",
    "source": "https://clubenauticocapibaribe.com.br/elenco",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-ribeiro-novorizontino",
    "name": "Lucas Ribeiro",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "GOL",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-scapin-novorizontino",
    "name": "João Scapin",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "GOL",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "paulo-fagundes-novorizontino",
    "name": "Paulo Fagundes",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "GOL",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "cesar-novorizontino",
    "name": "César",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "GOL",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jordi-novorizontino",
    "name": "Jordi",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "GOL",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "madson-novorizontino",
    "name": "Madson",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "LAT",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "carlinhos-novorizontino",
    "name": "Carlinhos",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "patrick-novorizontino",
    "name": "Patrick",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "sander-novorizontino",
    "name": "Sander",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "LAT",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "eduardo-brock-novorizontino",
    "name": "Eduardo Brock",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "k-alemao-novorizontino",
    "name": "K. Alemão",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "a-alvarino-novorizontino",
    "name": "A. Alvariño",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "j-lora-novorizontino",
    "name": "J. Lora",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "bruninho-novorizontino",
    "name": "Bruninho",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "renato-novorizontino",
    "name": "Renato",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mayk-novorizontino",
    "name": "Mayk",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "LAT",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luis-oyama-novorizontino",
    "name": "Luis Oyama",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "VOL",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "c-ortiz-novorizontino",
    "name": "C. Ortíz",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "MEI",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diego-galo-novorizontino",
    "name": "Diego Galo",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "MEI",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luiz-gabriel-novorizontino",
    "name": "Luiz Gabriel",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "MEI",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "dantas-novorizontino",
    "name": "Dantas",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "VOL",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-bahia-novorizontino",
    "name": "Gabriel Bahia",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "juninho-novorizontino",
    "name": "Juninho",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "MEI",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "tavinho-novorizontino",
    "name": "Tavinho",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "MEI",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "tiago-novorizontino",
    "name": "Tiago",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "MEI",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "airton-novorizontino",
    "name": "Airton",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caio-dantas-novorizontino",
    "name": "Caio Dantas",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "carlao-novorizontino",
    "name": "Carlão",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diego-mathias-novorizontino",
    "name": "Diego Mathias",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "helio-borges-novorizontino",
    "name": "Hélio Borges",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "reidiney-novorizontino",
    "name": "Reidiney",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ronald-barcellos-novorizontino",
    "name": "Ronald Barcellos",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vinicius-novorizontino",
    "name": "Vinícius",
    "clubId": "novorizontino",
    "clubName": "Novorizontino",
    "division": "Série B",
    "position": "ATA",
    "source": "https://keplerquant.com/pt-br/clubs/novorizontino/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vagner-operario-ferroviario",
    "name": "Vagner",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pablo-operario-ferroviario",
    "name": "Pablo",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-trindade-operario-ferroviario",
    "name": "Matheus Trindade",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "charles-operario-ferroviario",
    "name": "Charles",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "paraiba-operario-ferroviario",
    "name": "Paraíba",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "moraes-operario-ferroviario",
    "name": "Moraes",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "maguinho-operario-ferroviario",
    "name": "Maguinho",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "bruno-operario-ferroviario",
    "name": "Bruno",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "aylon-operario-ferroviario",
    "name": "Aylon",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "klaus-operario-ferroviario",
    "name": "Klaus",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "elias-operario-ferroviario",
    "name": "Elias",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caio-operario-ferroviario",
    "name": "Caio",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-boschilia-operario-ferroviario",
    "name": "Gabriel Boschilia",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "talles-operario-ferroviario",
    "name": "Talles",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joseph-mauricio-operario-ferroviario",
    "name": "Joseph Mauricio",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "maranhao-operario-ferroviario",
    "name": "Maranhão",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "wendell-operario-ferroviario",
    "name": "Wendell",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "dudu-operario-ferroviario",
    "name": "Dudu",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedrinho-operario-ferroviario",
    "name": "Pedrinho",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "brenno-operario-ferroviario",
    "name": "Brenno",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "samuel-operario-ferroviario",
    "name": "Samuel",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mikael-operario-ferroviario",
    "name": "Mikael",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igor-fernandes-operario-ferroviario",
    "name": "Igor Fernandes",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "zuluaga-operario-ferroviario",
    "name": "Zuluaga",
    "clubId": "operario-ferroviario",
    "clubName": "Operário Ferroviário",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20106",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "william-ponte-preta",
    "name": "William",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "GOL",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-rocha-ponte-preta",
    "name": "Pedro Rocha",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "GOL",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luan-ribeiro-ponte-preta",
    "name": "Luan Ribeiro",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "GOL",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "guilherme-vianna-ponte-preta",
    "name": "Guilherme Vianna",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "GOL",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joilson-ponte-preta",
    "name": "Joilson",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "edson-ponte-preta",
    "name": "Edson",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "castro-ponte-preta",
    "name": "Castro",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luis-haquin-ponte-preta",
    "name": "Luís Haquín",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mateus-silva-ponte-preta",
    "name": "Mateus Silva",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nilson-junior-ponte-preta",
    "name": "Nilson Júnior",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "sergio-raphael-ponte-preta",
    "name": "Sérgio Raphael",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-risso-patron-ponte-preta",
    "name": "Gabriel Risso Patrón",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "LAT",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "guilherme-nicolodi-ponte-preta",
    "name": "Guilherme Nicolodi",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "LAT",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-gabriel-ponte-preta",
    "name": "João Gabriel",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "LAT",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luiz-felipe-ponte-preta",
    "name": "Luiz Felipe",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "LAT",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diego-domene-ponte-preta",
    "name": "Diego Domene",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "MEI",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diogo-mora-ponte-preta",
    "name": "Diogo Mora",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "MEI",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "elvis-ponte-preta",
    "name": "Elvis",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "MEI",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emerson-ponte-preta",
    "name": "Emerson",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "VOL",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emerson-santos-ponte-preta",
    "name": "Emerson Santos",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "VOL",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kaue-ponte-preta",
    "name": "Kauê",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "MEI",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ramon-carvalho-ponte-preta",
    "name": "Ramon Carvalho",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "MEI",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "everton-brito-ponte-preta",
    "name": "Everton Brito",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ATA",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "iago-dias-ponte-preta",
    "name": "Iago Dias",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ATA",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jeh-ponte-preta",
    "name": "Jeh",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ATA",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lua-rodrigues-ponte-preta",
    "name": "Luã Rodrigues",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ATA",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-regis-ponte-preta",
    "name": "Matheus Régis",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ATA",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "renato-ponte-preta",
    "name": "Renato",
    "clubId": "ponte-preta",
    "clubName": "Ponte Preta",
    "division": "Série B",
    "position": "ATA",
    "source": "https://pontepreta.com.br/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jr-oliveira-sao-bernardo",
    "name": "Jr. Oliveira",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "GOL",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "alex-alves-sao-bernardo",
    "name": "Alex Alves",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "GOL",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rodrigo-ferreira-sao-bernardo",
    "name": "Rodrigo Ferreira",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "LAT",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mario-sergio-sao-bernardo",
    "name": "Mário Sérgio",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "LAT",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "hugo-sanches-sao-bernardo",
    "name": "Hugo Sanches",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "LAT",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "para-sao-bernardo",
    "name": "Pará",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "LAT",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "helder-sao-bernardo",
    "name": "Helder",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "augusto-sao-bernardo",
    "name": "Augusto",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-salustiano-sao-bernardo",
    "name": "Matheus Salustiano",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pablo-sao-bernardo",
    "name": "Pablo",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "junior-urso-sao-bernardo",
    "name": "Júnior Urso",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "VOL",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marcao-sao-bernardo",
    "name": "Marcão",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "VOL",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "foguinho-sao-bernardo",
    "name": "Foguinho",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "MEI",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "romisson-sao-bernardo",
    "name": "Romisson",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "VOL",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-paulo-sao-bernardo",
    "name": "João Paulo",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "MEI",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabricio-daniel-sao-bernardo",
    "name": "Fabrício Daniel",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "neto-costa-sao-bernardo",
    "name": "Neto Costa",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-vitor-sao-bernardo",
    "name": "Pedro Vitor",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-rian-sao-bernardo",
    "name": "Lucas Rian",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "victor-andrade-sao-bernardo",
    "name": "Victor Andrade",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "echapora-sao-bernardo",
    "name": "Echaporã",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "felipe-garcia-sao-bernardo",
    "name": "Felipe Garcia",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-reis-sao-bernardo",
    "name": "Lucas Reis",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ATA",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "anderson-para-sao-bernardo",
    "name": "Anderson Pará",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "LAT",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-pedro-sao-bernardo",
    "name": "João Pedro",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "LAT",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "w-manzoli-sao-bernardo",
    "name": "W. Manzoli",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luizao-sao-bernardo",
    "name": "Luizão",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jemerson-sao-bernardo",
    "name": "Jemerson",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "hyoran-sao-bernardo",
    "name": "Hyoran",
    "clubId": "sao-bernardo",
    "clubName": "São Bernardo",
    "division": "Série B",
    "position": "MEI",
    "source": "https://saobernardofutebolclube.com.br/elenco.php",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "dalberson-vila-nova",
    "name": "Dalberson",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "helton-vila-nova",
    "name": "Helton",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caio-marcelo-vila-nova",
    "name": "Caio Marcelo",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "anderson-jesus-vila-nova",
    "name": "Anderson Jesus",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "breno-bora-vila-nova",
    "name": "Breno Bora",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-vila-nova",
    "name": "Rafael",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-vieira-vila-nova",
    "name": "João Vieira",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-vila-nova",
    "name": "Lucas",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "bruno-vila-nova",
    "name": "Bruno",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marquinhos-gabriel-vila-nova",
    "name": "Marquinhos Gabriel",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavo-lemos-vila-nova",
    "name": "Gustavo Lemos",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "willian-maranhao-vila-nova",
    "name": "Willian Maranhão",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ryan-vila-nova",
    "name": "Ryan",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igor-carius-vila-nova",
    "name": "Igor Carius",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-dias-vila-nova",
    "name": "Gabriel Dias",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "LAT",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "higor-vila-nova",
    "name": "Higor",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caique-vila-nova",
    "name": "Caíque",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "samuel-vila-nova",
    "name": "Samuel",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emerson-vila-nova",
    "name": "Emerson",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-atila-vila-nova",
    "name": "Gabriel Átila",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "dudu-vila-nova",
    "name": "Dudu",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kerlon-vila-nova",
    "name": "Kerlon",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "willian-vila-nova",
    "name": "Willian",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "weverton-vila-nova",
    "name": "Weverton",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "enzo-vila-nova",
    "name": "Enzo",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "tiago-pagnussat-vila-nova",
    "name": "Tiago Pagnussat",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nathan-camargo-vila-nova",
    "name": "Nathan Camargo",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-romano-vila-nova",
    "name": "Pedro Romano",
    "clubId": "vila-nova",
    "clubName": "Vila Nova",
    "division": "Série B",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/times/campeonato-brasileiro/serie-b/2026/20079",
    "verifiedAt": "2026-11-08"
  }
,
  {
    "id": "axel-bernardes-lopes-amazonas",
    "name": "Axel Bernardes Lopes",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "GOL",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-vitor-lopes-da-silva-amazonas",
    "name": "João Vitor Lopes da Silva",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "GOL",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lube-victor-amazonas",
    "name": "Lube Victor",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "GOL",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "renan-dos-santos-amazonas",
    "name": "Renan dos Santos",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "GOL",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "alyson-vinicius-almeida-neves-amazonas",
    "name": "Alyson Vinicius Almeida Neves",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "LAT",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "neuciano-de-jesus-gusmao-amazonas",
    "name": "Neuciano de Jesus Gusmão",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "LAT",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diego-ivo-pires-amazonas",
    "name": "Diego Ivo Pires",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabiano-da-silva-souza-amazonas",
    "name": "Fabiano da Silva Souza",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "geuvanio-santos-silva-amazonas",
    "name": "Geuvânio Santos Silva",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "italo-silva-amazonas",
    "name": "Italo Silva",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "iury-de-oliveira-nascimento-amazonas",
    "name": "Iury de Oliveira Nascimento",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "LAT",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jackson-de-souza-amazonas",
    "name": "Jackson de Souza",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joilson-de-jesus-cardoso-amazonas",
    "name": "Joilson de Jesus Cardoso",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jonas-amazonas",
    "name": "Jonas",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kauan-firmo-amazonas",
    "name": "Kauan Firmo",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "l-abbade-amazonas",
    "name": "L. Abbade",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marcondes-de-jesus-santos-junior-amazonas",
    "name": "Marcondes de Jesus Santos Junior",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-furlan-soares-amazonas",
    "name": "Rafael Furlan Soares",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "LAT",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "raylison-amazonas",
    "name": "Raylison",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "LAT",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "carlinhos-amazonas",
    "name": "Carlinhos",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabio-alexander-freitas-de-almeida-amazonas",
    "name": "Fabio Alexander Freitas de Almeida",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "guga-amazonas",
    "name": "Guga",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jhonny-lucas-flora-barbosa-amazonas",
    "name": "Jhonny Lucas Flora Barbosa",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "VOL",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "p-campos-amazonas",
    "name": "P. Campos",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-castro-amazonas",
    "name": "Pedro Castro",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-aparecido-de-paulo-tavares-amazonas",
    "name": "Rafael Aparecido de Paulo Tavares",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "riquelme-amazonas",
    "name": "Riquelme",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "y-mena-amazonas",
    "name": "Y. Mena",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "VOL",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "adrien-graffin-amazonas",
    "name": "Adrien Graffin",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "bernardo-daciolo-amazonas",
    "name": "Bernardo Daciolo",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marcelo-cirino-da-silva-amazonas",
    "name": "Marcelo Cirino da Silva",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ronaldo-henrique-silva-amazonas",
    "name": "Ronaldo Henrique Silva",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ronan-amazonas",
    "name": "Ronan",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vinicius-leite-silva-amazonas",
    "name": "Vinícius Leite Silva",
    "clubId": "amazonas",
    "clubName": "Amazonas",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/10862/amazonas",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "b-araujo-silva-anapolis",
    "name": "B. Araujo Silva",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-ribeiro-anapolis",
    "name": "Gabriel Ribeiro",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marcio-defendi-anapolis",
    "name": "Marcio Defendi",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ravel-pelegrini-anapolis",
    "name": "Ravel Pelegrini",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "victor-hugo-anapolis",
    "name": "Victor Hugo",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ygor-anapolis",
    "name": "Ygor",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "darlisson-anapolis",
    "name": "Darlisson",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "helder-anapolis",
    "name": "Helder",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igor-souza-anapolis",
    "name": "Igor Souza",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "julio-cesar-anapolis",
    "name": "Julio Cesar",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kaik-anapolis",
    "name": "Kaik",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kauan-martins-anapolis",
    "name": "Kauan Martins",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leonan-anapolis",
    "name": "Leonan",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mayron-anapolis",
    "name": "Mayron",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-costa-anapolis",
    "name": "Rafael Costa",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "robson-reis-anapolis",
    "name": "Robson Reis",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rubinho-anapolis",
    "name": "Rubinho",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "felipe-alves-anapolis",
    "name": "Felipe Alves",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gharib-anapolis",
    "name": "Gharib",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "giva-anapolis",
    "name": "Giva",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "guilherme-kauan-anapolis",
    "name": "Guilherme Kauan",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-borim-anapolis",
    "name": "Joao Borim",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "juninho-anapolis",
    "name": "Juninho",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-kallyel-anapolis",
    "name": "Lucas Kallyel",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-mila-anapolis",
    "name": "Lucas Mila",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luiz-felipe-anapolis",
    "name": "Luiz Felipe",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "patrick-anapolis",
    "name": "Patrick",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "samuel-anapolis",
    "name": "Samuel",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vinicius-lucas-anapolis",
    "name": "Vinicius Lucas",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vitinho-anapolis",
    "name": "Vitinho",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fernandinho-anapolis",
    "name": "Fernandinho",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fernando-viana-anapolis",
    "name": "Fernando Viana",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gonzalo-fornari-anapolis",
    "name": "Gonzalo Fornari",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavo-henrique-anapolis",
    "name": "Gustavo Henrique",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-lagoa-anapolis",
    "name": "Matheus Lagoa",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rodriguinho-anapolis",
    "name": "Rodriguinho",
    "clubId": "anapolis",
    "clubName": "Anápolis",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/anapolis",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ewerton-barra",
    "name": "Ewerton",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabian-volpi-barra",
    "name": "Fabian Volpi",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-vinicius-barra",
    "name": "João Vinícius",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavo-dalmina-barra",
    "name": "Gustavo Dalmina",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jean-pierre-barra",
    "name": "Jean Pierre",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "everton-alemao-barra",
    "name": "Everton Alemão",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vava-barra",
    "name": "Vavá",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vitao-barra",
    "name": "Vitão",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-jesus-barra",
    "name": "Gabriel Jesus",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jackson-barra",
    "name": "Jackson",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "thiago-barra",
    "name": "Thiago",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kayque-barra",
    "name": "Kayque",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabio-barra",
    "name": "Fábio",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-duarte-barra",
    "name": "Léo Duarte",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "guilherme-lazaroni-barra",
    "name": "Guilherme Lazaroni",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "da-rocha-barra",
    "name": "Da Rocha",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pecanha-barra",
    "name": "Peçanha",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "augusto-barra",
    "name": "Augusto",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "tete-barra",
    "name": "Tetê",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "natan-barra",
    "name": "Natan",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pablo-gabriel-barra",
    "name": "Pablo Gabriel",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "dionathan-barra",
    "name": "Dionathan",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "elvinho-barra",
    "name": "Elvinho",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "warley-barra",
    "name": "Warley",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "cleo-silva-barra",
    "name": "Cléo Silva",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-silva-barra",
    "name": "Gabriel Silva",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "bernabe-barra",
    "name": "Bernabé",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "saymon-barra",
    "name": "Saymon",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nicolas-barra",
    "name": "Nicolas",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-vargas-barra",
    "name": "Lucas Vargas",
    "clubId": "barra",
    "clubName": "Barra",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.barrafc.com.br/elenco-profissional",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "paulo-gianezini-brusque",
    "name": "Paulo Gianezini",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-nogueira-brusque",
    "name": "Matheus Nogueira",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jose-vinicius-brusque",
    "name": "José Vinícius",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-maistro-brusque",
    "name": "João Maistro",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-vitor-brusque",
    "name": "João Vitor",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "frank-salas-brusque",
    "name": "Frank Salas",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "italo-lucas-brusque",
    "name": "Ítalo Lucas",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-ataide-brusque",
    "name": "Léo Ataíde",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "alisson-cassiano-brusque",
    "name": "Alisson Cassiano",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "cipriano-brusque",
    "name": "Cipriano",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "davi-gabriel-brusque",
    "name": "Davi Gabriel",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jeferson-brusque",
    "name": "Jeferson",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-milhorim-brusque",
    "name": "Rafael Milhorim",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ryan-santos-brusque",
    "name": "Ryan Santos",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "raimar-brusque",
    "name": "Raimar",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ariel-brusque",
    "name": "Ariel",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "bernardo-lemes-brusque",
    "name": "Bernardo Lemes",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-gazao-brusque",
    "name": "Gabriel Gazão",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jonatan-lucca-brusque",
    "name": "Jonatan Lucca",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-martins-brusque",
    "name": "Pedro Martins",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "alex-paulino-brusque",
    "name": "Alex Paulino",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-prado-brusque",
    "name": "João Prado",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leonardo-brusque",
    "name": "Leonardo",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-medeiros-brusque",
    "name": "Pedro Medeiros",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafa-fonseca-brusque",
    "name": "Rafa Fonseca",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marlyson-brusque",
    "name": "Marlyson",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "udeh-clinton-brusque",
    "name": "Udeh Clinton",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "renan-henrique-brusque",
    "name": "Renan Henrique",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "heber-dos-santos-brusque",
    "name": "Heber dos Santos",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-pedro-brusque",
    "name": "João Pedro",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "petterson-brusque",
    "name": "Petterson",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "adriano-brusque",
    "name": "Adriano",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "macario-brusque",
    "name": "Macário",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "alvaro-brusque",
    "name": "Álvaro",
    "clubId": "brusque",
    "clubName": "Brusque",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.365scores.com/pt-br/football/team/brusque-9149/squad",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marcelo-de-bem-dal-soler-caxias",
    "name": "Marcelo de Bem Dal Soler",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "GOL",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "toebe-gabriel-caxias",
    "name": "Toebe Gabriel",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "GOL",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "felipe-albuquerque-felippi-caxias",
    "name": "Felipe Albuquerque Felippi",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ianson-acosta-soares-caxias",
    "name": "Ianson Acosta Soares",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mauricio-ribeiro-caxias",
    "name": "Mauricio Ribeiro",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "roberto-heuchayer-santos-de-araujo-caxias",
    "name": "Roberto Heuchayer Santos de Araújo",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ronei-gebing-caxias",
    "name": "Ronei Gebing",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "LAT",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "windson-airez-neves-caxias",
    "name": "Windson Airez Neves",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-luft-caxias",
    "name": "Joao Luft",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nunes-matheus-caxias",
    "name": "Nunes Matheus",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ravanelli-ferreira-dos-santos-caxias",
    "name": "Ravanelli Ferreira dos Santos",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "victor-sa-caxias",
    "name": "Victor Sa",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "MEI",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "calyson-rubens-santiago-rosa-caxias",
    "name": "Calyson Rubens Santiago Rosa",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-baptista-felix-caxias",
    "name": "Lucas Baptista Félix",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diego-de-souza-quirino-caxias",
    "name": "Diego de Souza Quirino",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "felipe-rangel-dos-santos-caxias",
    "name": "Felipe Rangel dos Santos",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jhonatan-ribeiro-de-araujo-caxias",
    "name": "Jhonatan Ribeiro de Araujo",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "k-c-portela-torres-caxias",
    "name": "K. C. Portela Torres",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "salatiel-de-oliveira-gabriel-junior-caxias",
    "name": "Salatiel de Oliveira Gabriel Júnior",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vitor-correia-da-silva-caxias",
    "name": "Vitor Correia da Silva",
    "clubId": "caxias",
    "clubName": "Caxias",
    "division": "Série C",
    "position": "ATA",
    "source": "https://classificacaogeral.com.br/clube/7770/caxias",
    "verifiedAt": "2026-11-08"
  }
,
  {
    "id": "andrey-confianca",
    "name": "Andrey",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "breyner-camilo-confianca",
    "name": "Breyner Camilo",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "enzo-rocha-confianca",
    "name": "Enzo Rocha",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabricio-confianca",
    "name": "Fabricio",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabricio-oya-confianca",
    "name": "Fabrício Oya",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-zeca-confianca",
    "name": "Gabriel Zeca",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavo-nicola-confianca",
    "name": "Gustavo Nicola",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "iago-confianca",
    "name": "Iago",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-fernandes-confianca",
    "name": "João Fernandes",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-pedro-confianca",
    "name": "João Pedro",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-cunha-confianca",
    "name": "Lucas Cunha",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mandovani-confianca",
    "name": "Mandovani",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marcelo-confianca",
    "name": "Marcelo",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mateus-ludke-confianca",
    "name": "Mateus Ludke",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-juliao-confianca",
    "name": "Matheus Juliao",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-silva-confianca",
    "name": "Matheus Silva",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "moises-confianca",
    "name": "Moises",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "patrick-confianca",
    "name": "Patrick",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "paulo-henrique-confianca",
    "name": "Paulo Henrique",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-pascoal-confianca",
    "name": "Rafael Pascoal",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "GOL",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "renan-confianca",
    "name": "Renan",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "sassa-confianca",
    "name": "Sassá",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ATA",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "valdir-junior-confianca",
    "name": "Valdir Júnior",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "wendel-rosas-confianca",
    "name": "Wendel Rosas",
    "clubId": "confianca",
    "clubName": "Confiança",
    "division": "Série C",
    "position": "MEI",
    "source": "https://tudosobrefutebol.com.br/club/confianca",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-wall-ferroviaria",
    "name": "Léo Wall",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "GOL",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-ferroviaria",
    "name": "Lucas",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "LAT",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "guilherme-f-ferroviaria",
    "name": "Guilherme F.",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ricardinho-ferroviaria",
    "name": "Ricardinho",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "VOL",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "edson-l-ferroviaria",
    "name": "Edson L.",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "LAT",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fau-ferroviaria",
    "name": "Fau",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ATA",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "alencar-ferroviaria",
    "name": "Alencar",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "VOL",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "denilson-ferroviaria",
    "name": "Denilson",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ATA",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "albano-ferroviaria",
    "name": "Albano",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "MEI",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "medina-ferroviaria",
    "name": "Medina",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jhonatan-ferroviaria",
    "name": "Jhonatan",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "MEI",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "meireles-ferroviaria",
    "name": "Meireles",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "cantarelli-ferroviaria",
    "name": "Cantarelli",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "MEI",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "thiago-ferroviaria",
    "name": "Thiago",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ATA",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "david-ferroviaria",
    "name": "David",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "MEI",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "filipi-ferroviaria",
    "name": "Filipi",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "felipe-r-ferroviaria",
    "name": "Felipe R.",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "LAT",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "schilling-ferroviaria",
    "name": "Schilling",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igor-ferroviaria",
    "name": "Igor",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "eduardo-ferroviaria",
    "name": "Eduardo",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "MEI",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "raoni-ferroviaria",
    "name": "Raoni",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "MEI",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "denis-jr-ferroviaria",
    "name": "Denis Jr",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "GOL",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "abner-ferroviaria",
    "name": "Abner",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "LAT",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-e-ferroviaria",
    "name": "Pedro E.",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ATA",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jundi-ferroviaria",
    "name": "Jundi",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "GOL",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marco-antonio-ferroviaria",
    "name": "Marco Antonio",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "MEI",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gadu-ferroviaria",
    "name": "Gadu",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ATA",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ze-vitor-ferroviaria",
    "name": "Zé Vitor",
    "clubId": "ferroviaria",
    "clubName": "Ferroviária",
    "division": "Série C",
    "position": "ATA",
    "source": "https://ge.globo.com/sp/ribeirao-preto-e-regiao/futebol/times/ferroviaria/noticia/2026/02/18/ferroviaria-oficializa-numeracao-fixa-para-temporada-2026-veja.ghtml",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabricio-figueirense",
    "name": "Fabrício",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "GOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "antonio-figueirense",
    "name": "Antônio",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "GOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vava-figueirense",
    "name": "Vavá",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "GOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igo-gabriel-figueirense",
    "name": "Igo Gabriel",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "GOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vinicius-barreta-figueirense",
    "name": "Vinícius Barreta",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "GOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leonan-figueirense",
    "name": "Leonan",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "anderson-conceicao-figueirense",
    "name": "Anderson Conceição",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jhonnathan-figueirense",
    "name": "Jhonnathan",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ze-luiz-figueirense",
    "name": "Zé Luiz",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-maia-figueirense",
    "name": "Léo Maia",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "LAT",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vitor-ricardo-figueirense",
    "name": "Vitor Ricardo",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "LAT",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ezequiel-figueirense",
    "name": "Ezequiel",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "LAT",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "arthur-henrique-figueirense",
    "name": "Arthur Henrique",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "LAT",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "wesley-costa-figueirense",
    "name": "Wesley Costa",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "LAT",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "breno-figueirense",
    "name": "Breno",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "VOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-renz-figueirense",
    "name": "Léo Renz",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "VOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafinha-potiguar-figueirense",
    "name": "Rafinha Potiguar",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "VOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "flavio-figueirense",
    "name": "Flávio",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "VOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-melo-figueirense",
    "name": "Pedro Melo",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "VOL",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "raynan-figueirense",
    "name": "Raynan",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "MEI",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "dudu-figueirense",
    "name": "Dudu",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "MEI",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-choco-figueirense",
    "name": "João Choco",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "MEI",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nicolas-porto-figueirense",
    "name": "Nicolas Porto",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "MEI",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "arthur-martins-figueirense",
    "name": "Arthur Martins",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mailson-figueirense",
    "name": "Mailson",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-marcos-figueirense",
    "name": "João Marcos",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gui-vieira-figueirense",
    "name": "Gui Vieira",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "thyerry-figueirense",
    "name": "Thyerry",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igor-bolt-figueirense",
    "name": "Igor Bolt",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pablo-figueirense",
    "name": "Pablo",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ze-carlos-figueirense",
    "name": "Zé Carlos",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "silvinho-figueirense",
    "name": "Silvinho",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emerson-galego-figueirense",
    "name": "Emerson Galego",
    "clubId": "figueirense",
    "clubName": "Figueirense",
    "division": "Série C",
    "position": "ATA",
    "source": "https://pt.wikipedia.org/wiki/Figueirense_Futebol_Clube",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "dheimison-floresta",
    "name": "Dheimison",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jeferson-souza-floresta",
    "name": "Jeferson Souza",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "islan-floresta",
    "name": "Islan",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "afonso-floresta",
    "name": "Afonso",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caique-floresta",
    "name": "Caique",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diego-matos-floresta",
    "name": "Diego Matos",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "eduardo-floresta",
    "name": "Eduardo",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "guilherme-floresta",
    "name": "Guilherme",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-martins-floresta",
    "name": "Matheus Martins",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "celeri-floresta",
    "name": "Celeri",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jeam-floresta",
    "name": "Jeam",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "garrati-floresta",
    "name": "GARRATI",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nonato-floresta",
    "name": "Nonato",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "daniel-troiano-floresta",
    "name": "Daniel Troiano",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "matheus-floresta",
    "name": "Matheus",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jhony-douglas-floresta",
    "name": "Jhony Douglas",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "cedric-floresta",
    "name": "Cedric",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "LAT",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marco-antonio-da-silva-carvalho-floresta",
    "name": "Marco Antonio da Silva Carvalho",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "eliandro-floresta",
    "name": "Eliandro",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marcelo-maia-floresta",
    "name": "Marcelo Maia",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caique-calito-floresta",
    "name": "Caique Calito",
    "clubId": "floresta",
    "clubName": "Floresta",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/inter-de-limeira-x-floresta/833158?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caique-guarani",
    "name": "Caique",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mateus-claus-guarani",
    "name": "Mateus Claus",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "GOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-donato-guarani",
    "name": "Rafael Donato",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "raphael-guarani",
    "name": "Raphael",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "mauricio-antonio-guarani",
    "name": "Mauricio Antonio",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "renan-castro-guarani",
    "name": "Renan Castro",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kaua-guarani",
    "name": "Kauã",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emerson-guarani",
    "name": "Emerson",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "willian-farias-guarani",
    "name": "Willian Farias",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ralf-guarani",
    "name": "Ralf",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "VOL",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-paulo-guarani",
    "name": "João Paulo",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diego-torres-guarani",
    "name": "Diego Torres",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nathan-guarani",
    "name": "Nathan",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ynaia-guarani",
    "name": "Ynaia",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "isaque-guarani",
    "name": "Isaque",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "MEI",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucca-guarani",
    "name": "Lucca",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "cachoeira-guarani",
    "name": "Cachoeira",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "carlos-eduardo-guarani",
    "name": "Carlos Eduardo",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "herbert-guarani",
    "name": "Herbert",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "g-parede-guarani",
    "name": "G. Parede",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rian-guarani",
    "name": "Rian",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kewen-guarani",
    "name": "Kewen",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "neto-costa-guarani",
    "name": "Neto Costa",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "maranhao-guarani",
    "name": "Maranhão",
    "clubId": "guarani",
    "clubName": "Guarani",
    "division": "Série C",
    "position": "ATA",
    "source": "https://www.cbf.com.br/futebol-brasileiro/jogos/campeonato-brasileiro/serie-c/2026/figueirense-x-guarani/834807?view=escalacao",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "joao-victor-inter-de-limeira",
    "name": "João Victor",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "LAT",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ronaldo-henrique-inter-de-limeira",
    "name": "Ronaldo Henrique",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "VOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-santos-inter-de-limeira",
    "name": "Lucas Santos",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "yan-silva-inter-de-limeira",
    "name": "Yan Silva",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "LAT",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "saulo-inter-de-limeira",
    "name": "Saulo",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "GOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "felipe-saraiva-inter-de-limeira",
    "name": "Felipe Saraiva",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fagner-alemao-inter-de-limeira",
    "name": "Fagner Alemão",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "romarinho-inter-de-limeira",
    "name": "Romarinho",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "MEI",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leo-paraiso-inter-de-limeira",
    "name": "Léo Paraíso",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "richard-inter-de-limeira",
    "name": "Richard",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emerson-santos-inter-de-limeira",
    "name": "Emerson Santos",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "VOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "robson-inter-de-limeira",
    "name": "Robson",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "heitor-roca-inter-de-limeira",
    "name": "Heitor Roca",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "LAT",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-santiago-inter-de-limeira",
    "name": "Gabriel Santiago",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "marco-antonio-inter-de-limeira",
    "name": "Marco Antônio",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "MEI",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucas-buchecha-inter-de-limeira",
    "name": "Lucas Buchecha",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "VOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "renan-braganca-inter-de-limeira",
    "name": "Renan Bragança",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "GOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "emerson-junior-inter-de-limeira",
    "name": "Emerson Junior",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "GOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nabil-inter-de-limeira",
    "name": "Nabil",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "GOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gabriel-dias-inter-de-limeira",
    "name": "Gabriel Dias",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "LAT",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "fabricio-dias-inter-de-limeira",
    "name": "Fabricio Dias",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "VOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "vitor-leque-inter-de-limeira",
    "name": "Vitor Leque",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "robinho-inter-de-limeira",
    "name": "Robinho",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "nassom-inter-de-limeira",
    "name": "Nassom",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "pedro-nagel-inter-de-limeira",
    "name": "Pedro Nagel",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "GOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavo-bochecha-inter-de-limeira",
    "name": "Gustavo Bochecha",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "VOL",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "claudinho-inter-de-limeira",
    "name": "Claudinho",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "MEI",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "miguel-bianconi-inter-de-limeira",
    "name": "Miguel Bianconi",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luiz-guilherme-inter-de-limeira",
    "name": "Luiz Guilherme",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "MEI",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rafael-oller-inter-de-limeira",
    "name": "Rafael Oller",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "ze-eduardo-inter-de-limeira",
    "name": "Zé Eduardo",
    "clubId": "inter-de-limeira",
    "clubName": "Inter de Limeira",
    "division": "Série C",
    "position": "ATA",
    "source": "https://interdelimeira.com/elenco/",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "maxwalef-botafogo-da-paraiba",
    "name": "Max Walef",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "GOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "edilson-botafogo-da-paraiba",
    "name": "Edilson",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "GOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leandromathias-botafogo-da-paraiba",
    "name": "Leandro Mathias",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "GOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "luizdaniel-botafogo-da-paraiba",
    "name": "Luiz Daniel",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "GOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "erick-botafogo-da-paraiba",
    "name": "Erick",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "LAT",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucassena-botafogo-da-paraiba",
    "name": "Lucas Sena",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "LAT",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diogomatheus-botafogo-da-paraiba",
    "name": "Diogo Matheus",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "LAT",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "leopereira-botafogo-da-paraiba",
    "name": "Léo Pereira",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "LAT",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "juliovaz-botafogo-da-paraiba",
    "name": "Júlio Vaz",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igormorais-botafogo-da-paraiba",
    "name": "Igor Morais",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "octaviometzker-botafogo-da-paraiba",
    "name": "Octávio Metzker",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "yansouto-botafogo-da-paraiba",
    "name": "Yan Souto",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "saimonpains-botafogo-da-paraiba",
    "name": "Saimon Pains",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ZAG",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "patriccalmon-botafogo-da-paraiba",
    "name": "Patric Calmon",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "LAT",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "bull-botafogo-da-paraiba",
    "name": "Bull",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "LAT",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "igormaduro-botafogo-da-paraiba",
    "name": "Igor Maduro",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "VOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "thallyson-botafogo-da-paraiba",
    "name": "Thallyson",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "VOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jhonatavarela-botafogo-da-paraiba",
    "name": "Jhonata Varela",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "VOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucascandido-botafogo-da-paraiba",
    "name": "Lucas Cândido",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "VOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucascouto-botafogo-da-paraiba",
    "name": "Lucas Couto",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "VOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "lucasmatheus-botafogo-da-paraiba",
    "name": "Lucas Matheus",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "VOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "caiogarcia-botafogo-da-paraiba",
    "name": "Caio Garcia",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "VOL",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "edcarlos-botafogo-da-paraiba",
    "name": "Ed Carlos",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "MEI",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "giovani-botafogo-da-paraiba",
    "name": "Giovani",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "MEI",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavosilva-botafogo-da-paraiba",
    "name": "Gustavo Silva",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "MEI",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "henriquedourado-botafogo-da-paraiba",
    "name": "Henrique Dourado",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ATA",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "gustavobalotelli-botafogo-da-paraiba",
    "name": "Gustavo Balotelli",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ATA",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "kayon-botafogo-da-paraiba",
    "name": "Kayon",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ATA",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "rodolfo-botafogo-da-paraiba",
    "name": "Rodolfo",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ATA",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "diegotavares-botafogo-da-paraiba",
    "name": "Diego Tavares",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ATA",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "duduhatamoto-botafogo-da-paraiba",
    "name": "Dudu Hatamoto",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ATA",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
  {
    "id": "jonastoro-botafogo-da-paraiba",
    "name": "Jonas Toró",
    "clubId": "botafogo-da-paraiba",
    "clubName": "Botafogo da Paraíba",
    "division": "Série C",
    "position": "ATA",
    "source": "https://jornaldaparaiba.com.br/esportes/botafogo-pb-calendario-jogos-2026",
    "verifiedAt": "2026-11-08"
  },
];
export const PLAYER_DATA_AS_OF = "2026-11-08";
export const PLAYER_DATA_STATUS = "partial-verified";
