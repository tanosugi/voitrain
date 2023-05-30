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
  useDataStoreDeleteAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardSetView(props) {
  const { cardSet, overrides, ...rest } = props;
  const deleteOnClick = useDataStoreDeleteAction({
    model: CardSet,
    id: cardSet?.id,
    schema: schema,
  });
  const playOnClick = useNavigateAction({
    type: "url",
    url: `${"practice/"}${cardSet?.id}`,
  });
  const pencilOnClick = useNavigateAction({
    type: "url",
    url: `${"edit/"}${cardSet?.id}`,
  });
  return (
    <View
      width="286px"
      height="145px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(230,238,254,1)"
      {...getOverrideProps(overrides, "CardSetView")}
      {...rest}
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
        children={cardSet?.name}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <View
        position="absolute"
        top="60.69%"
        bottom="24.14%"
        left="87.06%"
        right="5.24%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          deleteOnClick();
        }}
        {...getOverrideProps(overrides, "Delete")}
      >
        <Icon
          width="12.833343505859375px"
          height="16.5px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.833343505859375,
            height: 16.5,
          }}
          paths={[
            {
              d: "M12.8333 0.916667L9.625 0.916667L8.70833 0L4.125 0L3.20833 0.916667L0 0.916667L0 2.75L12.8333 2.75M0.916667 14.6667C0.916667 15.1529 1.10982 15.6192 1.45364 15.963C1.79745 16.3068 2.26377 16.5 2.75 16.5L10.0833 16.5C10.5696 16.5 11.0359 16.3068 11.3797 15.963C11.7235 15.6192 11.9167 15.1529 11.9167 14.6667L11.9167 3.66667L0.916667 3.66667L0.916667 14.6667Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector35512511")}
        ></Icon>
      </View>
      <Image
        width="143px"
        height="144.55px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={cardSet?.image_url}
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
          width="13.291656494140625px"
          height="16.91666603088379px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.291656494140625,
            height: 16.91666603088379,
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
          {...getOverrideProps(overrides, "Vector35512514")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="88px"
        left="206px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          pencilOnClick();
        }}
        {...getOverrideProps(overrides, "pencil")}
      >
        <Icon
          width="18.00250244140625px"
          height="18.002500534057617px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.00250244140625,
            height: 18.002500534057617,
          }}
          paths={[
            {
              d: "M17.71 4.0425C18.1 3.6525 18.1 3.0025 17.71 2.6325L15.37 0.2925C15 -0.0975 14.35 -0.0975 13.96 0.2925L12.12 2.1225L15.87 5.8725M0 14.2525L0 18.0025L3.75 18.0025L14.81 6.9325L11.06 3.1825L0 14.2525Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.49%"
          bottom="12.5%"
          left="12.5%"
          right="12.49%"
          {...getOverrideProps(overrides, "Vector35512516")}
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
        width="50px"
        position="absolute"
        top="107px"
        left="151px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="practice"
        {...getOverrideProps(overrides, "practice")}
      ></Text>
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
        width="29px"
        position="absolute"
        top="107px"
        left="203px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="edit"
        {...getOverrideProps(overrides, "edit")}
      ></Text>
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
        width="38px"
        position="absolute"
        top="107px"
        left="241px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="delete"
        {...getOverrideProps(overrides, "deleteText")}
      ></Text>
    </View>
  );
}
