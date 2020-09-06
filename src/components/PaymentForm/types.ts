import { IPaymentCard } from "../../modules/payment/types";

export interface IProps {
  cardTypes: IPaymentCard[];
  onSubmit: (data: IFormValues) => void;
}

export interface IFormValues {
  cardType: string;
  cardNumber: number;
  expiry: string;
  name: string;
  email: string;
}

export enum FORM_FIELDS {
  CARD_TYPE = "cardType",
  CARD_NUMBER = "cardNumber",
  EXPIRY = "expiry",
  NAME = "name",
  EMAIL = "email",
}
