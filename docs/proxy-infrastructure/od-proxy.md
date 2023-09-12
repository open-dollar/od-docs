---
description: Execute transactions with the use of a proxy
---

# ODProxy

**Smart contract code:** [**ODProxy**](https://github.com/UseKeyp/od-contracts/blob/main/src/contracts/proxies/ODProxy.sol)****

## 1. Summary <a href="#1-introduction-summary" id="1-introduction-summary"></a>

A user can execute functions through this proxy by passing in the bytecode for the target contract as well as the calldata for the function they want to call. This proxy is non-transferrable.

## 2. Contract Variables & Functions <a href="#2-contract-details" id="2-contract-details"></a>

**Variables**

* `OWNER` - immutable address of user account

**Functions**

* `execute(target: address, data: bytes)` - execute a delegatecall in the context of the proxy

