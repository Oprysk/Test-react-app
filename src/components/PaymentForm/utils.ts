import * as yup from "yup";
import { FORM_FIELDS } from "./types";
import { CARD_EXPIRY_PATTERN, EMAIL_PATTERN } from "../../utils/patterns";

export const validationSchema = yup.object().shape({
  [FORM_FIELDS.CARD_TYPE]: yup.string().required(),
  [FORM_FIELDS.CARD_NUMBER]: yup
    .number()
    .when(`${FORM_FIELDS.CARD_TYPE}`, {
      is: "Amex",
      then: yup
        .number()
        .test(
          "validation",
          `${FORM_FIELDS.CARD_NUMBER} length should be equal to 15`,
          function (value: number) {
            if (!value) {
              return this.createError({
                message: `${FORM_FIELDS.CARD_NUMBER} is a required`,
              });
            } else {
              return Boolean(value.toString().length === 15);
            }
          }
        )
        .required(),
      otherwise: yup
        .number()
        .test(
          "validation",
          `${FORM_FIELDS.CARD_NUMBER} length should be equal to 16`,
          function (value: number) {
            if (!value) {
              return this.createError({
                message: `${FORM_FIELDS.CARD_NUMBER} is a required`,
              });
            } else {
              return Boolean(value.toString().length === 16);
            }
          }
        )
        .required(),
    })
    .required(),
  [FORM_FIELDS.EXPIRY]: yup
    .string()
    .test("validation", "Please enter a valid expiry date", (value: string) =>
      CARD_EXPIRY_PATTERN.test(value)
    )
    .required(),
  [FORM_FIELDS.NAME]: yup.string().max(50).required(),
  [FORM_FIELDS.EMAIL]: yup
    .string()
    .test(
      "validation",
      "Please enter a valid email address",
      (value: string) => {
        if (value.length === 0) {
          return true;
        } else {
          return EMAIL_PATTERN.test(value);
        }
      }
    ),
});
