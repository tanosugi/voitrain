/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardListingViewProps } from "./CardListingView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardListingViewCollectionOverridesProps = {
    CardListingViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardListingView?: CardListingViewProps;
} & EscapeHatchProps;
export declare type CardListingViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardListingViewProps;
} & {
    overrides?: CardListingViewCollectionOverridesProps | undefined | null;
}>;
export default function CardListingViewCollection(props: CardListingViewCollectionProps): React.ReactElement;
