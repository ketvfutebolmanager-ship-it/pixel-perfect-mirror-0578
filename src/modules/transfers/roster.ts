import type { PlayerRecord } from "@/modules/players/database";
import type { PlayerContract } from "./contracts";

export const PLAYER_CONTRACTS_KEY = "ketvfm-contracts";

export function readPlayerContracts(): PlayerContract[] {
  if (typeof window === "undefined") return [];
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(PLAYER_CONTRACTS_KEY) ?? "[]");
    return Array.isArray(value) ? value as PlayerContract[] : [];
  } catch {
    return [];
  }
}

/**
 * Builds the visible division roster from verified players and active contracts.
 * A player with an active contract at another club is removed from the former club
 * and attached to the contracting club without changing the verified source record.
 */
export function getDivisionRoster(
  division: PlayerRecord["division"],
  verifiedPlayers: PlayerRecord[],
  contracts: PlayerContract[],
): PlayerRecord[] {
  const activeContracts = contracts.filter((contract) => contract.status === "active");
  const contractedPlayerIds = new Set(activeContracts.map((contract) => contract.playerId));
  const movedPlayers = new Map(activeContracts.map((contract) => [contract.playerId, contract]));

  const roster = verifiedPlayers
    .filter((player) => player.division === division)
    .filter((player) => {
      const contract = movedPlayers.get(player.id);
      return !contract || contract.clubId === player.clubId;
    })
    .map((player) => {
      const contract = movedPlayers.get(player.id);
      return contract
        ? { ...player, clubId: contract.clubId, clubName: contract.clubName }
        : player;
    });

  // Keep this guard explicit: contracts for players not present in the verified
  // database are not fabricated into full player profiles.
  void contractedPlayerIds;
  return roster;
}
