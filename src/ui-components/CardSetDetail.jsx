/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardSetDetail(props) {
  const { cardSet, overrides, ...rest } = props;
  const playOnClick = useNavigateAction({
    type: "url",
    url: `${"/practice/"}${cardSet?.id}`,
  });
  return (
    <View
      width="320px"
      height="209px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardSetDetail")}
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
        bottom="4.78%"
        left="70%"
        right="19.06%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          playOnClick();
        }}
        {...getOverrideProps(overrides, "play")}
      >
        <Icon
          width="16.041656494140625px"
          height="20.416664123535156px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.041656494140625,
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
          top="21.42%"
          bottom="20.25%"
          left="33.33%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector35512530")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="78.95%"
        bottom="4.31%"
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
    </View>
  );
}
