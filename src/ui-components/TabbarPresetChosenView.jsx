/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function TabbarPresetChosenView(props) {
  const { overrides, ...rest } = props;
  const frameFourOnClick = useNavigateAction({ type: "url", url: "/mycards" });
  return (
    <View
      width="186px"
      height="43px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TabbarPresetChosenView")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="56.18%"
        {...getOverrideProps(overrides, "Group 32")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="12.88%"
          right="0%"
          alignItems="flex-start"
          border="0.5px SOLID rgba(104,112,120,1)"
          borderRadius="8px 8px 0px 0px"
          padding="9.5px 9.5px 9.5px 9.5px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 3")}
        >
          <Text
            fontFamily="Noto Sans JP"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="18.75px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Preset"
            {...getOverrideProps(overrides, "Preset")}
          ></Text>
        </Flex>
        <Icon
          width="11px"
          height="1px"
          viewBox={{ minX: 0, minY: 0, width: 11, height: 1 }}
          paths={[
            {
              d: "M0 0L11 0L11 -0.5L0 -0.5L0 0Z",
              stroke: "rgba(104,112,120,1)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          position="absolute"
          top="100%"
          bottom="0%"
          left="0%"
          right="86.5%"
          {...getOverrideProps(overrides, "Line 336202971")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="50%"
        right="0%"
        {...getOverrideProps(overrides, "Group 33")}
      >
        <Icon
          width="11px"
          height="1px"
          viewBox={{ minX: 0, minY: 0, width: 11, height: 1 }}
          paths={[
            {
              d: "M0 0L11 0L11 -0.5L0 -0.5L0 0Z",
              stroke: "rgba(104,112,120,1)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          position="absolute"
          top="100%"
          bottom="0%"
          left="88.17%"
          right="0%"
          {...getOverrideProps(overrides, "Line 4")}
        ></Icon>
        <Flex
          gap="10px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="9.68%"
          alignItems="flex-start"
          border="0.5px SOLID rgba(104,112,120,1)"
          borderRadius="8px 8px 0px 0px"
          padding="9.5px 9.5px 9.5px 9.5px"
          backgroundColor="rgba(239,240,240,1)"
          onClick={() => {
            frameFourOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 4")}
        >
          <Text
            fontFamily="Noto Sans JP"
            fontSize="16px"
            fontWeight="400"
            color="rgba(104,112,120,1)"
            lineHeight="18.75px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="MyCards"
            {...getOverrideProps(overrides, "MyCards")}
          ></Text>
        </Flex>
      </View>
      <Icon
        width="12px"
        height="1px"
        viewBox={{ minX: 0, minY: 0, width: 12, height: 1 }}
        paths={[
          {
            d: "M0 0L12 0L12 -0.5L0 -0.5L0 0Z",
            stroke: "rgba(104,112,120,1)",
            fillRule: "nonzero",
            strokeWidth: 0,
          },
        ]}
        position="absolute"
        top="100%"
        bottom="0%"
        left="43.55%"
        right="50%"
        {...getOverrideProps(overrides, "Line 336202967")}
      ></Icon>
    </View>
  );
}
