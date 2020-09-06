import { createSelector } from "reselect";
import { IRootReducer } from "../../reducers";
import { IReducer } from "./reducers";
import { IPaymentCard } from "./types";

const rootSelector = (state: IRootReducer): IReducer => state.payment;

const DISPLAY_CARDS: string[] = ["MasterCard", "Visa", "Amex"];

export const takePaymentCards = createSelector(
  rootSelector,
  (state: IReducer): IReducer["paymentCards"] =>
    state.paymentCards.filter((card: IPaymentCard) =>
      DISPLAY_CARDS.includes(card.value)
    )
);

export const takePaymentResult = createSelector(
  rootSelector,
  (state: IReducer): IReducer["paymentResult"] => state.paymentResult
);

export const takeIsSuccessFlow = createSelector(
  rootSelector,
  (state: IReducer): IReducer["isSuccessFlow"] => state.isSuccessFlow
);
