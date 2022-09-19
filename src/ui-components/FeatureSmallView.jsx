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
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function FeatureSmallView(props) {
  const { overrides, ...rest } = props;
  const groupTwoEightThreeSixThreeFourTwoNineTwoZeroOnClick = useNavigateAction(
    { type: "url", url: "/preset" }
  );
  const groupTwoEightThreeSixThreeFourTwoNineTwoFiveOnClick = useNavigateAction(
    { type: "url", url: "/mycards" }
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FeatureSmallView")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="319px"
        height="204px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 13936322778")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
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
          children="Preset Card Set"
          {...getOverrideProps(overrides, "Preset Card Set")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
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
          children="Get started right away with a preset card set of fruits, body parts, and more. After listening to the pronunciation, you can pronounce it yourself to check if your pronunciation is correct."
          {...getOverrideProps(
            overrides,
            "Get started right away with a preset card set of fruits, body parts, and more. After listening to the pronunciation, you can pronounce it yourself to check if your pronunciation is correct."
          )}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="145px"
          height="27px"
          shrink="0"
          position="relative"
          onClick={() => {
            groupTwoEightThreeSixThreeFourTwoNineTwoZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Group 2836342920")}
        >
          <Button
            display="flex"
            gap="0"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            width="145px"
            height="27px"
            justifyContent="center"
            alignItems="center"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Try it Out"
            {...getOverrideProps(overrides, "Button36342921")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="319px"
        height="228px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 13936322781")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
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
          children="Your Own Card Set"
          {...getOverrideProps(overrides, "Your Own Card Set")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
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
          children="You can create a card set by grouping the words you want to practice. The created card set can be used in the same way as the preset. After listening to the pronunciation of a word, you can pronounce it yourself to see if it matches."
          {...getOverrideProps(
            overrides,
            "You can create a card set by grouping the words you want to practice. The created card set can be used in the same way as the preset. After listening to the pronunciation of a word, you can pronounce it yourself to see if it matches."
          )}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="145px"
          height="27px"
          shrink="0"
          position="relative"
          onClick={() => {
            groupTwoEightThreeSixThreeFourTwoNineTwoFiveOnClick();
          }}
          {...getOverrideProps(overrides, "Group 2836342925")}
        >
          <Button
            display="flex"
            gap="0"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            width="145px"
            height="27px"
            justifyContent="center"
            alignItems="center"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Try it Out"
            {...getOverrideProps(overrides, "Button36342926")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
