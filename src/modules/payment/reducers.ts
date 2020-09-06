import { Failure, Success } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import * as actions from "./actions";
import { IPaymentCard, IPaymentInput, IPaymentResult } from "./types";

export interface IReducer {
  paymentCards: IPaymentCard[];
  arePaymentCardsLoading: boolean;
  isPaymentProcessing: boolean;
  paymentResult: IPaymentResult | null;
  isSuccessFlow: boolean;
}

export const initialState: IReducer = {
  paymentCards: [],
  arePaymentCardsLoading: false,
  isPaymentProcessing: false,
  paymentResult: null,
  isSuccessFlow: true,
};

export const reducer = reducerWithInitialState(initialState)
  .case(
    actions.getPaymentCards.started,
    (state: IReducer): IReducer => ({
      ...state,
      arePaymentCardsLoading: true,
    })
  )
  .case(
    actions.getPaymentCards.done,
    (state: IReducer, { result }: Success<void, IPaymentCard[]>): IReducer => ({
      ...state,
      arePaymentCardsLoading: false,
      paymentCards: result,
    })
  )
  .case(
    actions.getPaymentCards.failed,
    (state: IReducer): IReducer => ({
      ...state,
      arePaymentCardsLoading: false,
    })
  )
  .case(
    actions.clearPaymentCards,
    (state: IReducer): IReducer => ({
      ...state,
      paymentCards: [],
    })
  )
  .case(
    actions.doPaymentRequest.started,
    (state: IReducer): IReducer => ({
      ...state,
      isPaymentProcessing: true,
    })
  )
  .case(
    actions.doPaymentRequest.done,
    (
      state: IReducer,
      { result }: Success<IPaymentInput, IPaymentResult>
    ): IReducer => ({
      ...state,
      paymentResult: result,
    })
  )
  .case(
    actions.doPaymentRequest.failed,
    (state: IReducer, { error }: Failure<IPaymentInput, any>): IReducer => ({
      ...state,
      paymentResult: error?.response?.data,
      isPaymentProcessing: false,
    })
  )
  .case(
    actions.switchPaymentFlow,
    (
      state: IReducer,
      { isSuccessFlow }: { isSuccessFlow: boolean }
    ): IReducer => ({
      ...state,
      paymentResult: null,
      isSuccessFlow,
    })
  );
