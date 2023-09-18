---
description: Frequently asked questions about Open Dollar
---

# FAQ

### What is Open Dollar?

OD is an ETH backed stable asset with a [managed float regime](https://en.wikipedia.org/wiki/Managed\_float\_regime). The ODUSD exchange rate is determined by supply and demand while the protocol that issues OD tries to stabilize its price by constantly de or revaluing it.

The supply and demand mechanic plays out between two parties: SAFE users (those who generate OD with their ETH) and OD holders.

Compared to protocols that try to defend a [fixed exchange rate](https://www.investopedia.com/terms/f/fixedexchangerate.asp) between their native stable asset (pegged coin) and fiat (DAI/USD, sUSD/USD etc), OD's monetary policy offers a couple of advantages:

* Flexibility: the protocol can devalue or revalue OD in response to changes in OD's market price. This process transfers value between SAFE users and OD holders and incentivizes both parties to bring the market price back to a target chosen by the protocol. The mechanism is similar to countries [devaluing](https://www.investopedia.com/terms/d/devaluation.asp) or [revaluing](https://www.investopedia.com/terms/r/revaluation.asp) their currencies in order to combat a trade imbalance. The "trade imbalance" in OD's case happens between OD and SAFE users
* Discretion: the protocol itself is free to change the target exchange rate to its own advantage. It can attract or repel capital whenever it wants.

At the same time, a managed float can cause uncertainty due to the fact that the price varies day by day.

### What

### How does OD work/behave?

The long term price trajectory of OD is determined by the demand for ETH leverage. OD tends to appreciate if SAFE users deleverage and/or OD users long and it depreciates in case SAFE users leverage and/or OD users short.

To better understand how OD behaves, we need to analyze its monetary policy which is made out of four elements:

* Redemption price: this is the price that the protocol wants OD to have on the secondary market (e.g on Uniswap). The redemption price is used by SAFE users to mint OD against ETH and it is also used during Global Settlement in order to allow both SAFE and OD users to redeem collateral from the system. The redemption price almost always floats and it does not target any specific peg.
* Market price: this is the price that OD is traded at on the secondary market (on exchanges).
* Redemption rate: this is the rate at which OD is being devalued or revalued. The process of devaluing/revaluing OD consists in the redemption rate changing the redemption price.
* Global Settlement: settlement consists in shutting down the protocol and allowing both SAFE and OD users to redeem collateral from the system. Settlement uses the redemption (and not the market) price to calculate how much collateral can be redeemed by each user.

Let's walk through an example of how OD is revalued in case of ETH capital inflow (aka people are bullish on ETH):

* At time T1: ETH price is $500, OD's market and redemption prices are both $5
* At time T2: ETH price surges to $1000. OD SAFE users suddenly have more borrowing power and generate more OD against their collateral. SAFE users sell OD on the secondary market (Uniswap), causing OD's market price to crash to $4.
* At time T3: ETH remains at $1000 and OD's market price is still $4. The system wants the market price to get close to the redemption price. In order to eliminate the imbalance between the market/redemption prices, the system starts to revalue OD. Revaluing consists in setting a positive redemption rate which makes the redemption price grow every second.
* At time T4: ETH remains at $1000. OD's redemption price is now $5.1. SAFE users are starting to realize that they can now borrow less OD per one ETH, they can redeem less ETH during Settlement (because OD is now more expensive) and that it will be more expensive to close their SAFE once the market price follows the redemption price. At the same time, OD holders are starting to realize that they can redeem more and more ETH during settlement
* At time T5: ETH remains at $1000. OD's redemption price is now $5.2. OD's market price surged to $5.2 as a result of SAFE users buying OD in order to close their positions as soon as possible instead of later on when OD is more expensive

When OD is devalued (in case of ETH capital outflow), the opposite thing happens:

* SAFE users realize that they can mint more OD against their ETH and that they will be able to buy cheap OD once the market price tanks
* Token holders realize that they can redeem less ETH during Settlement and they need to short OD

### Is OD a rebase token?

No. The protocol doesn't change the amount of tokens you have. Rather, it changes the target price that the protocol wants OD to have on exchanges.

### Why would I hold OD when the system devalues the token?

This is exactly what the system wants you to ask yourself when it charges a negative redemption rate. The system is trying to incentivize OD holders to sell and bring the market price down and close to the redemption price.

### Isn't OD growth bounded by ETH growth?

Short answer: yes. Nevertheless, we decided to build a pure ETH system for several reasons:

* Social scalability: we believe the most successful DeFi protocols will be the ones that act as a trust minimized operating system. You can build on top of them without the fear that the rules will drastically change and break your application. For this reason we also want to progressively remove control over OD.
* Simplicity: it is easier to explain OD's behaviour in contrast to ETH as opposed to a basket of assets.
* Proof of concept: a system backed by a single collateral type is easier to manage than a multi-collateral one. It allows us to test our hypotheses without layering extra risk and overhead

### Can you summarize the behavior of the OD redemption rate?

1. When OD's market price > redemption price for a sustained period of time, the redemption rate will become negative
2. When OD's market price < redemption price for a sustained period of time, the redemption rate will become positive
3. When OD's market price = redemption price for a sustained period of time, the redemption rate will settle at a steady state (that may be non zero)

### What is the difference between the redemption rate and the borrow rate?

A system like OD has two types of rates:

* The borrow rate which is an interest rate charged on open SAFEs. The borrow rate will usually be fixed or bounded
* The redemption rate: this is the rate at which OD (or OD-like assets) are devalued or revalued

### Why would I want to mint OD?

* Getting paid for opening and managing SAFEs: when OD is devalued, SAFE users are "paid" because the value of their debt shrinks compared to the value of their collateral
* Capped borrow rate: in the long run, OD will have a capped (and small) borrow rate which makes the cost of maintaining a SAFE more predictable. Governance can, in theory, set the borrow rate to 0% although this prevents the system from accruing surplus that's [used to incentivize keepers](/system-contracts/sustainability-module/stability-fee-treasury) to update core components such as oracles and the PID. A 0% borrow rate would also prevent the protocol from building a surplus buffer meant to settle bad debt that couldn't be covered by collateral auctions
* Insurance for SAFEs: in the long run we can allow SAFE users to attach a wide variety of insurance contracts meant to protect their positions against liquidation
* No exposure to assets with counterparty risk: OD will only be backed by ETH. Borrowers are not exposed to riskier crypto assets or real world collateral
* Superior collateral factors: as we improve the efficiency of our [collateral auctions](/system-contracts/auction-module/fixed-discount-collateral-auction-house) and add insurance contracts for SAFEs, we can lower the collateral requirements for borrowing OD

### What are OD's use-cases?

The following is a non-exhaustive list of use-cases we envision for OD:

* Portfolio diversification: OD offers dampened exposure to ETH's price moves
* DeFi collateral: OD can be used as an ETH supplement or alternative collateral in DeFi protocols due to the fact that it dampens ether's price moves and gives users more time to react to market shifts
* DAO reserve asset: DAOs can keep OD on their balance sheet and get exposure to ETH without being affected by its full market swings

### Will OD always return to the same initial value/peg?

OD is not designed to be pegged to anything, so it may never return to the same value it started at. Similar to many fiat currencies (EUR, GBP etc), OD will float around, being influenced by market forces (supply & demand) and by the incentives that the PID controller offers to SAFE users and OD holders.
