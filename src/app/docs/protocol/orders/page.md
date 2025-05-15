---
title: Order types
nextjs:
  metadata:
    title: Order types
    description: Overview of the order types supported by derp.trade
---

derp.trade aims to support three types of orders: market, limit, and stop market orders. 

**Market** orders execute immediately at the market price. **Limit** orders execute at a specified price or better, and they will remain open until filled or cancelled.

**Stop market** orders are triggered when the market price reaches a specified level, and they execute as market orders - they are not guaranteed to fill at the stop price. They are used to implement stop loss and take profit.

The current version of the app only supports market orders. Limit and stop market orders are planned for future releases.