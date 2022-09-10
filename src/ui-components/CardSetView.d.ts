/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardSet } from "../models";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type CardSetViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    cardset?: CardSet;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CardSetView(props: CardSetViewProps): React.ReactElement;
