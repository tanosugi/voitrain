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
import { Card } from "../models";
import { schema } from "../models/schema";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardListingView(props) {
  const { card, overrides, ...rest } = props;
  const deleteOnClick = useDataStoreDeleteAction({
    id: card?.id,
    model: Card,
    schema: schema,
  });
  return (
    <View
      width="305px"
      height="75px"
      position="relative"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardListingView")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(230,238,254,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Image
        position="absolute"
        top="8%"
        bottom="8%"
        height="84%"
        left="1.64%"
        right="74.1%"
        width="24.26%"
        padding="0px 0px 0px 0px"
        src={card?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="33.33%"
        bottom="34.67%"
        left="29.84%"
        right="26.56%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={card?.word}
        {...getOverrideProps(overrides, "Apple")}
      ></Text>
      <View
        position="absolute"
        top="28%"
        bottom="29.33%"
        left="87.21%"
        right="2.3%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          deleteOnClick();
        }}
        {...getOverrideProps(overrides, "delete")}
      >
        <Icon
          width="18.666656494140625px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 18.666656494140625, height: 24 }}
          paths={[
            {
              d: "M18.6667 1.33333L14 1.33333L12.6667 0L6 0L4.66667 1.33333L0 1.33333L0 4L18.6667 4M1.33333 21.3333C1.33333 22.0406 1.61428 22.7189 2.11438 23.219C2.61448 23.719 3.29276 24 4 24L14.6667 24C15.3739 24 16.0522 23.719 16.5523 23.219C17.0524 22.7189 17.3333 22.0406 17.3333 21.3333L17.3333 5.33333L1.33333 5.33333L1.33333 21.3333Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector35512523")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="15px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="64%"
        bottom="16%"
        left="87.54%"
        right="2.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="delete"
        {...getOverrideProps(overrides, "deleteText")}
      ></Text>
      <View
        position="absolute"
        top="28%"
        bottom="29.33%"
        left="74.43%"
        right="15.08%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "pencil")}
      >
        <Icon
          width="24.003326416015625px"
          height="24.003334045410156px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 24.003326416015625,
            height: 24.003334045410156,
          }}
          paths={[
            {
              d: "M23.6133 5.39C24.1333 4.87 24.1333 4.00333 23.6133 3.51L20.4933 0.39C20 -0.13 19.1333 -0.13 18.6133 0.39L16.16 2.83L21.16 7.83M0 19.0033L0 24.0033L5 24.0033L19.7467 9.24333L14.7467 4.24333L0 19.0033Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.49%"
          bottom="12.5%"
          left="12.5%"
          right="12.49%"
          {...getOverrideProps(overrides, "Vector35632673")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="28%"
        bottom="26.67%"
        left="60.98%"
        right="27.87%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "refresh")}
      >
        <Icon
          width="22.666671752929688px"
          height="22.66666603088379px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 22.666671752929688,
            height: 22.66666603088379,
          }}
          paths={[
            {
              d: "M19.3375 3.32917C17.2833 1.275 14.4642 0 11.3333 0C8.32755 2.51651e-15 5.44487 1.19404 3.31946 3.31946C1.19404 5.44487 3.77476e-15 8.32755 0 11.3333C3.77476e-15 14.3391 1.19404 17.2218 3.31946 19.3472C5.44487 21.4726 8.32755 22.6667 11.3333 22.6667C16.6175 22.6667 21.0233 19.0542 22.2842 14.1667L19.3375 14.1667C18.1758 17.4675 15.0308 19.8333 11.3333 19.8333C9.07899 19.8333 6.91699 18.9378 5.32293 17.3437C3.72887 15.7497 2.83333 13.5877 2.83333 11.3333C2.83333 9.07899 3.72887 6.91699 5.32293 5.32293C6.91699 3.72887 9.07899 2.83333 11.3333 2.83333C13.685 2.83333 15.7817 3.81083 17.3117 5.355L12.75 9.91667L22.6667 9.91667L22.6667 0L19.3375 3.32917Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="16.67%"
          bottom="16.67%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector36122560")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="10px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="66.67%"
        bottom="6.67%"
        left="60.98%"
        right="27.87%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="update&#xA;image"
        {...getOverrideProps(overrides, "update image")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="15px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="65.33%"
        bottom="14.67%"
        left="76.39%"
        right="17.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="edit"
        {...getOverrideProps(overrides, "edit")}
      ></Text>
    </View>
  );
}
