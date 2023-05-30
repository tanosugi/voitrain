/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarViewOverridesProps = {
    NavbarView?: PrimitiveOverrideProps<ViewProps>;
    IconAndTitle?: PrimitiveOverrideProps<FlexProps>;
    micIcon?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector36162578?: PrimitiveOverrideProps<IconProps>;
    Vector36162579?: PrimitiveOverrideProps<IconProps>;
    Voitrain?: PrimitiveOverrideProps<TextProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    logout?: PrimitiveOverrideProps<ViewProps>;
    Vector36162583?: PrimitiveOverrideProps<IconProps>;
    "account-circle"?: PrimitiveOverrideProps<ViewProps>;
    Vector36162575?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavbarViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavbarViewOverridesProps | undefined | null;
}>;
export default function NavbarView(props: NavbarViewProps): React.ReactElement;
