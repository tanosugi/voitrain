/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Pluscircle(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="38px"
      height="49px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="3px 3px 3px 3px"
      {...rest}
      {...getOverrideProps(overrides, "Pluscircle")}
    >
      <Icon
        width="32.5px"
        height="32.5px"
        viewBox={{ minX: 0, minY: 0, width: 32.5, height: 32.5 }}
        paths={[
          {
            d: "M24.375 17.875L17.875 17.875L17.875 24.375L14.625 24.375L14.625 17.875L8.125 17.875L8.125 14.625L14.625 14.625L14.625 8.125L17.875 8.125L17.875 14.625L24.375 14.625M16.25 0C14.116 -1.08247e-15 12.0029 0.420319 10.0314 1.23696C8.05985 2.0536 6.26847 3.25056 4.75951 4.75951C1.71205 7.80698 2.88658e-15 11.9402 0 16.25C3.60822e-15 20.5598 1.71205 24.693 4.75951 27.7405C6.26847 29.2494 8.05985 30.4464 10.0314 31.263C12.0029 32.0797 14.116 32.5 16.25 32.5C20.5598 32.5 24.693 30.788 27.7405 27.7405C30.788 24.693 32.5 20.5598 32.5 16.25C32.5 14.116 32.0797 12.0029 31.263 10.0314C30.4464 8.05985 29.2494 6.26847 27.7405 4.75951C26.2315 3.25056 24.4401 2.0536 22.4686 1.23696C20.4971 0.420319 18.384 2.16493e-15 16.25 0Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
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
        width="55px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="add card"
        {...getOverrideProps(overrides, "add card")}
      ></Text>
    </Flex>
  );
}
