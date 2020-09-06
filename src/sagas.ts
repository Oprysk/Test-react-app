import { watcherSaga as paymentSaga } from "./modules/payment/sagas";
import { all, AllEffect } from "redux-saga/effects";

export function* rootSaga(): Generator<AllEffect<any>, void, unknown> {
  yield all([paymentSaga()]);
}
