---
title: Overview
nextjs:
  metadata:
    title: Risk overview
    description: Overview of the risks associated with trading DERPs
---

With the exception of AMM payout risk, all risks are similar to those of perpetual futures. The [Hyperliquid documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/risks) provides further details on these risks.

## Financial and market risk

### Market manipulation

DERPs are designed to work with any asset, including illiquid ones. This means the underlying asset can be manipulated, which can lead to significant losses for traders.

This risk is mitigated by:
- the [claimable value](/docs/protocol/value) mechanism, which prevents traders from taking more than 100% of the liquidity pool - this means manipulation is always limited to a single market
- not using the underlying asset as collateral, preventing short squeezes

### Price oracle risk

Just like perps exchanges, derp.trade relies on price oracles to determine the value of the underlying asset. This means compromised oracles can affect DERP traders.

### AMM payout risk

AMM payout risk occurs when the AMM liquidity pool holds less value than the total positions of all traders. This can happen if the AMM is not sufficiently capitalized or if the underlying asset's price moves significantly.

Under those conditions, the [claimable value](/docs/protocol/value) mechanism ensures that traders can only claim a portion of the AMM's funds.

{% callout type="warning" title="This risk is unique to DERPs" %}
The AMM payout risk is not seen in other derivative assets. It's similar to how price impact works in DeFi protocols like Raydium or Uniswap. However, it is more pronounced in DERPs because of the use of leverage.
{% /callout %}

This risk is mitigated by:
- overcapitalizing the AMM: it is both the recipient of the profits from the sale of DERPs and funding rate payments
- encouraging traders to hold longs and shorts equally with [skew adjustment](/docs/protocol/skew) mechanisms
- not liquidating the AMM, allowing traders to hold their positions for longer periods to wait for the liquidity pool to recover

## Infrastructure risk

### Internal infrastructure

DERPs are a new asset class. This means there is risk of bugs in the code or design of the protocol. Before the mainnet launch, we plan to mitigate this risk by commissioning third-party audits.

### External infrastructure

DERPs use well-established external infrastructure, like the Solana blockchain. This means that the risk of external infrastructure failure is a possibility, but it is not a major concern in the short term.

The protocol is designed to be resilient to external infrastructure failures and other interruptions to service.