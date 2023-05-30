/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PluscircleOverridesProps = {
    Pluscircle?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "add card"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PluscircleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PluscircleOverridesProps | undefined | null;
}>;
export default function Pluscircle(props: PluscircleProps): React.ReactElement;
