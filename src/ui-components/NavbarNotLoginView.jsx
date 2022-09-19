/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavbarNotLoginView(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="319px"
      height="52px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "NavbarNotLoginView")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(64,106,191,1)"
        {...getOverrideProps(overrides, "NavbarView")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="calc(50% - 18px - -1px)"
          left="6px"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IconAndTitle")}
        >
          <View
            width="25.01px"
            height="25.01px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "micIcon")}
          >
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group")}
            >
              <Icon
                width="12.49017333984375px"
                height="12.481353759765625px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 12.49017333984375,
                  height: 12.481353759765625,
                }}
                paths={[
                  {
                    d: "M8.53819 12.0461C8.58552 12.0275 8.63324 12.0101 8.67993 11.9903C8.82515 11.9288 8.96748 11.8603 9.1087 11.7872C9.15715 11.7622 9.20526 11.7365 9.25293 11.7101C9.39546 11.6317 9.53535 11.5487 9.67251 11.4582C9.70587 11.4363 9.73811 11.4125 9.77093 11.3898C10.0829 11.1757 10.3842 10.9397 10.6614 10.6627C13.0998 8.22422 13.0998 4.2674 10.6614 1.82882C8.22294 -0.609608 4.26612 -0.609608 1.82774 1.82882C0.398638 3.25793 -0.192824 5.20766 0.0548195 7.06645L5.42394 12.4354C5.53672 12.4505 5.65063 12.4526 5.76395 12.4615C5.80136 12.4643 5.83839 12.4677 5.8758 12.4699C6.60232 12.5136 7.33294 12.4323 8.03621 12.2227C8.04764 12.2192 8.05931 12.2167 8.07074 12.2133C8.22875 12.1652 8.38364 12.107 8.53819 12.0461Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="0%"
                bottom="50.09%"
                left="50.05%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36372587")}
              ></Icon>
              <Icon
                width="16.84954833984375px"
                height="16.853424072265625px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.84954833984375,
                  height: 16.853424072265625,
                }}
                paths={[
                  {
                    d: "M11.994 0.353783L11.6466 0.00517694L11.6462 0.00556823L11.6406 0L0 13.2624L3.59102 16.8534L16.0612 5.9049L16.844 5.21824L16.8436 5.21785L16.8496 5.21272L11.994 0.353783ZM12.6956 5.46686L10.1794 7.98715C9.9916 8.17467 9.6829 8.17467 9.49553 7.98715L8.86626 7.35422C8.67469 7.16651 8.67469 6.86177 8.86626 6.6704L11.3829 4.15376C11.5703 3.9662 11.879 3.9662 12.0668 4.15376L12.6956 4.78303C12.8872 4.9744 12.8872 5.27929 12.6956 5.46686Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="32.61%"
                bottom="0%"
                left="0%"
                right="32.62%"
                {...getOverrideProps(overrides, "Vector36372588")}
              ></Icon>
            </View>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="36px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Voitrain"
            {...getOverrideProps(overrides, "Voitrain")}
          ></Text>
        </Flex>
      </View>
    </View>
  );
}
