---
title: Skew adjustments
nextjs:
  metadata:
    title: Skew adjustments
    description: Understand how DERP contracts react to AMM skew with funding rates and pricing.
---

The AMM is the only counterparty when opening a position. For example, if a trader opens a long position, the AMM will take the opposite (short) side of the trade.

If there is a large skew in open positions (e.g. there is 5x more long exposure than short exposure), the market should be stabilized. The goal of the AMM is to let shorts and longs provide liquidity to each other, and only use the liquidity funds as a last resort. This is restored by adjusting the funding rate and the price of DERPs.

## Skew factor

The skew factor is a reflection of the AMM's skew. It is calculated as:

```plaintext
L - total long exposure
S - total short exposure

skew factor = (L - S) / (L + S)
```

## Funding rate

The funding rate is paid hourly by the holders of the skewed side of the market. This means that if there are more longs than shorts, the funding rate will be paid by the longs to the shorts. The funding rate is calculated as:

```plaintext
funding rate = skew factor * base funding rate
```

The **base funding rate** is currently set at 0.5% per hour (subject to change based on stress testing and market conditions.)

This means that if the skew factor is 0.1, the funding rate will be 0.05% per hour. If the skew factor is -0.1, the funding rate will be -0.05% per hour.

The funding mechanism incentivizes traders to acquire positions on the opposite side of the skew by making it more expensive to hold a position on the skewed side, and more profitable to hold the unskewed side.

## Pricing

The price of a DERP is adjusted based on the skew factor and a parameter called the **price skew sensitivity** (currently set at 0.1). 

The price of a single contract is calculated as:

```plaintext
P = P_oracle * (1 + skew factor * price skew sensitivity)
```

Where P_oracle is the price of the underlying asset as determined by the oracle.

This pricing mechanism results in a price that goes up when the AMM skews **long**, incentivizing traders to short. Conversely, when the AMM skews **short**, the price goes down, incentivizing traders to go long. This structure is similar to how funding rates work in perpetual futures markets.