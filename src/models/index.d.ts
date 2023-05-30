import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type PresetCardSetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CardSetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPresetCardSet = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPresetCardSet = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PresetCardSet = LazyLoading extends LazyLoadingDisabled ? EagerPresetCardSet : LazyPresetCardSet

export declare const PresetCardSet: (new (init: ModelInit<PresetCardSet, PresetCardSetMetaData>) => PresetCardSet) & {
  copyOf(source: PresetCardSet, mutator: (draft: MutableModel<PresetCardSet, PresetCardSetMetaData>) => MutableModel<PresetCardSet, PresetCardSetMetaData> | void): PresetCardSet;
}

type EagerCardSet = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCardSet = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CardSet = LazyLoading extends LazyLoadingDisabled ? EagerCardSet : LazyCardSet

export declare const CardSet: (new (init: ModelInit<CardSet, CardSetMetaData>) => CardSet) & {
  copyOf(source: CardSet, mutator: (draft: MutableModel<CardSet, CardSetMetaData>) => MutableModel<CardSet, CardSetMetaData> | void): CardSet;
}

type EagerCard = {
  readonly id: string;
  readonly word?: string | null;
  readonly image_url?: string | null;
  readonly cardsetID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCard = {
  readonly id: string;
  readonly word?: string | null;
  readonly image_url?: string | null;
  readonly cardsetID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Card = LazyLoading extends LazyLoadingDisabled ? EagerCard : LazyCard

export declare const Card: (new (init: ModelInit<Card, CardMetaData>) => Card) & {
  copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}