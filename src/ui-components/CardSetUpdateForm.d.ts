/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardSet } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CardSetUpdateFormInputValues = {
    name?: string;
    image_url?: string;
};
export declare type CardSetUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardSetUpdateFormOverridesProps = {
    CardSetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardSetUpdateFormProps = React.PropsWithChildren<{
    overrides?: CardSetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cardSet?: CardSet;
    onSubmit?: (fields: CardSetUpdateFormInputValues) => CardSetUpdateFormInputValues;
    onSuccess?: (fields: CardSetUpdateFormInputValues) => void;
    onError?: (fields: CardSetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardSetUpdateFormInputValues) => CardSetUpdateFormInputValues;
    onValidate?: CardSetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CardSetUpdateForm(props: CardSetUpdateFormProps): React.ReactElement;
