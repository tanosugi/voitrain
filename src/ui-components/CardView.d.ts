/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Card } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardViewOverridesProps = {
    CardView?: PrimitiveOverrideProps<ViewProps>;
    TextInCard?: PrimitiveOverrideProps<TextProps>;
    SpokenText?: PrimitiveOverrideProps<TextProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    Microphone?: PrimitiveOverrideProps<ViewProps>;
    Vector35512504?: PrimitiveOverrideProps<IconProps>;
    Play?: PrimitiveOverrideProps<ViewProps>;
    Vector35512506?: PrimitiveOverrideProps<IconProps>;
    "play sound"?: PrimitiveOverrideProps<TextProps>;
    TextRec?: PrimitiveOverrideProps<TextProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    Vector36722758?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CardViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    card?: Card;
} & {
    overrides?: CardViewOverridesProps | undefined | null;
}>;
export default function CardView(props: CardViewProps): React.ReactElement;
