/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TabbarMyCardsChosenViewOverridesProps = {
    TabbarMyCardsChosenView?: PrimitiveOverrideProps<ViewProps>;
    "Group 31"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    Preset?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Group 30"?: PrimitiveOverrideProps<ViewProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    MyCards?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TabbarMyCardsChosenViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TabbarMyCardsChosenViewOverridesProps | undefined | null;
}>;
export default function TabbarMyCardsChosenView(props: TabbarMyCardsChosenViewProps): React.ReactElement;
