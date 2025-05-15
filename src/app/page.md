---
title: Getting started
---

Derp.trade is a derivatives exchange that lists a novel kind of asset - a DERP (decentralized perpetual.) Learn how DERPs are structured, and how to use them. {% .lead %}

{% quick-links %}

{% quick-link title="Trading" icon="presets" href="/docs/onboarding/app" description="Learn how to trade on the devnet version of derp.trade." /%}

{% quick-link title="Asset structure" icon="theming" href="/docs/protocol" description="Get an overview of how DERPs are structured and how they work." /%}

{% quick-link title="Community" icon="plugins" href="/docs/onboarding/community" description="Join the community and contribute to the project." /%}

{% quick-link title="Risk" icon="warning" href="/docs/risk" description="Learn the risks bending the protocol and how they are mitigated." /%}

{% /quick-links %}

Right now, derp.trade is in a beta phase. We have released a devnet version of the app, and are working on a mainnet version.

---

## What are DERPs?

A decentralized perpetual (DERP) is a new kind of asset based on perpetual futures (perps.) They are designed to support a wider range of assets, including those that are illiquid or have low trading volume.

### Comparison to perps

Classic perps are a type of derivative that allows traders to speculate on the future price of an asset. They are typically used for highly liquid assets, such as cryptocurrencies or stocks.

However, perp markets require a high level of liquidity to function properly. This is because they rely on a **centralized order book** to match buyers and sellers. If there are not enough buyers or sellers in the market, the price of the asset can become very volatile or it might not be possible to execute trades at all.

Instead of an order book, DERPs use an automated market maker (**AMM**) to provide liquidity. This means that traders can buy and sell DERPs at any time.

This switch necessitates some changes to the way that DERPs are structured. It's no longer important to control the mark price, which perps do with funding rates, since the AMM can simply set the price of the asset.

Instead, DERPs are built to control the **AMM skew**. This is the difference between the value of long and short positions in the AMM. The larger the skew, the higher the risk that one side of the market will not have coverage for the other side. This consideration determines the funding rates and asset prices.

{% callout title="Learn more about skew" %}
Controlling AMM skew is the most important part of the DERP protocol. Having a similar value of long and short positions in a market is the only way to ensure that the AMM can cover all positions.
{% /callout %}

### Unique characteristics

DERPs are intended to work well even in illiquid markets. Moreover, it's likely that most derp.trade markets will start as illiquid. This means that the AMM will be skewed in one direction or the other from the start. Keeping markets stable under those conditions requires that the AMM cannot be liquidated.

{% callout type="warning" title="AMM liquidations" %}
Unlike perps, where market makers are just regular traders, the AMM is special in that it cannot be liquidated. If there is not enough liquidity in the AMM to cover the user's unrealized PnL, the AMM will temporarily scale down its payouts. This is similar to how *price impact* works in CPMMs.
{% /callout %}

DERPs also have special risk characteristics. Because smaller tokens are at risk of market manipulation, the protocol never mixes liquidity between different assets. This affects risk in two ways:
1. There is no **protocol risk.** Traders on one market cannot affect another market. This is an improvement over perps, where the market maker's bankruptcy in one market can affect the entire protocol.
2. There is more **single asset risk.** Because the AMM is never liquidated, the protocol cannot socialize the risk of a single asset. This means that if a trader has a large position in a single asset, there is no guarantee that the AMM will be able to cover their unrealized PnL.

---

## Getting help

The derp.trade exchange is under active development. We are constantly working to improve the protocol, and we welcome feedback from the community.

### Submit an issue

If you find a bug or have a suggestion for improvement, please submit an issue on our [docs GitHub repository](https://github.com/derp-trade/derp-docs/issues).

Any issues with how the protocol works should be directed to the docs repository. Bugs with the app and UX improvements should be directed to the [app repository](https://github.com/derp-trade/derp-app/issues).

### Join the community

We have a [Telegram group for beta testers](https://t.me/derpsbeta), where we post updates and discuss the protocol. We also run an [X profile](https://x.com/derp_trade) sharing updates.