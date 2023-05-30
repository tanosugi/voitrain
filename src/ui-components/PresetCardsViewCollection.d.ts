/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PresetCardsViewProps } from "./PresetCardsView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresetCardsViewCollectionOverridesProps = {
    PresetCardsViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    PresetCardsView?: PresetCardsViewProps;
} & EscapeHatchProps;
export declare type PresetCardsViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PresetCardsViewProps;
} & {
    overrides?: PresetCardsViewCollectionOverridesProps | undefined | null;
}>;
export default function PresetCardsViewCollection(props: PresetCardsViewCollectionProps): React.ReactElement;
