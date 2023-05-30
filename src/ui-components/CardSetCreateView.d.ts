/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CardSet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardSetCreateViewOverridesProps = {
    CardSetCreateView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Card Set"?: PrimitiveOverrideProps<TextProps>;
    Divider35772644?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField35772649?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35772650?: PrimitiveOverrideProps<TextFieldProps>;
    Divider35772652?: PrimitiveOverrideProps<DividerProps>;
    "Group 28"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CardSetCreateViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    cardSet?: CardSet;
} & {
    overrides?: CardSetCreateViewOverridesProps | undefined | null;
}>;
export default function CardSetCreateView(props: CardSetCreateViewProps): React.ReactElement;
