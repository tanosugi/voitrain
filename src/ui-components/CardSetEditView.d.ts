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
export declare type CardSetEditViewOverridesProps = {
    CardSetEditView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Edit Card Set"?: PrimitiveOverrideProps<TextProps>;
    Divider35772603?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField35772608?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35772609?: PrimitiveOverrideProps<TextFieldProps>;
    Divider35772611?: PrimitiveOverrideProps<DividerProps>;
    "Group 28"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CardSetEditViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    cardSet?: CardSet;
} & {
    overrides?: CardSetEditViewOverridesProps | undefined | null;
}>;
export default function CardSetEditView(props: CardSetEditViewProps): React.ReactElement;
