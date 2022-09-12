/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardListingView(props) {
  const { card, overrides, ...rest } = props;
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
        backgroundColor="rgba(255,255,255,1)"
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
          {...getOverrideProps(overrides, "Vector34462715")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="30.67%"
        bottom="32%"
        left="76.07%"
        right="14.75%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "pencil")}
      >
        <Icon
          width="21.0029296875px"
          height="21.002914428710938px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 21.0029296875,
            height: 21.002914428710938,
          }}
          paths={[
            {
              d: "M20.6617 4.71625C21.1167 4.26125 21.1167 3.50292 20.6617 3.07125L17.9317 0.34125C17.5 -0.11375 16.7417 -0.11375 16.2867 0.34125L14.14 2.47625L18.515 6.85125M0 16.6279L0 21.0029L4.375 21.0029L17.2783 8.08792L12.9033 3.71292L0 16.6279Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.49%"
          bottom="12.5%"
          left="12.5%"
          right="12.49%"
          {...getOverrideProps(overrides, "Vector34462717")}
        ></Icon>
      </View>
    </View>
  );
}
