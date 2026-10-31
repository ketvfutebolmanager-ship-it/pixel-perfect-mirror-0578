import type { BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";

export type PlayerPosition = "GOL" | "ZAG" | "LAT" | "VOL" | "MEI" | "ATA";
export type PlayerRecord = {
  id: string;
  name: string;
  clubId: string;
  clubName: string;
  division: BrazilianDivision;
  position: PlayerPosition;
  age?: number;
  shirtNumber?: number;
  source: string;
  verifiedAt: string;
};

// The roster is intentionally empty until player registrations are imported and checked.
// Never fill this array with invented athletes.
export const VERIFIED_PLAYERS_2026: PlayerRecord[] = [];
export const PLAYER_DATA_AS_OF = "2026-10-31";
export const PLAYER_DATA_STATUS = "pending-verification";
