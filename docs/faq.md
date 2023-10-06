---
description: Frequently asked questions about Open Dollar
---

# FAQ

### What is Open Dollar?

Open Dollar is the protocol that issues OD, a floating $1.00 pegged stablecoin backed by Liquid Staking Tokens with NFT controlled vaults that is built for Arbitrum.

### How does OD stay stable?

OD is an overcollateralized stable asset with a [managed float regime](https://en.wikipedia.org/wiki/Managed\_float\_regime). The OD/USD exchange rate is determined by supply and demand while the protocol that issues OD tries to stabilize its price by constantly de- or revaluing it.

The supply and demand mechanic plays out between two parties: vault users (those who generate OD with their collateral tokens) and OD holders.

Compared to protocols that try to defend a [fixed exchange rate](https://www.investopedia.com/terms/f/fixedexchangerate.asp) between their native stable asset (pegged coin), OD's monetary policy offers a couple of advantages:

* Flexibility: the protocol can devalue or revalue OD in response to changes in OD's market price. This process transfers value between vault users and OD holders and incentivizes both parties to bring the market price back to a target chosen by the protocol. The mechanism is similar to countries [devaluing](https://www.investopedia.com/terms/d/devaluation.asp) or [revaluing](https://www.investopedia.com/terms/r/revaluation.asp) their currencies in order to combat a trade imbalance. The "trade imbalance" in OD's case happens between OD and vault users

* Discretion: the protocol itself is free to change the target exchange rate to its own advantage. It can attract or repel capital whenever it wants.

At the same time, a managed float can cause uncertainty due to the fact that the price varies day by day.

### What types of collateral are used in Open Dollar?
Initially, popular Liquid Staking Tokens and some Arbitrum native assets can be used to borrow OD against:
- [wstETH](https://www.coingecko.com/en/coins/wrapped-steth)
- [rETH](https://www.coingecko.com/en/coins/rocket-pool-eth)
- [cbETH](https://www.coingecko.com/en/coins/coinbase-wrapped-staked-eth)
- [ARB](https://www.coingecko.com/en/coins/arbitrum)
- [MAGIC](https://www.coingecko.com/en/coins/magic)

More assets will be added as the community sees fit. We aim to be extremely flexible and fast to adopt new LSTs and high quality collateral.

### How can more collateral types be added?
A DAO controlled by Open Dollar Governance (ODG) token holders can add more types of collateral at any time through voting.

### What does governance minimization mean?
Open Dollar is guided by the idea that to ensure the longevity and long term security of the protocol, as few parameters as possible should be governed by people and token holders. Instead, the system reacting to market rates should control nearly everything. The ODG holders can create new vault types with different kinds of collateral, change the system debt limit, decide where a portion of the fees but very few other things.

### How do NFVs (NFT Vaults) work?
Where other lending protocols in DeFi tie debt to a user's account, NFVs allow us to tie the debt and collateral to a particular Non-Fungible Token that is easy to transfer, view in a wallet, and buy or sell. There is 1 NFT for each vault and their IDs correspond.

### What happens if I send my NFV to someone else?
The owner of a particular NFV owns both the debt and the collateral tokens for that particular vault. Be extremely cautious when transfering, buying, and selling NFVs, as the new owner is responsible for both the debt and the tokens inside.

### What is the advantage of NFVs?
You probably would never take out a 30 year loan to buy a house if you could not sell your house at some point during the life of the loan. But that is how lending mostly works in DeFi today. By making the ownership of vaults, debt, and collateral more easily tradable users can sell their positions easily without having to close them out first. Use cases could include market participants redeeming OD by buying NFVs to access high quality collateral, liquidation protection through selling NFVs with limit orders, and use of any existing NFT infrastructure.

### What happens to an NFV when a vault is liquidated?
Vaults are up for liquidation if the value of their collateral ever falls below the required collateralization for the amount of debt minted against it. Liquidated vaults still exist and so does the corresponding NFV. They just have 0 debt and 0 value of collateral in them after liquidation has completed.

### Can I add more collateral to my vault?
Yes, you can add more collateral to your vault at any time. Depending on your collateralization ratio you can then also borrow more.

### How should I avoid liquidation?
Each type of vault has its own collateralization ratio that is required. The “collateralization ratio” is the ratio of the value of the collateral deposited in your vault to the value of the OD borrowed against it. When borrowing OD be sure to leave a margin that accounts for market volatility and top up your vault with more collateral as needed.

### Where can I use my OD tokens?
OD is a standard ERC-20 token which can be used accross any bridge, DeFi protocols, exchanges, etc. that support it. Have an idea for an OD integration? Let us know in [discord](https://discord.opendollar.com/)!

### What networks is Open Dollar deployed on?
Open Dollar is currently only deployed on Arbitrum. There's also a testnet version deployed on Arbtrium-Goerli.

### Where can I trade my NFV?
You can trade your vaults on any NFT marketplace, like [OpenSea](https://opensea.io/) for example. Keep in mind that when you sell your Non-Fungible Vault you’re also selling all collateral and debt associated with it. Any app or tool which supports the ERC-721 token standard will also support Open Dollar NFVs.

### Is OD a rebase token that changes my balance over time?

No. The protocol doesn't change the amount of tokens you have. Rather, it changes the target price that the protocol wants OD to have on exchanges. This makes it easier to use OD throughout DeFi.

### How do fees work?
Open Dollar earns fees by charging a transparent and low interest rate on the amount of OD borrowed from the protocol. This is the stability fee. A portion of OD revenue is sent directly to the ODG governed DAO treasury, and a portion is auctioned off to buy and burn ODG tokens.

### What is the "Vault Facilitator"? 
When you connect to Open Dollar’s app for the first time you are asked to create a Vault Facilitator. This Vault Facilitator is a DSProxy allows you to batch transactions, such as depositing collateral and borrowing OD, into one transaction. We use the same DSProxy as Maker, Balancer, and many other protocols, but renamed it to be easier to understand.

### Isn't OD growth bounded by ETH and LST growth?

Short answer: yes. Open Dollar can meet any demand and mint any amount of OD, so long as their is more value of collateral that participants are willing to borrow against.

### Can you summarize the behavior of the OD redemption rate?

1. When OD's market price > redemption price for a sustained period of time, the redemption rate will become negative
2. When OD's market price < redemption price for a sustained period of time, the redemption rate will become positive
3. When OD's market price = redemption price for a sustained period of time, the redemption rate will settle at a steady state (that may be non zero)

### What is the difference between the redemption rate and the borrow rate?

A system like OD has two types of rates:

* The borrow rate which is an interest rate charged on open vaults. The borrow is fixed for different types of collateral and also has a max cap.

* The redemption rate: this is the rate at which OD tokens are devalued or revalued in the system.

### Why would I want to mint OD?

* Getting paid for opening and managing vaults: when OD is devalued, vault users are "paid" because the value of their debt shrinks compared to the value of their collateral

* Capped borrow rate: in the long run, OD will have a capped (and small) borrow rate which makes the cost of maintaining a vault more predictable. Governance can, in theory, set the borrow rate to 0% although this prevents the system from accruing surplus that's used to incentivize to update core components such as oracles and the PID.

* Insurance for vaults: in the long run we can allow SAFE users to attach a wide variety of insurance contracts meant to protect their positions against liquidation

* No exposure to assets with counterparty risk: OD will only be backed by ETH. Borrowers are not exposed to riskier crypto assets or real world collateral

* Superior collateral factors: as we improve the efficiency of our [collateral auctions](/system-contracts/auction-module/fixed-discount-collateral-auction-house) and add insurance contracts for SAFEs, we can lower the collateral requirements for borrowing OD

### Will OD always return to the same initial value/peg?

OD is not designed to be pegged to anything, so it may never return to the exact same value it started at. Similar to many fiat currencies (EUR, USD, etc), OD's price will float, being influenced by market forces (supply & demand) and by the incentives that the PID controller offers to vault users and OD holders. Those incentives are designed to target a $1.00 market price but the actual price will fluctuate up or down.

### How does the OD price work/behave?

The long term price trajectory of OD is determined by the demand for leverage on the types of tokens Open Dollar allows as collateral. OD tends to appreciate if vault users deleverage and/or OD users long and it depreciates in case vault users leverage and/or OD users short.

To better understand how OD behaves, we need to analyze its monetary policy which is made out of four elements:

* Redemption price: this is the price that the protocol wants OD to have on the secondary market (e.g on Uniswap). The redemption price is used by SAFE users to mint OD against ETH and it is also used during Global Settlement in order to allow both SAFE and OD users to redeem collateral from the system. The redemption price almost always floats and it does not target any specific peg.

* Market price: this is the price that OD is traded at on the secondary market (on exchanges).

* Redemption rate: this is the rate at which OD is being devalued or revalued. The process of devaluing/revaluing OD consists in the redemption rate changing the redemption price.

* Global Settlement: settlement consists in shutting down the protocol and allowing both SAFE and OD users to redeem collateral from the system. Settlement uses the redemption (and not the market) price to calculate how much collateral can be redeemed by each user.

Let's walk through an example of how OD is revalued in case of capital inflow of some Liquid Staked Token that we can call lstETH (meaning people are bullish on lstETH ):

* At time T1: lstETH price is $500, OD's market and redemption prices are both $1.

* At time T2: lstETH price surges to $1000. Open Dollar vault users suddenly have more borrowing power and generate more OD against their collateral. Those users sell OD on the secondary market (like an exchange), causing OD's market price to drop to $0.95. Users might be selling to create leveraged long positions, or to access capital without having to sell their lstETH.

* At time T3: lstETH remains at $1000 and OD's market price is still $0.95. The protocol wants the market price to get close to the redemption price. In order to eliminate the imbalance between the market/redemption prices, the system starts to revalue OD. Revaluing consists in setting a positive redemption rate which makes the redemption price grow every second.

* At time T4: lstETH remains at $1000. OD's redemption price is now $1.05. SAFE users are starting to realize that they can now borrow less OD per one lstETH, they can redeem less lstETH during Settlement (because OD is now more expensive) and that it will be more expensive to close their SAFE once the market price follows the redemption price. At the same time, OD holders are starting to realize that they can redeem more and more ETH during settlement.

* At time T5: lstETH remains at $1000. OD's redemption price is now $1.10. OD's market price surged to $1.01 as a result of SAFE users buying OD in order to close their positions as soon as possible instead of later on when OD is more expensive.

When OD is devalued (in case of lstETH capital outflow), the opposite thing happens:

* Vault users realize that they can mint more OD against their ETH and that they will be able to buy cheap OD once the market price goes down.

* Token holders realize that they can redeem less lstETH during Settlement and they need to short OD.

### Why would I hold OD when the system devalues the token?

This is exactly what the system wants you to ask yourself when it charges a negative redemption rate. The system is trying to incentivize OD holders to sell and bring the market price down and close to the redemption price.