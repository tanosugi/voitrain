/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarNotLoginViewOverridesProps = {
    NavbarNotLoginView?: PrimitiveOverrideProps<ViewProps>;
    NavbarView?: PrimitiveOverrideProps<ViewProps>;
    IconAndTitle?: PrimitiveOverrideProps<FlexProps>;
    micIcon?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector36372587?: PrimitiveOverrideProps<IconProps>;
    Vector36372588?: PrimitiveOverrideProps<IconProps>;
    Voitrain?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavbarNotLoginViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavbarNotLoginViewOverridesProps | undefined | null;
}>;
export default function NavbarNotLoginView(props: NavbarNotLoginViewProps): React.ReactElement;
