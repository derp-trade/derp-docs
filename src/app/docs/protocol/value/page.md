---
title: Notional and claimable value
nextjs:
  metadata:
    title: Notional and claimable value
    description: Understanding how DERPs are valued and displayed in the UX
---

The value of a DERP position can be expressed in several ways:

1. **Notional value** (or face value) is the total value of underlying assets represented by the position. It is used to calculate funding rates and fees.
2. **Present value** is the current value of the position, taking into account the leverage and current market price of the underlying assets. It is used to calculate unrealized PnL.
3. **Claimable value** is the amount of assets that can be claimed from the AMM at any given time. It is used to calculate the amount of assets that can be withdrawn from the AMM.

## Calculating claimable value

When the total AMM liquidity is greater or equal to the total present value of all user's positions, the claimable value is equal to the present value. This means the user can sell their position at the current market price and withdraw the proceeds.

When the total AMM liquidity is less, the claimable value is calculated by:

```plaintext
global payout factor = min(1, AMM liquidity / total present value)
claimable value = present value * global payout factor
```

Claimable value is used when:
- pricing a position for liquidation,
- closing a position;

because it determines the amount of assets that the user can get if they close their position immediately.