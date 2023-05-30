/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CardSet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardSetDetailViewOverridesProps = {
    CardSetDetailView?: PrimitiveOverrideProps<ViewProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    Vector35512528?: PrimitiveOverrideProps<IconProps>;
    play?: PrimitiveOverrideProps<ViewProps>;
    practice?: PrimitiveOverrideProps<TextProps>;
    Vector35512530?: PrimitiveOverrideProps<IconProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    deleteText?: PrimitiveOverrideProps<TextProps>;
    Vector35512532?: PrimitiveOverrideProps<IconProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
    Vector35812554?: PrimitiveOverrideProps<IconProps>;
    refresh?: PrimitiveOverrideProps<ViewProps>;
    "update image"?: PrimitiveOverrideProps<TextProps>;
    Vector36092552?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CardSetDetailViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    cardSet?: CardSet;
} & {
    overrides?: CardSetDetailViewOverridesProps | undefined | null;
}>;
export default function CardSetDetailView(props: CardSetDetailViewProps): React.ReactElement;
