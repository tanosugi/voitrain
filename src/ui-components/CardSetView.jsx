/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { CardSet } from "../models";
import { schema } from "../models/schema";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardSetView(props) {
  const { cardset, overrides, ...rest } = props;
  const deleteOnClick = useDataStoreDeleteAction({
    id: cardset?.id,
    model: CardSet,
    schema: schema,
  });
  const vectorOnClick = useDataStoreDeleteAction({
    id: cardset?.id,
    model: CardSet,
    schema: schema,
  });
  return (
    <View
      width="286px"
      height="145px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(217,217,217,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardSetView")}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="11.72%"
        bottom="61.38%"
        left="55.24%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={cardset?.name}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Icon
        width="16.0416259765625px"
        height="20.416656494140625px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 16.0416259765625,
          height: 20.416656494140625,
        }}
        paths={[
          {
            d: "M0 0L0 20.4167L16.0417 10.2083L0 0Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="61.38%"
        bottom="24.54%"
        left="55.24%"
        right="39.15%"
        {...getOverrideProps(overrides, "Start")}
      ></Icon>
      <Icon
        width="18.00244140625px"
        height="18.00250244140625px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 18.00244140625,
          height: 18.00250244140625,
        }}
        paths={[
          {
            d: "M17.71 4.0425C18.1 3.6525 18.1 3.0025 17.71 2.6325L15.37 0.2925C15 -0.0975 14.35 -0.0975 13.96 0.2925L12.12 2.1225L15.87 5.8725M0 14.2525L0 18.0025L3.75 18.0025L14.81 6.9325L11.06 3.1825L0 14.2525Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="61.38%"
        bottom="26.21%"
        left="71.68%"
        right="22.03%"
        {...getOverrideProps(overrides, "Edit")}
      ></Icon>
      <View
        position="absolute"
        top="60.69%"
        bottom="24.14%"
        left="87.06%"
        right="5.24%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          deleteOnClick();
        }}
        {...getOverrideProps(overrides, "Delete")}
      >
        <Icon
          width="12.8333740234375px"
          height="16.5px"
          viewBox={{ minX: 0, minY: 0, width: 12.8333740234375, height: 16.5 }}
          paths={[
            {
              d: "M12.8333 0.916667L9.625 0.916667L8.70833 0L4.125 0L3.20833 0.916667L0 0.916667L0 2.75L12.8333 2.75M0.916667 14.6667C0.916667 15.1529 1.10982 15.6192 1.45364 15.963C1.79745 16.3068 2.26377 16.5 2.75 16.5L10.0833 16.5C10.5696 16.5 11.0359 16.3068 11.3797 15.963C11.7235 15.6192 11.9167 15.1529 11.9167 14.6667L11.9167 3.66667L0.916667 3.66667L0.916667 14.6667Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="20.83%"
          right="20.83%"
          onClick={() => {
            vectorOnClick();
          }}
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Image
        width="143px"
        height="144.55px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={cardset?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
    </View>
  );
}
