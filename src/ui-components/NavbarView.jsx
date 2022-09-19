/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavbarView(props) {
  const { overrides, ...rest } = props;
  const iconAndTitleOnClick = useNavigateAction({ type: "url", url: "/" });
  const logoutOnClick = useAuthSignOutAction({ global: false });
  const accountcircleOnClick = useNavigateAction({
    type: "url",
    url: "/mycards/",
  });
  return (
    <View
      width="319px"
      height="52px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(64,106,191,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavbarView")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="calc(50% - 18px - -1px)"
        left="6px"
        alignItems="center"
        padding="0px 0px 0px 0px"
        onClick={() => {
          iconAndTitleOnClick();
        }}
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
              height="12.4813232421875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 12.49017333984375,
                height: 12.4813232421875,
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
              {...getOverrideProps(overrides, "Vector36162578")}
            ></Icon>
            <Icon
              width="16.84954833984375px"
              height="16.8533935546875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.84954833984375,
                height: 16.8533935546875,
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
              {...getOverrideProps(overrides, "Vector36162579")}
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
      <Flex
        gap="5px"
        position="absolute"
        top="15px"
        right="6px"
        justifyContent="flex-end"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <View
          width="22.33px"
          height="22.62px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            logoutOnClick();
          }}
          {...getOverrideProps(overrides, "logout")}
        >
          <Icon
            width="16.7437744140625px"
            height="18.84918212890625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.7437744140625,
              height: 18.84918212890625,
            }}
            paths={[
              {
                d: "M12.0927 14.1369L12.0927 11.3095L5.58125 11.3095L5.58125 7.53968L12.0927 7.53968L12.0927 4.7123L16.7438 9.4246L12.0927 14.1369ZM10.2323 0C10.7257 4.18536e-16 11.1989 0.198589 11.5478 0.55208C11.8967 0.905571 12.0927 1.38501 12.0927 1.88492L12.0927 3.76984L10.2323 3.76984L10.2323 1.88492L1.86042 1.88492L1.86042 16.9643L10.2323 16.9643L10.2323 15.0794L12.0927 15.0794L12.0927 16.9643C12.0927 17.4642 11.8967 17.9436 11.5478 18.2971C11.1989 18.6506 10.7257 18.8492 10.2323 18.8492L1.86042 18.8492C1.367 18.8492 0.893799 18.6506 0.544903 18.2971C0.196008 17.9436 4.13096e-16 17.4642 0 16.9643L0 1.88492C0 1.38501 0.196008 0.905571 0.544903 0.55208C0.893799 0.198589 1.367 4.18536e-16 1.86042 0L10.2323 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector36162583")}
          ></Icon>
        </View>
        <View
          width="24.67px"
          height="25px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            accountcircleOnClick();
          }}
          {...getOverrideProps(overrides, "account-circle")}
        >
          <Icon
            width="20.5625px"
            height="20.83331298828125px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 20.5625,
              height: 20.83331298828125,
            }}
            paths={[
              {
                d: "M10.2812 17.9167C7.71094 17.9167 5.43878 16.5833 4.1125 14.5833C4.14334 12.5 8.225 11.3542 10.2812 11.3542C12.3375 11.3542 16.4192 12.5 16.45 14.5833C15.1237 16.5833 12.8516 17.9167 10.2812 17.9167ZM10.2812 3.125C11.0993 3.125 11.8838 3.45424 12.4622 4.04029C13.0407 4.62634 13.3656 5.4212 13.3656 6.25C13.3656 7.0788 13.0407 7.87366 12.4622 8.45971C11.8838 9.04576 11.0993 9.375 10.2812 9.375C9.46322 9.375 8.6787 9.04576 8.10027 8.45971C7.52183 7.87366 7.19688 7.0788 7.19688 6.25C7.19688 5.4212 7.52183 4.62634 8.10027 4.04029C8.6787 3.45424 9.46322 3.125 10.2812 3.125M10.2812 0C8.9311 -6.93889e-16 7.59416 0.269435 6.34679 0.792922C5.09941 1.31641 3.96601 2.08369 3.01131 3.05097C1.0832 5.00448 1.82632e-15 7.654 0 10.4167C2.2829e-15 13.1793 1.0832 15.8289 3.01131 17.7824C3.96601 18.7496 5.09941 19.5169 6.34679 20.0404C7.59416 20.5639 8.9311 20.8333 10.2812 20.8333C13.008 20.8333 15.6231 19.7359 17.5512 17.7824C19.4793 15.8289 20.5625 13.1793 20.5625 10.4167C20.5625 4.65625 15.9359 0 10.2812 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector36162575")}
          ></Icon>
        </View>
      </Flex>
    </View>
  );
}
