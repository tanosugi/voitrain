/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TabbarPresetChosenViewOverridesProps = {
    TabbarPresetChosenView?: PrimitiveOverrideProps<ViewProps>;
    "Group 32"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    Preset?: PrimitiveOverrideProps<TextProps>;
    "Line 336202971"?: PrimitiveOverrideProps<IconProps>;
    "Group 33"?: PrimitiveOverrideProps<ViewProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    MyCards?: PrimitiveOverrideProps<TextProps>;
    "Line 336202967"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TabbarPresetChosenViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TabbarPresetChosenViewOverridesProps | undefined | null;
}>;
export default function TabbarPresetChosenView(props: TabbarPresetChosenViewProps): React.ReactElement;
