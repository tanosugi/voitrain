/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Card } from "../models";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type CardListingViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    card?: Card;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CardListingView(props: CardListingViewProps): React.ReactElement;
