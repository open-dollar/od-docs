---
description: Frequently asked questions about Open Dollar
---
# OpenDollar FAQ & Glossary


## FAQ


### What is RAI?

* “The supply and demand mechanic plays out between two parties: SAFE users (those who generate RAI with their ETH) and RAI holders.” - should it be “mechanics”?
* The **Flexibility:** point needs a period at the end


### How does OD work/behave?[​](https://docs.opendollar.com/#how-does-rai-workbehave)

* RAI tends to appreciate if SAFE users deleverage and/or RAI users long and it depreciates in case SAFE users leverage and/or RAI users short.
    * Recommend slightly rewording this because it’s confusing to read
* “At time T3: ETH remains at $1000 and RAI's market price is still $4. The system wants the market price to get close to the redemption price. In order to eliminate the imbalance between the market/redemption prices, the system starts to revalue RAI. Revaluing consists in setting a positive redemption rate which makes the redemption price grow every second.”
* This whole section needs grammar review.
* If there is a way to break down the section into smaller parts, it will be easier to follow. Introduce more color or something to the headings to create those distinct parts.


### Why would I hold RAI when the system devalues the token?[​](https://docs.opendollar.com/#why-would-i-hold-rai-when-the-system-devalues-the-token)

* Again, “the system” feels very vague and scary.
* The content written doesn’t seem to answer the question, it feels like it’s depending on the reader having a certain level of understanding that would allow them to surmise something that’s being insinuated in the answer.
* The answer feels very casual as well.


### What are RAI's use-cases?[​](https://docs.opendollar.com/#what-are-rais-use-cases)


* The following is a non-exhaustive list of use-cases we envision for RAI:


### Will RAI always return to the same initial value/peg?[​](https://docs.opendollar.com/#will-rai-always-return-to-the-same-initial-valuepeg)

* Link to an explainer about RAI not being pegged to anything

### What are the fees?


### Can I deposit multiple types of collateral into one vault?


### Can I add more collateral to my vault?

Yes you can add more collateral to your vault at any time. Depending on your collateralization ratio you can then also borrow more.

### Where can I use $OD?


### Where can I trade my vaults?

You can trade your vaults on any NFT marketplace, like OpenSea for example. Keep in mind that when you sell your Non-Fungible Vault you’re also selling all collateral and debt associated with it.


### How can I avoid liquidation?

Each type of vault has its own collateralization ratio that is required. The “collateralization ratio” is the ratio of the value of the collateral deposited in your vault to the value of the OD borrowed against it. When borrowing OD be sure to leave a margin that accounts for market volatility and top up your vault with more collateral as needed.


### What happens when my NFV gets liquidated?


### What are the supported collateral types?


### How do I get $ODG?


### How do I get test tokens for the testnet app?

You can request Arbitrum Goerli testnet tokens via our OD Bot using the /claim slash command followed by your wallet address in any channel of our [Discord](https://discord.opendollar.com) server: /claim 0xYourAddress


### What is the "Vault Facilitator"? 

When you connect to Open Dollar’s app for the first time you are asked to create a Vault Facilitator. This Vault Facilitator is a DSProxy allows you to batch transactions, such as depositing collateral and borrowing OD, into one transaction. We use the same DSProxy as Maker, Balancer, and many other protocols, but renamed it to be easier to understand.

* Portfolio diversification: OD offers dampened exposure to ETH's price moves
* DeFi collateral: OD can be used as an ETH supplement or alternative collateral in DeFi protocols due to the fact that it dampens ether's price moves and gives users more time to react to market shifts
* DAO reserve asset: DAOs can keep OD on their balance sheet and get exposure to ETH without being affected by its full market swings

### Will OD always return to the same initial value/peg?

OD is not designed to be pegged to anything, so it may never return to the same value it started at. Similar to many fiat currencies (EUR, GBP etc), OD will float around, being influenced by market forces (supply & demand) and by the incentives that the PID controller offers to SAFE users and OD holders.
