[**@eth-optimism/viem**](../README.md) • **Docs**

***

[@eth-optimism/viem](../README.md) / RelayL2ToL2MessageParameters

# RelayL2ToL2MessageParameters\<TChain, TAccount, TChainOverride, TDerivedChain\>

> **RelayL2ToL2MessageParameters**\<`TChain`, `TAccount`, `TChainOverride`, `TDerivedChain`\>: `BaseWriteContractActionParameters`\<`TChain`, `TAccount`, `TChainOverride`, `TDerivedChain`\> & `object`

## Type declaration

### sentMessageId

> **sentMessageId**: [`MessageIdentifier`](MessageIdentifier.md)

Identifier pointing to the sent message.

### sentMessagePayload

> **sentMessagePayload**: `MessagePayload`

MessagePayload of the SentMessage event *

## Type Parameters

• **TChain** *extends* `Chain` \| `undefined` = `Chain` \| `undefined`

• **TAccount** *extends* `Account` \| `undefined` = `Account` \| `undefined`

• **TChainOverride** *extends* `Chain` \| `undefined` = `Chain` \| `undefined`

• **TDerivedChain** *extends* `Chain` \| `undefined` = `DeriveChain`\<`TChain`, `TChainOverride`\>

## Defined in

[packages/viem/src/actions/relayL2ToL2Message.ts:28](https://github.com/ethereum-optimism/ecosystem/blob/5f378d3b907e5960d4ca4cd1b4965867e0f1fb40/packages/viem/src/actions/relayL2ToL2Message.ts#L28)