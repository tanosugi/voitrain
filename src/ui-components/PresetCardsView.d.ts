/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PresetCardSet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresetCardsViewOverridesProps = {
    PresetCardsView?: PrimitiveOverrideProps<ViewProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    play?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    practice?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PresetCardsViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    presetCardSet?: PresetCardSet;
} & {
    overrides?: PresetCardsViewOverridesProps | undefined | null;
}>;
export default function PresetCardsView(props: PresetCardsViewProps): React.ReactElement;
