import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useMount } from "../../hooks/useMount";

import * as action from "../../modules/payment/actions";
import {
  takeIsSuccessFlow,
  takePaymentCards,
  takePaymentResult,
} from "../../modules/payment/selectors";
import { AppBar } from "../../components/AppBar";
import { ProductDetails } from "../../components/ProductDetails";
import { PaymentForm } from "../../components/PaymentForm";
import { IPaymentCard, IPaymentResult } from "../../modules/payment/types";
import { IFormValues } from "../../components/PaymentForm/types";
import { Result } from "../../components/Result";

export const RootComponent: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const cardTypes: IPaymentCard[] = useSelector(takePaymentCards);
  const paymentResult: IPaymentResult | null = useSelector(takePaymentResult);
  const simulateSuccessCase: boolean = useSelector(takeIsSuccessFlow);

  useMount(() => {
    dispatch(action.getPaymentCards.started());
  });

  const handleSubmitPayment = useCallback(
    (data: IFormValues) => {
      dispatch(
        action.doPaymentRequest.started({
          formData: data,
          simulateSuccessCase,
        })
      );
    },
    [dispatch, simulateSuccessCase]
  );

  const handleSwitch = useCallback(
    (flag: boolean) => {
      dispatch(action.switchPaymentFlow({ isSuccessFlow: !flag }));
    },
    [dispatch]
  );

  return (
    <>
      <AppBar onSwitchPaymentCase={handleSwitch} />
      <ProductDetails />
      {paymentResult ? (
        <Result {...paymentResult} />
      ) : (
        <PaymentForm cardTypes={cardTypes} onSubmit={handleSubmitPayment} />
      )}
    </>
  );
};

export const Root = memo(RootComponent);
