---
title: Preventing drain attacks
nextjs:
  metadata:
    title: Preventing drain attacks
    description: Explanation of how derp.trade prevents attacks trying to drain its liquidity
---

Perps markets require a market maker, which uses a pool of its own funds to provide liquidity. This means that exploiting one market can cause the market maker to lose money used to provide liquidity in other markets.

This is a concern for perps exchanges, but not for derp.trade, because:
1. All DERPs pools are independent. One pool's liquidity cannot be used to cover another pool's losses.
2. There is no socialized insurance fund. Instead, each pool is separately overcapitalized.
3. The AMM cannot be liquidated, instead using the claimable value mechanism to limit the amount of funds that can be drained from the AMM.