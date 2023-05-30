/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PresetCardSet } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PresetCardSetUpdateFormInputValues = {
    name?: string;
    image_url?: string;
};
export declare type PresetCardSetUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresetCardSetUpdateFormOverridesProps = {
    PresetCardSetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PresetCardSetUpdateFormProps = React.PropsWithChildren<{
    overrides?: PresetCardSetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    presetCardSet?: PresetCardSet;
    onSubmit?: (fields: PresetCardSetUpdateFormInputValues) => PresetCardSetUpdateFormInputValues;
    onSuccess?: (fields: PresetCardSetUpdateFormInputValues) => void;
    onError?: (fields: PresetCardSetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresetCardSetUpdateFormInputValues) => PresetCardSetUpdateFormInputValues;
    onValidate?: PresetCardSetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PresetCardSetUpdateForm(props: PresetCardSetUpdateFormProps): React.ReactElement;
