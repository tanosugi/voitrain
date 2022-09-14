/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Card } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Icon, Image, TextField, View } from "@aws-amplify/ui-react";
export default function CardUpdate(props) {
  const { card, overrides, ...rest } = props;
  const [
    textFieldThreeFiveSixTwoTwoFiveSevenThreeValue,
    setTextFieldThreeFiveSixTwoTwoFiveSevenThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveSixThreeTwoSixFiveSixValue,
    setTextFieldThreeFiveSixThreeTwoSixFiveSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveSixThreeTwoSixSixThreeValue,
    setTextFieldThreeFiveSixThreeTwoSixSixThreeValue,
  ] = useStateMutationAction("");
  const contentsaveOnClick = useDataStoreUpdateAction({
    fields: {
      word: textFieldThreeFiveSixTwoTwoFiveSevenThreeValue,
      image_url: textFieldThreeFiveSixThreeTwoSixFiveSixValue,
      cardsetID: textFieldThreeFiveSixThreeTwoSixSixThreeValue,
    },
    id: card?.id,
    model: Card,
    schema: schema,
  });
  useEffect(() => {
    if (
      textFieldThreeFiveSixTwoTwoFiveSevenThreeValue === "" &&
      card !== undefined &&
      card?.word !== undefined
    )
      setTextFieldThreeFiveSixTwoTwoFiveSevenThreeValue(card?.word);
  }, [card]);
  useEffect(() => {
    if (
      textFieldThreeFiveSixThreeTwoSixFiveSixValue === "" &&
      card !== undefined &&
      card?.image_url !== undefined
    )
      setTextFieldThreeFiveSixThreeTwoSixFiveSixValue(card?.image_url);
  }, [card]);
  useEffect(() => {
    if (
      textFieldThreeFiveSixThreeTwoSixSixThreeValue === "" &&
      card !== undefined &&
      card?.cardsetID !== undefined
    )
      setTextFieldThreeFiveSixThreeTwoSixSixThreeValue(card?.cardsetID);
  }, [card]);
  return (
    <View
      width="235px"
      height="568px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardUpdate")}
    >
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="76.94%"
        bottom="10.39%"
        left="0%"
        right="0%"
        direction="column"
        width="235px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="card set id"
        placeholder="Please Input"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeFiveSixThreeTwoSixSixThreeValue}
        onChange={(event) => {
          setTextFieldThreeFiveSixThreeTwoSixSixThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField35632663")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="47.71%"
        bottom="39.61%"
        left="0%"
        right="0%"
        direction="column"
        width="235px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Word"
        placeholder="Please Input"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeFiveSixTwoTwoFiveSevenThreeValue}
        onChange={(event) => {
          setTextFieldThreeFiveSixTwoTwoFiveSevenThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField35622573")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="62.32%"
        bottom="25%"
        left="0%"
        right="0%"
        direction="column"
        width="235px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Image URL"
        placeholder="Please Input"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeFiveSixThreeTwoSixFiveSixValue}
        onChange={(event) => {
          setTextFieldThreeFiveSixThreeTwoSixFiveSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField35632656")}
      ></TextField>
      <Image
        position="absolute"
        top="7.22%"
        bottom="62.85%"
        height="29.93%"
        left="14.47%"
        right="14.47%"
        width="71.06%"
        padding="0px 0px 0px 0px"
        src={card?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <View
        position="absolute"
        top="35.39%"
        bottom="53.35%"
        left="36.6%"
        right="36.17%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "refresh")}
      >
        <Icon
          width="42.66668701171875px"
          height="42.66666793823242px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 42.66668701171875,
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
          {...getOverrideProps(overrides, "Vector35622578")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="0%"
        bottom="93.84%"
        left="85.11%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "close")}
      >
        <Icon
          width="35px"
          height="35px"
          viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
          paths={[
            {
              d: "M17.5 0C7.8225 0 0 7.8225 0 17.5C0 27.1775 7.8225 35 17.5 35C27.1775 35 35 27.1775 35 17.5C35 7.8225 27.1775 0 17.5 0ZM26.25 23.7825L23.7825 26.25L17.5 19.9675L11.2175 26.25L8.75 23.7825L15.0325 17.5L8.75 11.2175L11.2175 8.75L17.5 15.0325L23.7825 8.75L26.25 11.2175L19.9675 17.5L26.25 23.7825Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector35622580")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="90.67%"
        bottom="0%"
        left="77.45%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          contentsaveOnClick();
        }}
        {...getOverrideProps(overrides, "content-save")}
      >
        <Icon
          width="39.75px"
          height="39.75px"
          viewBox={{ minX: 0, minY: 0, width: 39.75, height: 39.75 }}
          paths={[
            {
              d: "M26.5 13.25L4.41667 13.25L4.41667 4.41667L26.5 4.41667M19.875 35.3333C18.1179 35.3333 16.4328 34.6353 15.1904 33.3929C13.948 32.1505 13.25 30.4654 13.25 28.7083C13.25 26.9513 13.948 25.2662 15.1904 24.0237C16.4328 22.7813 18.1179 22.0833 19.875 22.0833C21.6321 22.0833 23.3172 22.7813 24.5596 24.0237C25.802 25.2662 26.5 26.9513 26.5 28.7083C26.5 30.4654 25.802 32.1505 24.5596 33.3929C23.3172 34.6353 21.6321 35.3333 19.875 35.3333ZM30.9167 0L4.41667 0C1.96542 0 0 1.9875 0 4.41667L0 35.3333C9.80697e-16 36.5047 0.465326 37.6281 1.29361 38.4564C2.1219 39.2847 3.24529 39.75 4.41667 39.75L35.3333 39.75C36.5047 39.75 37.6281 39.2847 38.4564 38.4564C39.2847 37.6281 39.75 36.5047 39.75 35.3333L39.75 8.83333L30.9167 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector35622575")}
        ></Icon>
      </View>
    </View>
  );
}
