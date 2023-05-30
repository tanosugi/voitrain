/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureSmallViewOverridesProps = {
    FeatureSmallView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13936322778"?: PrimitiveOverrideProps<FlexProps>;
    "Preset Card Set"?: PrimitiveOverrideProps<TextProps>;
    "Get started right away with a preset card set of fruits, body parts. After listening to the pronunciation, you can pronounce it by yourself to check if your pronunciation is correct."?: PrimitiveOverrideProps<TextProps>;
    "Group 2836342920"?: PrimitiveOverrideProps<FlexProps>;
    Button36342921?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 13936322781"?: PrimitiveOverrideProps<FlexProps>;
    "Your Own Card Set"?: PrimitiveOverrideProps<TextProps>;
    "You can create a card set for the words you want to practice. The created card set can be used in the same way as the preset. After listening to the pronunciation of a word, you can pronounce it by yourself to see if it matches. You can change picture by input url or just click \u201Cupdate image\u201D icon to obtain random photo from unsplash.com."?: PrimitiveOverrideProps<TextProps>;
    "Group 2836342925"?: PrimitiveOverrideProps<FlexProps>;
    Button36342926?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FeatureSmallViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeatureSmallViewOverridesProps | undefined | null;
}>;
export default function FeatureSmallView(props: FeatureSmallViewProps): React.ReactElement;
