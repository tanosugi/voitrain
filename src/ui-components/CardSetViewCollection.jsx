/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Card, CardSet } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardSetView from "./CardSetView";
import { Collection } from "@aws-amplify/ui-react";
export default function CardSetViewCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const cardItems = useDataStoreBinding({
    type: "collection",
    model: Card,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: CardSet,
  }).items.map((item) => ({
    ...item,
    Cards: cardItems.filter((model) => model.cardsetID === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CardSetViewCollection")}
    >
      {(item, index) => (
        <CardSetView
          cardSet={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardSetView>
      )}
    </Collection>
  );
}
