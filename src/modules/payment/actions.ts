import { actionCreatorFactory } from "typescript-fsa";
import { IPaymentCard, IPaymentInput, IPaymentResult } from "./types";

const actionCreator = actionCreatorFactory("PAYMENT");

export const getPaymentCards = actionCreator.async<void, IPaymentCard[]>(
  "GET_PAYMENT_CARDS"
);

export const clearPaymentCards = actionCreator("CLEAR_PAYMENT_CARDS");

export const doPaymentRequest = actionCreator.async<
  IPaymentInput,
  IPaymentResult
>("DO_PAYMENT_REQUEST");

export const switchPaymentFlow = actionCreator<{ isSuccessFlow: boolean }>(
  "SWITCH_PAYMENT_FLOW"
);
