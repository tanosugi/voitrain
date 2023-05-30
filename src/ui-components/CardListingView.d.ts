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
export declare type CardListingViewOverridesProps = {
    CardListingView?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    Apple?: PrimitiveOverrideProps<TextProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    Vector35512523?: PrimitiveOverrideProps<IconProps>;
    deleteText?: PrimitiveOverrideProps<TextProps>;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    Vector35632673?: PrimitiveOverrideProps<IconProps>;
    refresh?: PrimitiveOverrideProps<ViewProps>;
    Vector36122560?: PrimitiveOverrideProps<IconProps>;
    "update image"?: PrimitiveOverrideProps<TextProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardListingViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    card?: Card;
} & {
    overrides?: CardListingViewOverridesProps | undefined | null;
}>;
export default function CardListingView(props: CardListingViewProps): React.ReactElement;
