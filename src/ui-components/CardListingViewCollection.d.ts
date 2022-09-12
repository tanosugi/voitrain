/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardListingViewProps } from "./CardListingView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type CardListingViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardListingViewProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CardListingViewCollection(props: CardListingViewCollectionProps): React.ReactElement;
