#!/usr/bin/env node
/**
 * Importa elencos verificados para o KE TV Futebol Manager.
 *
 * Uso:
 *   node scripts/import-player-rosters.mjs caminho/rosters-2026.json
 *
 * O JSON deve ser um array de registros:
 * { "name": "...", "clubId": "...", "position": "ATA",
 *   "source": "URL ou referência verificável", "verifiedAt": "YYYY-MM-DD",
 *   "shirtNumber": 9, "age": 25 }
 *
 * O script não consulta nem raspa sites. Ele valida um arquivo de dados
 * previamente obtido de fontes autorizadas e gera o banco tipado do jogo.
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const input = process.argv[2];
if (!input) {
  console.error("Informe o arquivo JSON de elencos. Ex.: node scripts/import-player-rosters.mjs data/rosters-2026.json");
  process.exit(1);
}

const root = process.cwd();
const clubsFile = await readFile(resolve(root, "src/modules/clubs/brazilian-clubs-2026.ts"), "utf8");
const clubRows = [...clubsFile.matchAll(/\["([^"]+)","([A-Z]{2})","(Série [ABCD])"(?:,"([^"]+)")?\]/g)];
const clubs = clubRows.map(([, name, state, division]) => {
  const aliases = { "Atlético-BA": "atletico-de-alagoinhas", "Atlético-CE": "atletico-cearense", "Fluminense-PI": "fluminense-do-piaui", "Democrata GV": "democrata-de-governador-valadares", "Operário-MT": "operario-de-varzea-grande", "Brasil-RS": "brasil-de-pelotas" };
  const id = aliases[name] ?? name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return { id, name, division };
});
const clubById = new Map(clubs.map((club) => [club.id, club]));
if (clubs.length !== 156) {
  throw new Error(`Cadastro de clubes inesperado: encontrados ${clubs.length}; esperado 156. Importação cancelada.`);
}

const raw = JSON.parse(await readFile(resolve(root, input), "utf8"));
if (!Array.isArray(raw) || raw.length === 0) throw new Error("O arquivo precisa conter um array JSON não vazio.");
const allowedPositions = new Set(["GOL", "ZAG", "LAT", "VOL", "MEI", "ATA", "DEF"]);
const seen = new Set();
const players = raw.map((row, index) => {
  const name = String(row.name ?? "").trim();
  const club = clubById.get(row.clubId);
  const position = String(row.position ?? "").toUpperCase();
  const source = String(row.source ?? "").trim();
  const verifiedAt = String(row.verifiedAt ?? "");
  if (!name || !club || !allowedPositions.has(position) || !source || !/^20\d{2}-\d{2}-\d{2}$/.test(verifiedAt)) {
    throw new Error(`Registro ${index + 1} inválido: nome, clubId, posição, fonte e verifiedAt são obrigatórios.`);
  }
  const key = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() + "|" + club.id;
  if (seen.has(key)) throw new Error(`Jogador duplicado no clube: ${name} / ${club.name}`);
  seen.add(key);
  const id = String(row.id ?? (name + "-" + club.id)).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return { id, name, clubId: club.id, clubName: club.name, division: club.division, position,
    ...(Number.isInteger(row.age) && row.age > 0 ? { age: row.age } : {}),
    ...(Number.isInteger(row.shirtNumber) && row.shirtNumber > 0 ? { shirtNumber: row.shirtNumber } : {}),
    source, verifiedAt };
});
const divisions = ["Série A", "Série B", "Série C", "Série D"];
const summary = Object.fromEntries(divisions.map((division) => [division, players.filter((p) => p.division === division).length]));
const coveredClubs = new Set(players.map((p) => p.clubId));
const missingClubs = clubs.filter((club) => !coveredClubs.has(club.id));
if (process.argv.includes("--require-all-clubs") && missingClubs.length) {
  throw new Error(`Importação cancelada: ${missingClubs.length} clubes sem elenco: ${missingClubs.map((c) => c.name).join(", ")}`);
}
const header = `import type { BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";\n\nexport type PlayerPosition = "GOL" | "ZAG" | "LAT" | "VOL" | "MEI" | "ATA" | "DEF";\nexport type PlayerRecord = { id: string; name: string; clubId: string; clubName: string; division: BrazilianDivision; position: PlayerPosition; age?: number; shirtNumber?: number; seasonStats?: { appearances: number; minutes: number; goals: number; assists: number; yellowCards: number; secondYellowCards: number; redCards: number }; source: string; verifiedAt: string };\n\n// Banco gerado por scripts/import-player-rosters.mjs. Dados com fonte e data de conferência.\nexport const VERIFIED_PLAYERS_2026: PlayerRecord[] = `;
const output = header + JSON.stringify(players, null, 2) + `;\n\nexport const PLAYER_DATA_AS_OF = ${JSON.stringify(players.map((p) => p.verifiedAt).sort().at(-1))};\nexport const PLAYER_DATA_STATUS = ${JSON.stringify(missingClubs.length ? "partial-verified" : "complete-verified")};\nexport const PLAYER_ROSTER_COVERAGE_2026 = ${JSON.stringify({ totalClubs: clubs.length, coveredClubs: coveredClubs.size, missingClubs: missingClubs.map((c) => c.name), playersByDivision: summary }, null, 2)};\n`;
await writeFile(resolve(root, "src/modules/players/database.ts"), output);
console.log(JSON.stringify({ importedPlayers: players.length, coveredClubs: coveredClubs.size, totalClubs: clubs.length, missingClubs: missingClubs.map((c) => c.name), playersByDivision: summary }, null, 2));
