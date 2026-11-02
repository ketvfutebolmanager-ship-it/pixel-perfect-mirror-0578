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

export function makeContract(player: PlayerRecord, years: ContractYears, fine: DismissalFinePercent, start = new Date()): PlayerContract {
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
    signedAt,
    expiresAt: expiry.toISOString().slice(0, 10),
    status: "active",
  };
}
