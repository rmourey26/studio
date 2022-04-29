/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace IStaking {
  export type StakeStruct = {
    duration: BigNumberish;
    balance: BigNumberish;
    timestamp: BigNumberish;
  };

  export type StakeStructOutput = [BigNumber, BigNumber, BigNumber] & {
    duration: BigNumber;
    balance: BigNumber;
    timestamp: BigNumber;
  };
}

export interface Stakingv3Interface extends utils.Interface {
  functions: {
    'accountDelegates(address)': FunctionFragment;
    'available(address)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'cancelDurationChange()': FunctionFragment;
    'decimals()': FunctionFragment;
    'delegateAccounts(address)': FunctionFragment;
    'duration()': FunctionFragment;
    'getStakes(address)': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'proposeDelegate(address)': FunctionFragment;
    'proposedDelegates(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'scheduleDurationChange(uint256)': FunctionFragment;
    'setDelegate(address)': FunctionFragment;
    'setDuration(uint256)': FunctionFragment;
    'setMetaData(string,string)': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'stakeFor(address,uint256)': FunctionFragment;
    'symbol()': FunctionFragment;
    'token()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unsetDelegate(address)': FunctionFragment;
    'unstake(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'accountDelegates'
      | 'available'
      | 'balanceOf'
      | 'cancelDurationChange'
      | 'decimals'
      | 'delegateAccounts'
      | 'duration'
      | 'getStakes'
      | 'name'
      | 'owner'
      | 'proposeDelegate'
      | 'proposedDelegates'
      | 'renounceOwnership'
      | 'scheduleDurationChange'
      | 'setDelegate'
      | 'setDuration'
      | 'setMetaData'
      | 'stake'
      | 'stakeFor'
      | 'symbol'
      | 'token'
      | 'totalSupply'
      | 'transferOwnership'
      | 'unsetDelegate'
      | 'unstake',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'accountDelegates', values: [string]): string;
  encodeFunctionData(functionFragment: 'available', values: [string]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'cancelDurationChange', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'delegateAccounts', values: [string]): string;
  encodeFunctionData(functionFragment: 'duration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getStakes', values: [string]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposeDelegate', values: [string]): string;
  encodeFunctionData(functionFragment: 'proposedDelegates', values: [string]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'scheduleDurationChange', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setDelegate', values: [string]): string;
  encodeFunctionData(functionFragment: 'setDuration', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setMetaData', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'stake', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'stakeFor', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'unsetDelegate', values: [string]): string;
  encodeFunctionData(functionFragment: 'unstake', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'accountDelegates', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'available', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cancelDurationChange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delegateAccounts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'duration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStakes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposeDelegate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposedDelegates', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'scheduleDurationChange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDelegate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMetaData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakeFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unsetDelegate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unstake', data: BytesLike): Result;

  events: {
    'CancelDurationChange()': EventFragment;
    'CompleteDurationChange(uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'ProposeDelegate(address,address)': EventFragment;
    'ScheduleDurationChange(uint256)': EventFragment;
    'SetDelegate(address,address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CancelDurationChange'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CompleteDurationChange'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProposeDelegate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ScheduleDurationChange'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetDelegate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export interface CancelDurationChangeEventObject {}
export type CancelDurationChangeEvent = TypedEvent<[], CancelDurationChangeEventObject>;

export type CancelDurationChangeEventFilter = TypedEventFilter<CancelDurationChangeEvent>;

export interface CompleteDurationChangeEventObject {
  newDuration: BigNumber;
}
export type CompleteDurationChangeEvent = TypedEvent<[BigNumber], CompleteDurationChangeEventObject>;

export type CompleteDurationChangeEventFilter = TypedEventFilter<CompleteDurationChangeEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface ProposeDelegateEventObject {
  delegate: string;
  account: string;
}
export type ProposeDelegateEvent = TypedEvent<[string, string], ProposeDelegateEventObject>;

export type ProposeDelegateEventFilter = TypedEventFilter<ProposeDelegateEvent>;

export interface ScheduleDurationChangeEventObject {
  unlockTimestamp: BigNumber;
}
export type ScheduleDurationChangeEvent = TypedEvent<[BigNumber], ScheduleDurationChangeEventObject>;

export type ScheduleDurationChangeEventFilter = TypedEventFilter<ScheduleDurationChangeEvent>;

export interface SetDelegateEventObject {
  delegate: string;
  account: string;
}
export type SetDelegateEvent = TypedEvent<[string, string], SetDelegateEventObject>;

export type SetDelegateEventFilter = TypedEventFilter<SetDelegateEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokens: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Stakingv3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Stakingv3Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accountDelegates(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    available(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber] & { total: BigNumber }>;

    cancelDurationChange(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    delegateAccounts(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStakes(
      account: string,
      overrides?: CallOverrides,
    ): Promise<
      [IStaking.StakeStructOutput] & {
        accountStake: IStaking.StakeStructOutput;
      }
    >;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposeDelegate(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    proposedDelegates(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    scheduleDurationChange(
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setDelegate(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setDuration(
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMetaData(
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    stakeFor(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    unsetDelegate(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  accountDelegates(arg0: string, overrides?: CallOverrides): Promise<string>;

  available(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  cancelDurationChange(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  delegateAccounts(arg0: string, overrides?: CallOverrides): Promise<string>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  getStakes(account: string, overrides?: CallOverrides): Promise<IStaking.StakeStructOutput>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposeDelegate(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  proposedDelegates(arg0: string, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  scheduleDurationChange(
    delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setDelegate(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setDuration(
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMetaData(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  stakeFor(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  unsetDelegate(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  unstake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    accountDelegates(arg0: string, overrides?: CallOverrides): Promise<string>;

    available(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    cancelDurationChange(overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    delegateAccounts(arg0: string, overrides?: CallOverrides): Promise<string>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    getStakes(account: string, overrides?: CallOverrides): Promise<IStaking.StakeStructOutput>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposeDelegate(delegate: string, overrides?: CallOverrides): Promise<void>;

    proposedDelegates(arg0: string, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    scheduleDurationChange(delay: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setDelegate(account: string, overrides?: CallOverrides): Promise<void>;

    setDuration(_duration: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setMetaData(_name: string, _symbol: string, overrides?: CallOverrides): Promise<void>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeFor(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    unsetDelegate(delegate: string, overrides?: CallOverrides): Promise<void>;

    unstake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'CancelDurationChange()'(): CancelDurationChangeEventFilter;
    CancelDurationChange(): CancelDurationChangeEventFilter;

    'CompleteDurationChange(uint256)'(newDuration?: BigNumberish | null): CompleteDurationChangeEventFilter;
    CompleteDurationChange(newDuration?: BigNumberish | null): CompleteDurationChangeEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'ProposeDelegate(address,address)'(delegate?: string | null, account?: string | null): ProposeDelegateEventFilter;
    ProposeDelegate(delegate?: string | null, account?: string | null): ProposeDelegateEventFilter;

    'ScheduleDurationChange(uint256)'(unlockTimestamp?: BigNumberish | null): ScheduleDurationChangeEventFilter;
    ScheduleDurationChange(unlockTimestamp?: BigNumberish | null): ScheduleDurationChangeEventFilter;

    'SetDelegate(address,address)'(delegate?: string | null, account?: string | null): SetDelegateEventFilter;
    SetDelegate(delegate?: string | null, account?: string | null): SetDelegateEventFilter;

    'Transfer(address,address,uint256)'(from?: string | null, to?: string | null, tokens?: null): TransferEventFilter;
    Transfer(from?: string | null, to?: string | null, tokens?: null): TransferEventFilter;
  };

  estimateGas: {
    accountDelegates(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    available(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    cancelDurationChange(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    delegateAccounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    getStakes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposeDelegate(delegate: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    proposedDelegates(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    scheduleDurationChange(
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setDelegate(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setDuration(
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMetaData(
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    stakeFor(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    unsetDelegate(delegate: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    unstake(amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    accountDelegates(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    available(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelDurationChange(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegateAccounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakes(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeDelegate(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    proposedDelegates(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    scheduleDurationChange(
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setDelegate(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setDuration(
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMetaData(
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stakeFor(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    unsetDelegate(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
