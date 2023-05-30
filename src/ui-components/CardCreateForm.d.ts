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
export declare type CardCreateFormInputValues = {
    word?: string;
    image_url?: string;
    cardsetID?: string;
};
export declare type CardCreateFormValidationValues = {
    word?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    cardsetID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardCreateFormOverridesProps = {
    CardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    word?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    cardsetID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardCreateFormProps = React.PropsWithChildren<{
    overrides?: CardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CardCreateFormInputValues) => CardCreateFormInputValues;
    onSuccess?: (fields: CardCreateFormInputValues) => void;
    onError?: (fields: CardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardCreateFormInputValues) => CardCreateFormInputValues;
    onValidate?: CardCreateFormValidationValues;
} & React.CSSProperties>;
export default function CardCreateForm(props: CardCreateFormProps): React.ReactElement;
