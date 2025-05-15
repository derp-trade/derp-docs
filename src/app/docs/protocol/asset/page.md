---
title: Asset specification
nextjs:
  metadata:
    title: Asset specification
    description: Understand how DERPs work in relation to perpetual futures.
---

The source of information about perpetual futures is the Hyperliquid [contract specification](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/contract-specifications).

| Characteristic          | Perpetual futures (Hyperliquid)          | DERPs                         |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Contract                | Unit of underlying spot asset            | Unit of underlying spot asset |
| Underlying asset        | Any asset via price oracle               | Any asset via price oracle    |
| Initial margin fraction | 1 / leverage                             | 1 / leverage                  |
| Maintenance margin      | 0.5 \* max initial margin                | 0.5 \* max initial margin     |
| **Mark price**          | Robust, order book-based                 | Same as underlying asset      |
| **Account type**        | Cross or isolated margin                 | Cross margin                  |
| **Funding rate**        | Based on index and mark price difference | Based on AMM skew             |
