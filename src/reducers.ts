import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import * as payment from "./modules/payment/reducers";
import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";

export interface IRootReducer {
  router: RouterState;
  payment: payment.IReducer;
}

const rootReducer = (
  history: History
): Reducer<CombinedState<IRootReducer>, AnyAction> =>
  combineReducers<IRootReducer>({
    router: connectRouter(history),
    payment: payment.reducer,
  });

export default rootReducer;
