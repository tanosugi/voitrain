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
export declare type CardSetViewOverridesProps = {
    CardSetView?: PrimitiveOverrideProps<ViewProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Delete?: PrimitiveOverrideProps<ViewProps>;
    Vector35512511?: PrimitiveOverrideProps<IconProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    play?: PrimitiveOverrideProps<ViewProps>;
    Vector35512514?: PrimitiveOverrideProps<IconProps>;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    Vector35512516?: PrimitiveOverrideProps<IconProps>;
    practice?: PrimitiveOverrideProps<TextProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
    deleteText?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardSetViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    cardSet?: CardSet;
} & {
    overrides?: CardSetViewOverridesProps | undefined | null;
}>;
export default function CardSetView(props: CardSetViewProps): React.ReactElement;
