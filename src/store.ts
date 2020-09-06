import configureStore from "./configureStore";
import { Store, CombinedState, AnyAction } from "redux";
import { IRootReducer } from "./reducers";

export const store: Store<
  CombinedState<IRootReducer>,
  AnyAction
> = configureStore();
