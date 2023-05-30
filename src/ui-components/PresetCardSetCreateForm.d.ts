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
export declare type PresetCardSetCreateFormInputValues = {
    name?: string;
    image_url?: string;
};
export declare type PresetCardSetCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresetCardSetCreateFormOverridesProps = {
    PresetCardSetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PresetCardSetCreateFormProps = React.PropsWithChildren<{
    overrides?: PresetCardSetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PresetCardSetCreateFormInputValues) => PresetCardSetCreateFormInputValues;
    onSuccess?: (fields: PresetCardSetCreateFormInputValues) => void;
    onError?: (fields: PresetCardSetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresetCardSetCreateFormInputValues) => PresetCardSetCreateFormInputValues;
    onValidate?: PresetCardSetCreateFormValidationValues;
} & React.CSSProperties>;
export default function PresetCardSetCreateForm(props: PresetCardSetCreateFormProps): React.ReactElement;
