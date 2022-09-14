/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, TextField, View } from "@aws-amplify/ui-react";
export default function CardSetCreate(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="235px"
      height="411px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardSetCreate")}
    >
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="65.94%"
        bottom="16.55%"
        left="0%"
        right="0%"
        direction="column"
        width="235px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Card Set Name"
        placeholder="Please Input"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <View
        position="absolute"
        top="87.1%"
        bottom="0%"
        left="77.45%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
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
          {...getOverrideProps(overrides, "Vector35562547")}
        ></Icon>
      </View>
      <Image
        position="absolute"
        top="9.98%"
        bottom="48.66%"
        height="41.36%"
        left="14.47%"
        right="14.47%"
        width="71.06%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <View
        width="35px"
        height="35px"
        position="absolute"
        top="0px"
        left="200px"
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
          {...getOverrideProps(overrides, "Vector35562550")}
        ></Icon>
      </View>
    </View>
  );
}
