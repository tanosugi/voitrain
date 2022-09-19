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
        top="84.91%"
        bottom="4.35%"
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
      <View
        position="absolute"
        top="85.93%"
        bottom="5.12%"
        left="6.64%"
        right="78.84%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Microphone")}
      >
        <Icon
          width="20.41668701171875px"
          height="27.708328247070312px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.41668701171875,
            height: 27.708328247070312,
          }}
          paths={[
            {
              d: "M10.2083 0C11.3687 6.4763e-16 12.4815 0.460936 13.3019 1.28141C14.1224 2.10188 14.5833 3.21468 14.5833 4.375L14.5833 13.125C14.5833 14.2853 14.1224 15.3981 13.3019 16.2186C12.4815 17.0391 11.3687 17.5 10.2083 17.5C9.04801 17.5 7.93521 17.0391 7.11474 16.2186C6.29427 15.3981 5.83333 14.2853 5.83333 13.125L5.83333 4.375C5.83333 3.21468 6.29427 2.10188 7.11474 1.28141C7.93521 0.460936 9.04801 1.29526e-15 10.2083 0M20.4167 13.125C20.4167 18.2729 16.6104 22.5167 11.6667 23.2313L11.6667 27.7083L8.75 27.7083L8.75 23.2313C3.80625 22.5167 0 18.2729 0 13.125L2.91667 13.125C2.91667 15.0589 3.68489 16.9135 5.05235 18.281C6.4198 19.6484 8.27446 20.4167 10.2083 20.4167C12.1422 20.4167 13.9969 19.6484 15.3643 18.281C16.7318 16.9135 17.5 15.0589 17.5 13.125L20.4167 13.125Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="8.33%"
          bottom="12.5%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector35512504")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="68.54%"
        bottom="22.51%"
        left="6.22%"
        right="79.26%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Play")}
      >
        <Icon
          width="26.25px"
          height="25.57917022705078px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 26.25,
            height: 25.57917022705078,
          }}
          paths={[
            {
              d: "M16.0417 0L16.0417 3.00417C20.2563 4.25833 23.3333 8.16667 23.3333 12.7896C23.3333 17.4125 20.2563 21.3063 16.0417 22.5604L16.0417 25.5792C21.875 24.2521 26.25 19.0313 26.25 12.7896C26.25 6.54792 21.875 1.32708 16.0417 0ZM19.6875 12.7896C19.6875 10.2083 18.2292 7.99167 16.0417 6.9125L16.0417 18.6229C18.2292 17.5875 19.6875 15.3563 19.6875 12.7896ZM0 8.41458L0 17.1646L5.83333 17.1646L13.125 24.4563L13.125 1.12292L5.83333 8.41458L0 8.41458Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="13.46%"
          bottom="13.46%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector35512506")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="15px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="76.21%"
        bottom="19.95%"
        left="1.24%"
        right="73.45%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="play sound"
        {...getOverrideProps(overrides, "play sound")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="15px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="93.35%"
        bottom="2.81%"
        left="1.24%"
        right="69.3%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="rec for check"
        {...getOverrideProps(overrides, "TextRec")}
      ></Text>
    </View>
  );
}
