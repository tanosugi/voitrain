/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CardSetCreateFormInputValues = {
    name?: string;
    image_url?: string;
};
export declare type CardSetCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardSetCreateFormOverridesProps = {
    CardSetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardSetCreateFormProps = React.PropsWithChildren<{
    overrides?: CardSetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CardSetCreateFormInputValues) => CardSetCreateFormInputValues;
    onSuccess?: (fields: CardSetCreateFormInputValues) => void;
    onError?: (fields: CardSetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardSetCreateFormInputValues) => CardSetCreateFormInputValues;
    onValidate?: CardSetCreateFormValidationValues;
} & React.CSSProperties>;
export default function CardSetCreateForm(props: CardSetCreateFormProps): React.ReactElement;
