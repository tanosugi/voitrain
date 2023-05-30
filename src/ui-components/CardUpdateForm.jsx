/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CardUpdateForm(props) {
  const {
    id: idProp,
    card: cardModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    word: "",
    image_url: "",
    cardsetID: "",
  };
  const [word, setWord] = React.useState(initialValues.word);
  const [image_url, setImage_url] = React.useState(initialValues.image_url);
  const [cardsetID, setCardsetID] = React.useState(initialValues.cardsetID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cardRecord
      ? { ...initialValues, ...cardRecord }
      : initialValues;
    setWord(cleanValues.word);
    setImage_url(cleanValues.image_url);
    setCardsetID(cleanValues.cardsetID);
    setErrors({});
  };
  const [cardRecord, setCardRecord] = React.useState(cardModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Card, idProp)
        : cardModelProp;
      setCardRecord(record);
    };
    queryData();
  }, [idProp, cardModelProp]);
  React.useEffect(resetStateValues, [cardRecord]);
  const validations = {
    word: [],
    image_url: [],
    cardsetID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          word,
          image_url,
          cardsetID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Card.copyOf(cardRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CardUpdateForm")}
      {...rest}
    >
      <TextField
        label="Word"
        isRequired={false}
        isReadOnly={false}
        value={word}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              word: value,
              image_url,
              cardsetID,
            };
            const result = onChange(modelFields);
            value = result?.word ?? value;
          }
          if (errors.word?.hasError) {
            runValidationTasks("word", value);
          }
          setWord(value);
        }}
        onBlur={() => runValidationTasks("word", word)}
        errorMessage={errors.word?.errorMessage}
        hasError={errors.word?.hasError}
        {...getOverrideProps(overrides, "word")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={image_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              word,
              image_url: value,
              cardsetID,
            };
            const result = onChange(modelFields);
            value = result?.image_url ?? value;
          }
          if (errors.image_url?.hasError) {
            runValidationTasks("image_url", value);
          }
          setImage_url(value);
        }}
        onBlur={() => runValidationTasks("image_url", image_url)}
        errorMessage={errors.image_url?.errorMessage}
        hasError={errors.image_url?.hasError}
        {...getOverrideProps(overrides, "image_url")}
      ></TextField>
      <TextField
        label="Cardset id"
        isRequired={false}
        isReadOnly={false}
        value={cardsetID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              word,
              image_url,
              cardsetID: value,
            };
            const result = onChange(modelFields);
            value = result?.cardsetID ?? value;
          }
          if (errors.cardsetID?.hasError) {
            runValidationTasks("cardsetID", value);
          }
          setCardsetID(value);
        }}
        onBlur={() => runValidationTasks("cardsetID", cardsetID)}
        errorMessage={errors.cardsetID?.errorMessage}
        hasError={errors.cardsetID?.hasError}
        {...getOverrideProps(overrides, "cardsetID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cardModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cardModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
