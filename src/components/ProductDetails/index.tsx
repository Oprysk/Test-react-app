import React, { memo } from "react";
import { format } from "date-fns";
import * as s from "./styles";

export const ProductDetailsC: React.FC = () => {
  return (
    <s.Container>
      <s.Row>
        <b>Product: </b>Test product
      </s.Row>
      <s.Row>
        <b>Date: </b>
        {format(new Date(), "dd/MM/yyyy kk:mm:ss")}
      </s.Row>
      <s.Row>
        <b>Amount: </b>1123.03 USD
      </s.Row>
    </s.Container>
  );
};

export const ProductDetails = memo(ProductDetailsC);
