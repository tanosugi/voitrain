/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroSmallViewOverridesProps = {
    HeroSmallView?: PrimitiveOverrideProps<ViewProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Voitrain?: PrimitiveOverrideProps<TextProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "Learn English words while pronouncing them"?: PrimitiveOverrideProps<TextProps>;
    "Repetition is the best way to remember English words. With Voitrain, you can memorize words using a preset card set and a card set you create by yourself."?: PrimitiveOverrideProps<TextProps>;
    "Group 28"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "unsplash:PdO-fDWXQ5I"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroSmallViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroSmallViewOverridesProps | undefined | null;
}>;
export default function HeroSmallView(props: HeroSmallViewProps): React.ReactElement;
