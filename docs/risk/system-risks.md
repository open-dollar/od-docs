# Protocol Risks

Using Open Dollar and/or its associated stable asset, OD, doesn't come without risk. Before you decide to deposit your assets in the protocol or acquire the stable asset, you should do your research and understand the risks involved.

This section will give an overview of the main risks associated with the protocol. If you'd like to dive deeper, you can check out every [module](/system-contracts/core) in the System Contracts section.

### Smart Contract Bugs

The core GEB contracts, which Open Dollar is built with, were audited by [OpenZeppelin](https://github.com/reflexer-labs/geb-audits/tree/master/open-zeppelin/core-contracts). Other helper contracts were audited by [Quantstamp](https://github.com/reflexer-labs/geb-audits/tree/master/quantstamp/helper-contracts).

Additional changes were made by the Open Dollar team and will be audited Q4 2023.

Security audits do not completely eliminate smart contract risk. We urge you not to put your life savings or money you can't afford to lose into any defi protocol.

### DAO Control

ODG token holders can vote to update the debt ceiling for the protocol, add new collateral types, and choose the over-collateralization rates for new vaults. It's possible that the DAO could create unsafe or unsustainable conditions for the protocol in the future.

### PID Controller

PID control is still a novel concept in DeFi. No other stable asset prior to RAI has been managed by an on-chain controller and there is no historical data that can help with the controller's modelling and simulations.

If the controller is too slow it may be completely ineffective in stabilizing RAI or other stablecoins. If it's too strong, it may destabilize the system.

**NOTE**: check out more PID failure modes in [this section](/risk/pid-failure-modes-and-responses).

### Suboptimal Parameters

Governance may set suboptimal parameters for:

* Debt auctions which can lead to an excessive amount of protocol tokens being printed
* Collateral auctions which may not give a good enough incentive for bidding
* Global Settlement which may delay SAFE processing and collateral redemption indefinitely

There are many more parameters which may be suboptimal. Check the [System Contracts modules](/system-contracts/core) for more details.

### Additional Resources

The [Reflexor whitepaper](https://github.com/reflexer-labs/whitepapers).
