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
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { CardSet } from "../models";
import { schema } from "../models/schema";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardSetDetailView(props) {
  const { cardSet, overrides, ...rest } = props;
  const closeOnClick = useNavigateAction({ type: "url", url: "/mycards" });
  const playOnClick = useNavigateAction({
    type: "url",
    url: `${"/practice/"}${cardSet?.id}`,
  });
  const deleteOnClick = useDataStoreDeleteAction({
    id: cardSet?.id,
    model: CardSet,
    schema: schema,
  });
  return (
    <View
      width="320px"
      height="209px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardSetDetailView")}
    >
      <View
        position="absolute"
        top="99.52%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Divider")}
      >
        <Icon
          width="320px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 320, height: 1 }}
          paths={[
            {
              d: "M0 0L320 0L320 -1L0 -1L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          position="absolute"
          top="calc(50% - 0px - 0.5px)"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
      </View>
      <Image
        position="absolute"
        top="0%"
        bottom="48.33%"
        height="51.67%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        src={cardSet?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <View
        width="35px"
        height="35px"
        position="absolute"
        top="0px"
        left="285px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.8)"
        onClick={() => {
          closeOnClick();
        }}
        {...getOverrideProps(overrides, "close")}
      >
        <Icon
          width="35px"
          height="35px"
          viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
          paths={[
            {
              d: "M17.5 0C7.8225 0 0 7.8225 0 17.5C0 27.1775 7.8225 35 17.5 35C27.1775 35 35 27.1775 35 17.5C35 7.8225 27.1775 0 17.5 0ZM26.25 23.7825L23.7825 26.25L17.5 19.9675L11.2175 26.25L8.75 23.7825L15.0325 17.5L8.75 11.2175L11.2175 8.75L17.5 15.0325L23.7825 8.75L26.25 11.2175L19.9675 17.5L26.25 23.7825Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector35512528")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="78.47%"
        bottom="0.48%"
        left="55.94%"
        right="31.87%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          playOnClick();
        }}
        {...getOverrideProps(overrides, "play")}
      >
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
          top="30px"
          left="1px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="practice"
          {...getOverrideProps(overrides, "practice")}
        ></Text>
        <Icon
          width="16.041671752929688px"
          height="20.416664123535156px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.041671752929688,
            height: 20.416664123535156,
          }}
          paths={[
            {
              d: "M0 0L0 20.4167L16.0417 10.2083L0 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="17.04%"
          bottom="36.56%"
          left="35.04%"
          right="23.82%"
          {...getOverrideProps(overrides, "Vector35512530")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="78.95%"
        bottom="1.91%"
        left="86.56%"
        right="2.5%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          deleteOnClick();
        }}
        {...getOverrideProps(overrides, "delete")}
      >
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
          top="29px"
          left="2px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="delete"
          {...getOverrideProps(overrides, "deleteText")}
        ></Text>
        <Icon
          width="20.416656494140625px"
          height="26.25px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.416656494140625,
            height: 26.25,
          }}
          paths={[
            {
              d: "M20.4167 1.45833L15.3125 1.45833L13.8542 0L6.5625 0L5.10417 1.45833L0 1.45833L0 4.375L20.4167 4.375M1.45833 23.3333C1.45833 24.1069 1.76562 24.8487 2.31261 25.3957C2.85959 25.9427 3.60145 26.25 4.375 26.25L16.0417 26.25C16.8152 26.25 17.5571 25.9427 18.1041 25.3957C18.651 24.8487 18.9583 24.1069 18.9583 23.3333L18.9583 5.83333L1.45833 5.83333L1.45833 23.3333Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="10.94%"
          bottom="23.44%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector35512532")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="57.89%"
        bottom="30.62%"
        left="4.69%"
        right="9.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={cardSet?.name}
        {...getOverrideProps(overrides, "placeholder")}
      ></Text>
      <View
        position="absolute"
        top="79.43%"
        bottom="1.91%"
        left="73.13%"
        right="16.88%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "pencil")}
      >
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
          top="28px"
          left="4px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="edit"
          {...getOverrideProps(overrides, "edit")}
        ></Text>
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
          top="10.25%"
          bottom="28.21%"
          left="12.5%"
          right="12.49%"
          {...getOverrideProps(overrides, "Vector35812554")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="53.59%"
        bottom="25.36%"
        left="75.63%"
        right="3.44%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "refresh")}
      >
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
          top="29px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="update image"
          {...getOverrideProps(overrides, "update image")}
        ></Text>
        <Icon
          width="28px"
          height="28px"
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
          paths={[
            {
              d: "M23.8875 4.1125C21.35 1.575 17.8675 0 14 0C10.287 3.10862e-15 6.72601 1.475 4.10051 4.10051C1.475 6.72601 4.66294e-15 10.287 0 14C4.66294e-15 17.713 1.475 21.274 4.10051 23.8995C6.72601 26.525 10.287 28 14 28C20.5275 28 25.97 23.5375 27.5275 17.5L23.8875 17.5C22.4525 21.5775 18.5675 24.5 14 24.5C11.2152 24.5 8.54451 23.3938 6.57538 21.4246C4.60625 19.4555 3.5 16.7848 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.905 3.5 19.495 4.7075 21.385 6.615L15.75 12.25L28 12.25L28 0L23.8875 4.1125Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="6.82%"
          bottom="29.55%"
          left="28.36%"
          right="29.85%"
          {...getOverrideProps(overrides, "Vector36092552")}
        ></Icon>
      </View>
    </View>
  );
}
