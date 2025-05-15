---
title: Margin
nextjs:
  metadata:
    title: Margin
    description: Learn about the use of margin in derp.trade, including initial and maintenance margin, and how it affects your positions.
---

Margin is the amount of collateral required to open and maintain a position in a leveraged trading environment. In derp.trade, margin is used to determine the maximum leverage that can be applied to a position, as well as the minimum amount of collateral required to keep the position open.

Only **cross-margin** is supported in derp.trade. This means that all positions share the same margin, and the margin is used to cover all positions. This is different from isolated margin, where each position has its own margin and can be liquidated independently.

## Leverage

Maximum leverage is dependent on the market. The maximum leverage for each market is between 3x and 40x, and is set by the protocol depending on the liquidity and AMM skew.

When opening a position, the user can choose any leverage between 1x and the maximum leverage for that market. The higher the leverage, the more margin is required to open the position.

## Initial and maintenance margin

The account value of a user is the sum of all their cash and unrealized PnL.

To open a position, the user's account value must be greater than the initial margin calculated by:

```plaintext
initial margin = position size * price / leverage
```

After opening a position, the account value must be greater than the maintenance margin to prevent liquidation. The maintenance margin is calculated as:

```plaintext
maintenance margin = position size * price / (max leverage * 2)
```

{% callout title="Maintenance margin range" %}
The maintenance margin is half of the initial margin at max leverage.
Depending on the market, it can range between 1.25% (1/80 for 40x max leverage) and 16.67% (1/6 for 3x max leverage) of the position size.
{% /callout %}