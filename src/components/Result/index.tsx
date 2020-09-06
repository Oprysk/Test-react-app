import React, { memo } from "react";
import { IProps } from "./types";
import { RESPONSE_CODES } from "../../constants";
import * as s from "./styles";

export const ResultComponent: React.FC<IProps> = ({
  responseCode,
  invoiceNo,
  responseMessage,
}: IProps) => {
  return (
    <s.Container>
      <s.Message success={responseCode === RESPONSE_CODES.SUCCESS}>
        {responseMessage}
      </s.Message>
      {invoiceNo && (
        <s.Row>
          <b>Invoice: </b>
          {invoiceNo}
        </s.Row>
      )}
    </s.Container>
  );
};

export const Result = memo<IProps>(ResultComponent);
