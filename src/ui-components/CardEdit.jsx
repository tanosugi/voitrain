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
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardEdit(props) {
  const { card, overrides, ...rest } = props;
  const vectorFourThreeOneNineOnClick = useDataStoreDeleteAction({
    id: card?.id,
    model: Card,
    schema: schema,
  });
  return (
    <View
      width="278px"
      height="103px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardEdit")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="38.83%"
        height="61.17%"
        left="0%"
        right="73.38%"
        width="26.62%"
        padding="0px 0px 0px 0px"
        src={card?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="0"
        position="absolute"
        top="61.17%"
        bottom="0%"
        left="0%"
        right="77.7%"
        direction="column"
        width="62px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "InputGroup")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="300px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={card?.word}
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
        </Flex>
      </Flex>
      <View
        position="absolute"
        top="17.48%"
        bottom="48.54%"
        left="94.24%"
        right="-6.83%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "delete")}
      >
        <Icon
          width="20.4166259765625px"
          height="26.25px"
          viewBox={{ minX: 0, minY: 0, width: 20.4166259765625, height: 26.25 }}
          paths={[
            {
              d: "M20.4167 1.45833L15.3125 1.45833L13.8542 0L6.5625 0L5.10417 1.45833L0 1.45833L0 4.375L20.4167 4.375M1.45833 23.3333C1.45833 24.1069 1.76562 24.8487 2.31261 25.3957C2.85959 25.9427 3.60145 26.25 4.375 26.25L16.0417 26.25C16.8152 26.25 17.5571 25.9427 18.1041 25.3957C18.651 24.8487 18.9583 24.1069 18.9583 23.3333L18.9583 5.83333L1.45833 5.83333L1.45833 23.3333Z",
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
            vectorFourThreeOneNineOnClick();
          }}
          {...getOverrideProps(overrides, "Vector4319")}
        ></Icon>
      </View>
      <Icon
        width="24px"
        height="24px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        paths={[
          {
            d: "M20.475 3.525C18.3 1.35 15.315 0 12 0C8.8174 2.66454e-15 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 3.9968e-15 8.8174 0 12C3.9968e-15 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C17.595 24 22.26 20.175 23.595 15L20.475 15C19.245 18.495 15.915 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.49 3 16.71 4.035 18.33 5.67L13.5 10.5L24 10.5L24 0L20.475 3.525Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="22.33%"
        bottom="54.37%"
        left="28.06%"
        right="63.31%"
        {...getOverrideProps(overrides, "Vector4321")}
      ></Icon>
    </View>
  );
}
