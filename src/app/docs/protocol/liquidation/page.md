---
title: Liquidation
nextjs:
  metadata:
    title: Liquidation
    description: Learn about liquidations in derp.trade
---

When a user's account value falls below the [maintenance margin](/docs/protocol/margin#initial-and-maintenance-margin), all their positions are liquidated. This is done to ensure the protocol's solvency and to protect the AMM from being undercollateralized.

Liquidations are executed automatically by the protocol.

## Liquidation process

1. The protocol monitors the account value of all users in real-time.
2. When it's detected that a user's account value has fallen below the maintenance margin, the protocol will automatically close all positions in the user's account against the respective AMM.
3. If the user's balance is positive after the sale, standard fees will be deducted from the proceeds.
4. If the user's balance is negative, the liquidating AMM will cover the loss.
4. The protocol will then return any remaining funds to the user.