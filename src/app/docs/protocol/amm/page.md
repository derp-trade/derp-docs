---
title: AMM
nextjs:
  metadata:
    title: AMM
    description: Understand how automated market maker (AMM) based markets work to provide liquidity for DERPs.
---

DERPs are not traded on an order book. Instead, they are traded on an automated market maker (AMM) based market. 

## Pricing

The price of a DERP is determined by the AMM, which is a smart contract that provides liquidity for the market. Instead of a constant product formula or other pricing method, the AMM simply sets the price of the DERP based on the underlying asset's price and a skew factor, as described in the [skew adjustment](/docs/protocol/skew) section.

## Order support

Even though there is no order book, derp.trade does support various [order types](/docs/protocol/orders). When submitted, these orders will wait until their conditions are met. Then, they will be executed against the current AMM price. This is similar to an order book, but there is no guarantee that the order will be filled at the desired price.