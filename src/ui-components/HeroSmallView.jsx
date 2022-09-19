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
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function HeroSmallView(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/preset" });
  return (
    <View
      width="320px"
      height="532px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroSmallView")}
    >
      <Flex
        gap="24px"
        position="absolute"
        top="0.01%"
        bottom="48.11%"
        left="0%"
        right="0%"
        direction="column"
        width="320px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeroMessage")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Voitrain"
          {...getOverrideProps(overrides, "Voitrain")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Message")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Learn English words while pronouncing them"
            {...getOverrideProps(
              overrides,
              "Learn English words while pronouncing them"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Repetition is the best way to remember English words. With Voitrain, you can memorize words using a preset card set and a card set you create by yourself."
            {...getOverrideProps(
              overrides,
              "Repetition is the best way to remember English words. With Voitrain, you can memorize words using a preset card set and a card set you create by yourself."
            )}
          ></Text>
          <Flex
            padding="0px 0px 0px 0px"
            width="195px"
            height="40px"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 28")}
          >
            <Button
              display="flex"
              gap="0"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              width="195px"
              height="40px"
              justifyContent="center"
              alignItems="center"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Sign Up for Free"
              onClick={() => {
                buttonOnClick();
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
      <Image
        position="absolute"
        top="58.83%"
        bottom="0.19%"
        height="40.98%"
        left="-1.25%"
        right="-1.25%"
        width="102.5%"
        padding="0px 0px 0px 0px"
        src="https://images.unsplash.com/photo-1593697723815-e1c957debea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        {...getOverrideProps(overrides, "unsplash:PdO-fDWXQ5I")}
      ></Image>
    </View>
  );
}
