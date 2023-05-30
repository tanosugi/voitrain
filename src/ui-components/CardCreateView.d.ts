/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Card } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardCreateViewOverridesProps = {
    CardCreateView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Card"?: PrimitiveOverrideProps<TextProps>;
    Divider35652551?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField35652556?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35652557?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35652558?: PrimitiveOverrideProps<TextFieldProps>;
    Divider35652559?: PrimitiveOverrideProps<DividerProps>;
    "Group 28"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CardCreateViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    card?: Card;
} & {
    overrides?: CardCreateViewOverridesProps | undefined | null;
}>;
export default function CardCreateView(props: CardCreateViewProps): React.ReactElement;
