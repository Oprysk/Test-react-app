import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Action } from "typescript-fsa";
import axios, { AxiosResponse } from "axios";
import * as actions from "./actions";
import { IPaymentCardsResponse, IPaymentInput, IPaymentResult } from "./types";
import { API_ENDPOINT } from "../../api/constants";

export function* getPaymentCardsSaga(action: Action<void>): SagaIterator {
  try {
    const { data }: AxiosResponse<IPaymentCardsResponse> = yield call(
      axios.get,
      API_ENDPOINT.CARD_TYPES
    );
    yield put(
      actions.getPaymentCards.done({
        params: action.payload,
        result: data.cardTypes,
      })
    );
  } catch (e) {
    yield put(
      actions.getPaymentCards.failed({ params: action.payload, error: e })
    );
  }
}

export function* doPaymentRequestSaga({
  payload,
}: Action<IPaymentInput>): SagaIterator {
  const formData = btoa(JSON.stringify(payload.formData));
  try {
    const { data }: AxiosResponse<IPaymentResult> = yield call(
      axios.post,
      payload.simulateSuccessCase
        ? API_ENDPOINT.SUCCESS_CASE
        : API_ENDPOINT.FAILED_CASE,
      { data: formData }
    );
    yield put(
      actions.doPaymentRequest.done({
        params: payload,
        result: data,
      })
    );
  } catch (e) {
    yield put(actions.doPaymentRequest.failed({ params: payload, error: e }));
  }
}

export function* watcherSaga(): SagaIterator {
  yield all([
    takeLatest(actions.getPaymentCards.started, getPaymentCardsSaga),
    takeLatest(actions.doPaymentRequest.started, doPaymentRequestSaga),
  ]);
}
