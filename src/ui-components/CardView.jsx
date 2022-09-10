/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardView(props) {
  const { card, overrides, ...rest } = props;
  return (
    <View
      width="241.03px"
      height="391px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(217,217,217,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardView")}
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
        top="67.52%"
        bottom="21.74%"
        left="30.7%"
        right="0.01%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={card?.word}
        {...getOverrideProps(overrides, "TextInCard")}
      ></Text>
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
        top="83.12%"
        bottom="6.14%"
        left="30.7%"
        right="0.01%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="_ _ _ _ _"
        {...getOverrideProps(overrides, "SpokenText")}
      ></Text>
      <Image
        position="absolute"
        top="0%"
        bottom="37.37%"
        height="62.63%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        src={card?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Icon
        width="25px"
        height="34px"
        viewBox={{ minX: 0, minY: 0, width: 25, height: 34 }}
        paths={[
          {
            d: "M12.5 0C13.9208 7.94686e-16 15.2834 0.5656 16.2881 1.57237C17.2927 2.57915 17.8571 3.94463 17.8571 5.36842L17.8571 16.1053C17.8571 17.5291 17.2927 18.8945 16.2881 19.9013C15.2834 20.9081 13.9208 21.4737 12.5 21.4737C11.0792 21.4737 9.71659 20.9081 8.71193 19.9013C7.70727 18.8945 7.14286 17.5291 7.14286 16.1053L7.14286 5.36842C7.14286 3.94463 7.70727 2.57915 8.71193 1.57237C9.71659 0.5656 11.0792 1.58937e-15 12.5 0M25 16.1053C25 22.4221 20.3393 27.6295 14.2857 28.5063L14.2857 34L10.7143 34L10.7143 28.5063C4.66071 27.6295 0 22.4221 0 16.1053L3.57143 16.1053C3.57143 18.4783 4.51211 20.7541 6.18655 22.432C7.86098 24.11 10.132 25.0526 12.5 25.0526C14.868 25.0526 17.139 24.11 18.8135 22.432C20.4879 20.7541 21.4286 18.4783 21.4286 16.1053L25 16.1053Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="84.14%"
        bottom="7.16%"
        left="9.96%"
        right="79.67%"
        {...getOverrideProps(overrides, "Vector4330")}
      ></Icon>
      <Icon
        width="23.25px"
        height="23.386672973632812px"
        viewBox={{ minX: 0, minY: 0, width: 23.25, height: 23.386672973632812 }}
        paths={[
          {
            d: "M14.2083 0L14.2083 2.74667C17.9412 3.89333 20.6667 7.46667 20.6667 11.6933C20.6667 15.92 17.9412 19.48 14.2083 20.6267L14.2083 23.3867C19.375 22.1733 23.25 17.4 23.25 11.6933C23.25 5.98667 19.375 1.21333 14.2083 0ZM17.4375 11.6933C17.4375 9.33333 16.1458 7.30667 14.2083 6.32L14.2083 17.0267C16.1458 16.08 17.4375 14.04 17.4375 11.6933ZM0 7.69333L0 15.6933L5.16667 15.6933L11.625 22.36L11.625 1.02667L5.16667 7.69333L0 7.69333Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="69.82%"
        bottom="24.2%"
        left="9.96%"
        right="80.4%"
        {...getOverrideProps(overrides, "Vector4634")}
      ></Icon>
    </View>
  );
}
