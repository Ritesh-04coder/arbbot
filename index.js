"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndExecArb = findAndExecArb;
const probo_1 = require("./probo");
const PROBO_TOKEN_ID = 4031200;
const DOLLAR_PRICE = 85;
const EXPECTED_ARB_PERCENT = 5;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const depthProbo = yield (0, probo_1.getDepth)(PROBO_TOKEN_ID);
            findAndExecArb(depthProbo);
        }
        catch (error) {
            console.error("Error fetching Probo depth:", error);
        }
    });
}
function findAndExecArb(depthProbo) {
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
    }
    else {
        console.log("No arbitrage opportunity found on Probo");
    }
}
main();
