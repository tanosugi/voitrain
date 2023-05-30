/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CardSet } from "../models";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CardSetEditView(props) {
  const { cardSet, overrides, ...rest } = props;
  const [
    textFieldThreeFiveSevenSevenTwoSixZeroEightValue,
    setTextFieldThreeFiveSevenSevenTwoSixZeroEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveSevenSevenTwoSixZeroNineValue,
    setTextFieldThreeFiveSevenSevenTwoSixZeroNineValue,
  ] = useStateMutationAction("");
  const groupTwoEightOnClick = useDataStoreUpdateAction({
    model: CardSet,
    id: cardSet?.id,
    fields: {
      name: textFieldThreeFiveSevenSevenTwoSixZeroEightValue,
      image_url: textFieldThreeFiveSevenSevenTwoSixZeroNineValue,
    },
    schema: schema,
  });
  useEffect(() => {
    if (
      textFieldThreeFiveSevenSevenTwoSixZeroEightValue === "" &&
      cardSet !== undefined &&
      cardSet?.name !== undefined
    )
      setTextFieldThreeFiveSevenSevenTwoSixZeroEightValue(cardSet?.name);
  }, [cardSet]);
  useEffect(() => {
    if (
      textFieldThreeFiveSevenSevenTwoSixZeroNineValue === "" &&
      cardSet !== undefined &&
      cardSet?.image_url !== undefined
    )
      setTextFieldThreeFiveSevenSevenTwoSixZeroNineValue(cardSet?.image_url);
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
      {...getOverrideProps(overrides, "CardSetEditView")}
      {...rest}
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
              {...getOverrideProps(overrides, "Vector")}
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
            children="Edit Card Set"
            {...getOverrideProps(overrides, "Edit Card Set")}
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
          {...getOverrideProps(overrides, "Divider35772603")}
        ></Divider>
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
            value={textFieldThreeFiveSevenSevenTwoSixZeroEightValue}
            onChange={(event) => {
              setTextFieldThreeFiveSevenSevenTwoSixZeroEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35772608")}
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
            placeholder="You can set later."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveSevenSevenTwoSixZeroNineValue}
            onChange={(event) => {
              setTextFieldThreeFiveSevenSevenTwoSixZeroNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35772609")}
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
          {...getOverrideProps(overrides, "Divider35772611")}
        ></Divider>
        <Flex
          padding="0px 0px 0px 0px"
          width="89px"
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
            children="Update"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
