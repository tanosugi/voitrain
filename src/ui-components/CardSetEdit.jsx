/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardSetEdit(props) {
  const { cardset, card, overrides, ...rest } = props;
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
        src={cardset?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <View
        width="320px"
        height="28px"
        position="absolute"
        top="219px"
        left="calc(50% - 160px - 0px)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        label={card?.word}
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Flex
        gap="8px"
        position="absolute"
        top="59.9%"
        bottom="20.3%"
        left="3.44%"
        right="41.56%"
        direction="column"
        width="176px"
        padding="0px 114px 0px 0px"
        {...getOverrideProps(overrides, "TextField")}
      >
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
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
              children={cardset?.name}
              {...getOverrideProps(overrides, "placeholder")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
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
        {...getOverrideProps(overrides, "Vector438")}
      ></Icon>
      <View
        position="absolute"
        top="81.19%"
        bottom="1.49%"
        left="51.25%"
        right="37.81%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "play")}
      >
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
          top="21.42%"
          bottom="20.25%"
          left="33.33%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector4313")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="81.68%"
        bottom="0.99%"
        left="66.88%"
        right="22.19%"
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
          {...getOverrideProps(overrides, "Vector4315")}
        ></Icon>
      </View>
      <Icon
        width="25px"
        height="25px"
        viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
        paths={[
          {
            d: "M19.4444 0L2.77778 0C1.25 0 0 1.25 0 2.77778L0 22.2222C0 23.7639 1.25 25 2.77778 25L12.2361 25C11.6944 24.0833 11.3472 23.0556 11.2083 22C9.02778 21.2639 7.86111 18.8889 8.61111 16.7083C9.18056 15.0417 10.7361 13.8889 12.5 13.8889C13.1111 13.8889 13.7222 14.0278 14.2778 14.2917C17.4583 11.8056 21.9861 11.9306 25 14.6389L25 5.55556L19.4444 0ZM16.6667 8.33333L2.77778 8.33333L2.77778 2.77778L16.6667 2.77778L16.6667 8.33333ZM17.7083 25L13.8889 20.8333L15.5 19.2222L17.7083 21.4306L22.6944 16.4444L24.3056 18.4028L17.7083 25Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="83.66%"
        bottom="3.96%"
        left="86.88%"
        right="5.31%"
        {...getOverrideProps(overrides, "Vector4317")}
      ></Icon>
    </View>
  );
}
