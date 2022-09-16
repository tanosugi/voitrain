/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { CardSet } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CardSetCreateView(props) {
  const { cardSet, overrides, ...rest } = props;
  const [
    textFieldThreeFiveSevenSevenTwoSixFourNineValue,
    setTextFieldThreeFiveSevenSevenTwoSixFourNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveSevenSevenTwoSixFiveZeroValue,
    setTextFieldThreeFiveSevenSevenTwoSixFiveZeroValue,
  ] = useStateMutationAction("");
  const groupTwoEightOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldThreeFiveSevenSevenTwoSixFourNineValue,
      image_url: textFieldThreeFiveSevenSevenTwoSixFiveZeroValue,
    },
    model: CardSet,
    schema: schema,
  });
  useEffect(() => {
    if (
      textFieldThreeFiveSevenSevenTwoSixFourNineValue === "" &&
      cardSet !== undefined &&
      cardSet?.name !== undefined
    )
      setTextFieldThreeFiveSevenSevenTwoSixFourNineValue(cardSet?.name);
  }, [cardSet]);
  useEffect(() => {
    if (
      textFieldThreeFiveSevenSevenTwoSixFiveZeroValue === "" &&
      cardSet !== undefined &&
      cardSet?.image_url !== undefined
    )
      setTextFieldThreeFiveSevenSevenTwoSixFiveZeroValue(cardSet?.image_url);
  }, [cardSet]);
  return (
    <Flex
      gap="6px"
      direction="column"
      width="288px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardSetCreateView")}
    >
      <Flex
        gap="5px"
        direction="column"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "close")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector35772642")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Card Set"
            {...getOverrideProps(overrides, "Create Card Set")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider35772644")}
        ></Divider>
        <Image
          width="232px"
          height="243.46px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src={cardSet?.image_url}
          {...getOverrideProps(overrides, "Image")}
        ></Image>
        <View
          width="64px"
          height="64px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "refresh")}
        >
          <Icon
            width="42.6666259765625px"
            height="42.66666793823242px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 42.6666259765625,
              height: 42.66666793823242,
            }}
            paths={[
              {
                d: "M36.4 6.26667C32.5333 2.4 27.2267 0 21.3333 0C15.6754 4.73695e-15 10.2492 2.24761 6.24839 6.24839C2.24761 10.2492 7.10543e-15 15.6754 0 21.3333C7.10543e-15 26.9913 2.24761 32.4175 6.24839 36.4183C10.2492 40.4191 15.6754 42.6667 21.3333 42.6667C31.28 42.6667 39.5733 35.8667 41.9467 26.6667L36.4 26.6667C34.2133 32.88 28.2933 37.3333 21.3333 37.3333C17.0899 37.3333 13.0202 35.6476 10.0196 32.647C7.01904 29.6465 5.33333 25.5768 5.33333 21.3333C5.33333 17.0899 7.01904 13.0202 10.0196 10.0196C13.0202 7.01904 17.0899 5.33333 21.3333 5.33333C25.76 5.33333 29.7067 7.17333 32.5867 10.08L24 18.6667L42.6667 18.6667L42.6667 0L36.4 6.26667Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="16.67%"
            bottom="16.67%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector35772647")}
          ></Icon>
        </View>
        <Flex
          gap="16px"
          direction="column"
          width="232px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Card Set Name"
            placeholder="XXX"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveSevenSevenTwoSixFourNineValue}
            onChange={(event) => {
              setTextFieldThreeFiveSevenSevenTwoSixFourNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35772649")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Image URL"
            placeholder="XXX"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveSevenSevenTwoSixFiveZeroValue}
            onChange={(event) => {
              setTextFieldThreeFiveSevenSevenTwoSixFiveZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35772650")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider35772652")}
        ></Divider>
        <Flex
          padding="0px 0px 0px 0px"
          width="85px"
          height="40px"
          shrink="0"
          position="relative"
          onClick={() => {
            groupTwoEightOnClick();
          }}
          {...getOverrideProps(overrides, "Group 28")}
        >
          <Button
            display="flex"
            gap="0"
            position="absolute"
            top="0px"
            left="0px"
            justifyContent="center"
            alignItems="center"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Create"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
