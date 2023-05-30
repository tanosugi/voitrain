/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Card } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CardUpdateFormInputValues = {
    word?: string;
    image_url?: string;
    cardsetID?: string;
};
export declare type CardUpdateFormValidationValues = {
    word?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    cardsetID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardUpdateFormOverridesProps = {
    CardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    word?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    cardsetID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardUpdateFormProps = React.PropsWithChildren<{
    overrides?: CardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    card?: Card;
    onSubmit?: (fields: CardUpdateFormInputValues) => CardUpdateFormInputValues;
    onSuccess?: (fields: CardUpdateFormInputValues) => void;
    onError?: (fields: CardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardUpdateFormInputValues) => CardUpdateFormInputValues;
    onValidate?: CardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CardUpdateForm(props: CardUpdateFormProps): React.ReactElement;
