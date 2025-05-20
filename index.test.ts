import { findAndExecArb } from "./index";
import type { Depth } from "./types";

// Mock depth data for Probo only, since findAndExecArb now accepts a single Depth
const mockDepthProbo: Depth = {
  buy: {
    "0.31": "100",
  },
  sell: {
    "0.74": "100",
  },
};

// Execute the arbitrage function with only Probo depth
findAndExecArb(mockDepthProbo);

// If you want to assert console output in a test framework (e.g., Jest), you could wrap this in a test case:
// describe('findAndExecArb', () => {
//   it('should handle a single Depth object correctly', () => {
//     const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//     findAndExecArb(mockDepthProbo);
//     expect(consoleSpy).toHaveBeenCalledWith('Best Probo sell price: 0.74, quantity: 100');
//     consoleSpy.mockRestore();
//   });
// });