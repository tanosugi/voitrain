/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardSetEdit(props) {
  const { cardSet, overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="202px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardSetEdit")}
    >
      <Image
        width="320px"
        height="108px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={cardSet?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
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
        bottom="82.67%"
        left="89.06%"
        right="0%"
        {...getOverrideProps(overrides, "Vector34462720")}
      ></Icon>
      <View
        position="absolute"
        top="81.19%"
        bottom="1.49%"
        left="56.56%"
        right="32.5%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "play")}
      >
        <Icon
          width="16.041656494140625px"
          height="20.416671752929688px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.041656494140625,
            height: 20.416671752929688,
          }}
          paths={[
            {
              d: "M0 0L0 20.4167L16.0417 10.2083L0 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="21.42%"
          bottom="20.25%"
          left="33.33%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector34462722")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="81.68%"
        bottom="0.99%"
        left="86.56%"
        right="2.5%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "delete")}
      >
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
          top="12.5%"
          bottom="12.5%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector34462724")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="170px"
        left="235px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "pencil")}
      >
        <Icon
          width="18.00250244140625px"
          height="18.00250244140625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.00250244140625,
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
          top="12.49%"
          bottom="12.5%"
          left="12.5%"
          right="12.49%"
          {...getOverrideProps(overrides, "Vector34462726")}
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
        top="59.9%"
        bottom="28.22%"
        left="4.69%"
        right="9.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={cardSet?.name}
        {...getOverrideProps(overrides, "Fruits")}
      ></Text>
    </View>
  );
}
