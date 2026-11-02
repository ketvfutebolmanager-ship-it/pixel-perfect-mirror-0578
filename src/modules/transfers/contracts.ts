import type { PlayerRecord } from "@/modules/players/database";
import type { BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";

export type ContractYears = 1 | 2 | 3;
export type DismissalFinePercent = 10 | 20 | 30;
export type PlayerContract = {
  id: string;
  playerId: string;
  playerName: string;
  clubId: string;
  clubName: string;
  division?: BrazilianDivision;
  years: ContractYears;
  dismissalFinePercent: DismissalFinePercent;
  marketValue?: number;
  terminationFee?: number;
  signedAt: string;
  expiresAt: string;
  status: "active" | "expired" | "terminated";
};

export type TransferRecord = {
  id: string;
  playerId: string;
  playerName: string;
  fromClubId: string;
  fromClubName: string;
  toClubId: string;
  toClubName: string;
  type: "purchase" | "loan" | "free";
  completedAt: string;
};

export function estimatePlayerMarketValue(player: PlayerRecord): number {
  const stats = player.seasonStats;
  const appearances = stats?.appearances ?? 0;
  const impact = (stats?.goals ?? 0) * 180000 + (stats?.assists ?? 0) * 120000 + appearances * 35000;
  const positionFactor = player.position === "ATA" ? 1.25 : player.position === "MEI" ? 1.15 : player.position === "GOL" ? 1.1 : 1;
  const ageFactor = player.age ? player.age <= 23 ? 1.35 : player.age >= 32 ? 0.7 : 1 : 1;
  return Math.max(500000, Math.round(((2500000 + impact) * positionFactor * ageFactor) / 100000) * 100000);
}

export function makeContract(player: PlayerRecord, years: ContractYears, fine: DismissalFinePercent, start = new Date(), marketValue = estimatePlayerMarketValue(player)): PlayerContract {
  const signedAt = start.toISOString().slice(0, 10);
  const expiry = new Date(start);
  expiry.setFullYear(expiry.getFullYear() + years);
  return {
    id: `contract-${player.id}-${Date.now()}`,
    playerId: player.id,
    playerName: player.name,
    clubId: player.clubId,
    clubName: player.clubName,
    division: player.division,
    years,
    dismissalFinePercent: fine,
    marketValue,
    terminationFee: Math.round(marketValue * 1.5),
    signedAt,
    expiresAt: expiry.toISOString().slice(0, 10),
    status: "active",
  };
}
