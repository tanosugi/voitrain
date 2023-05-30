/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardSetViewProps } from "./CardSetView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardSetViewCollectionOverridesProps = {
    CardSetViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardSetView?: CardSetViewProps;
} & EscapeHatchProps;
export declare type CardSetViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardSetViewProps;
} & {
    overrides?: CardSetViewCollectionOverridesProps | undefined | null;
}>;
export default function CardSetViewCollection(props: CardSetViewCollectionProps): React.ReactElement;
