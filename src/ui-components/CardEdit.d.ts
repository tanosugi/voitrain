/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Card } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type CardEditProps = React.PropsWithChildren<Partial<FlexProps> & {
    card?: Card;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CardEdit(props: CardEditProps): React.ReactElement;
