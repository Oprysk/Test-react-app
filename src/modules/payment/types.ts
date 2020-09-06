import { IFormValues } from "../../components/PaymentForm/types";

export interface IPaymentCard {
  id: string;
  value: string;
}

export interface IPaymentCardsResponse {
  cardTypes: IPaymentCard[];
}

export interface IPaymentInput {
  formData: IFormValues;
  simulateSuccessCase: boolean;
}

export interface IPaymentResult {
  approvalCode: string;
  invoiceNo: string;
  responseCode: string;
  responseMessage: string;
}
