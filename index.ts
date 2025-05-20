import { createOrder as createOrderProbo, getDepth as getDepthProbo } from "./probo";
import type { Depth } from "./types";

const PROBO_TOKEN_ID = 4059341;
const DOLLAR_PRICE = 85;
const EXPECTED_ARB_PERCENT = 5;

async function main() {
  try {
    const depthProbo: Depth = await getDepthProbo(PROBO_TOKEN_ID);
    findAndExecArb(depthProbo);
  } catch (error) {
    console.error("Error fetching Probo depth:", error);
  }
}

export function findAndExecArb(depthProbo: Depth) {
  // Extract available sell prices on Probo
  const prices = Object.keys(depthProbo.sell)
    .filter(p => Number(depthProbo.sell[p]) > 0)
    .map(Number)
    .sort((a, b) => b - a);

  if (prices.length === 0) {
    console.log("No sell offers on Probo");
    return;
  }

  const bestPrice = prices[0];
  const quantity = Number(depthProbo.sell[bestPrice.toString()]);

  console.log(`Best Probo sell price: ${bestPrice}, quantity: ${quantity}`);

  // Check if the best price meets the arbitrage threshold
  const threshold = (EXPECTED_ARB_PERCENT / 100) * DOLLAR_PRICE;
  if (bestPrice <= threshold) {
    console.log(`Arbitrage condition met: price ${bestPrice} <= threshold ${threshold}`);
    console.log(`Placing order at price ${bestPrice} for qty ${quantity} on Probo`);
    // Uncomment and configure the following to execute the order:
    // createOrderProbo({ price: bestPrice, quantity });
  } else {
    console.log("No arbitrage opportunity found on Probo");
  }
}

main();
