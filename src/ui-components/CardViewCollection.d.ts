/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardViewProps } from "./CardView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type CardViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardViewProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CardViewCollection(props: CardViewCollectionProps): React.ReactElement;
