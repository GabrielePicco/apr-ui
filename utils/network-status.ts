import { Connection, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";

/**
 * Returns the current network status.
 * @param {String} programId
 * @return {Promise<boolean>}
 */
export default async function networkStatus(
  programId: string
): Promise<boolean> {
  const pubkey = new PublicKey(programId);
  const connection = new Connection(process.env.NEXT_PUBLIC_NODE_URL as string);

  try {
    const result = await anchor.utils.registry.verifiedBuild(
      connection,
      pubkey,
      10
    );

    if (result === null) return false;
  } catch (e) {
    console.log("Error: ", e);
    return false;
  }

  return true;
}
