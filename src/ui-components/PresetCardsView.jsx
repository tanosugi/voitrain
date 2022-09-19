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
export default function PresetCardsView(props) {
  const { presetCardSet, overrides, ...rest } = props;
  const playOnClick = useNavigateAction({
    type: "url",
    url: `${"practice/"}${presetCardSet?.id}`,
  });
  return (
    <View
      width="286px"
      height="145px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(230,238,254,1)"
      {...rest}
      {...getOverrideProps(overrides, "PresetCardsView")}
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
        children={presetCardSet?.name}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Image
        width="143px"
        height="144.55px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={presetCardSet?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <View
        width="29px"
        height="29px"
        position="absolute"
        top="85px"
        left="158px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          playOnClick();
        }}
        {...getOverrideProps(overrides, "play")}
      >
        <Icon
          width="13.291671752929688px"
          height="16.916671752929688px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.291671752929688,
            height: 16.916671752929688,
          }}
          paths={[
            {
              d: "M0 0L0 16.9167L13.2917 8.45833L0 0Z",
              fill: "rgba(4,52,149,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="21.42%"
          bottom="20.25%"
          left="33.33%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector")}
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
        width="48px"
        position="absolute"
        top="103px"
        left="152px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="practice"
        {...getOverrideProps(overrides, "practice")}
      ></Text>
    </View>
  );
}
