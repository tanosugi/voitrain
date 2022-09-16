import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type CardSetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CardSet {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CardSet, CardSetMetaData>);
  static copyOf(source: CardSet, mutator: (draft: MutableModel<CardSet, CardSetMetaData>) => MutableModel<CardSet, CardSetMetaData> | void): CardSet;
}

export declare class Card {
  readonly id: string;
  readonly word?: string | null;
  readonly image_url?: string | null;
  readonly cardsetID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Card, CardMetaData>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}