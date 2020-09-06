import React, { memo, ReactElement, useCallback, useMemo } from "react";
import { Controller, FormContextValues, useForm } from "react-hook-form";

import * as s from "./styles";
import { FORM_FIELDS, IFormValues, IProps } from "./types";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { IPaymentCard } from "../../modules/payment/types";
import { validationSchema } from "./utils";

export const PaymentFormC: React.FC<IProps> = ({
  cardTypes,
  onSubmit,
}: IProps) => {
  const {
    formState,
    errors,
    control,
    handleSubmit,
  }: FormContextValues<IFormValues> = useForm<IFormValues>({
    validationSchema,
    mode: "onBlur",
  });

  const getErrorMessage = useCallback(
    (key: FORM_FIELDS): string | undefined => errors[key]?.message,
    [errors]
  );

  const dropdownOptions = useMemo<ReactElement[]>(
    () =>
      cardTypes.map(({ id, value }: IPaymentCard) => (
        <MenuItem key={id} value={value}>
          {value}
        </MenuItem>
      )),
    [cardTypes]
  );

  return (
    <s.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FormControl variant="filled">
        <InputLabel id={FORM_FIELDS.CARD_TYPE}>Card Types:</InputLabel>
        <Controller
          id={FORM_FIELDS.CARD_TYPE}
          labelId={FORM_FIELDS.CARD_TYPE}
          label="Card Types:"
          name={FORM_FIELDS.CARD_TYPE}
          as={s.Dropdown}
          control={control}
          defaultValue=""
          variant="outlined"
          error={Boolean(getErrorMessage(FORM_FIELDS.CARD_TYPE))}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {dropdownOptions}
        </Controller>
        <s.ErrorMessage>
          {getErrorMessage(FORM_FIELDS.CARD_TYPE)}
        </s.ErrorMessage>
      </FormControl>

      <FormControl variant="filled">
        <Controller
          id={FORM_FIELDS.CARD_NUMBER}
          name={FORM_FIELDS.CARD_NUMBER}
          as={s.TextInput}
          control={control}
          label="Card Number"
          defaultValue=""
          variant="outlined"
          error={Boolean(getErrorMessage(FORM_FIELDS.CARD_NUMBER))}
          type="number"
        />
        <s.ErrorMessage>
          {getErrorMessage(FORM_FIELDS.CARD_NUMBER)}
        </s.ErrorMessage>
      </FormControl>

      <FormControl variant="filled">
        <Controller
          id={FORM_FIELDS.EXPIRY}
          name={FORM_FIELDS.EXPIRY}
          as={s.TextInput}
          control={control}
          label="Expiry"
          defaultValue=""
          variant="outlined"
          error={Boolean(getErrorMessage(FORM_FIELDS.EXPIRY))}
        />
        <s.ErrorMessage>{getErrorMessage(FORM_FIELDS.EXPIRY)}</s.ErrorMessage>
      </FormControl>

      <FormControl variant="filled">
        <Controller
          id={FORM_FIELDS.NAME}
          name={FORM_FIELDS.NAME}
          as={s.TextInput}
          control={control}
          label="Name"
          defaultValue=""
          variant="outlined"
          error={Boolean(getErrorMessage(FORM_FIELDS.NAME))}
        />
        <s.ErrorMessage>{getErrorMessage(FORM_FIELDS.NAME)}</s.ErrorMessage>
      </FormControl>

      <FormControl variant="filled">
        <Controller
          id={FORM_FIELDS.EMAIL}
          name={FORM_FIELDS.EMAIL}
          as={s.TextInput}
          control={control}
          label="Email"
          defaultValue=""
          variant="outlined"
          error={Boolean(getErrorMessage(FORM_FIELDS.EMAIL))}
        />
        <s.ErrorMessage>{getErrorMessage(FORM_FIELDS.EMAIL)}</s.ErrorMessage>
      </FormControl>
      <s.SubmitButton
        variant="contained"
        color="primary"
        type="submit"
        disabled={!formState.isValid}
      >
        Confirm Payment
      </s.SubmitButton>
    </s.Form>
  );
};

export const PaymentForm = memo<IProps>(PaymentFormC);
