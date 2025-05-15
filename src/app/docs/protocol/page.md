---
title: Overview
nextjs:
  metadata:
    title: Protocol overview
    description: Overview of the derp.trade protocol
---

A DERP (decentralized perpetual) is a derivative asset traded on-chain.

The design goals of DERPs are to:
1. Support a wide range of underlying assets, like stocks, commodities, and tokens.
2. Be robust to highly volatile markets.
3. Require no upfront capital for liquidity.

This is achieved by using an [automated market maker](/docs/protocol/amm) (AMM) to provide liquidity, rather than a centralized order book. This allows traders to buy and sell DERPs at any time, even in illiquid markets.

The AMM determines [pricing and funding rates](/docs/protocol/skew) based on the skew of the market. This is the difference between the value of long and short positions in the AMM. The larger the skew, the higher the risk that one side of the market will not have coverage for the other side. This consideration determines the funding rates and asset prices.

The rules governing [margin](/docs/protocol/margin) and [liquidations](/docs/protocol/liquidations) are similar to those of perpetual futures. However, the AMM cannot be liquidated. There are [special considerations](/docs/protocol/value) for when there is not enough liquidity in the AMM to cover the user's unrealized PnL.

A list of similarities and differences between DERPs and perpetual futures is available in the [comparison table](/docs/protocol/asset). There is also a [risk overview](/docs/risk) that describes the risks of trading on derp.trade.