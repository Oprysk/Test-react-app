import styled from "styled-components";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const Row = styled.div`
  font-size: 18px;
`;

export const Message = styled.div<{ success: boolean }>`
  font-size: 20px;
  margin: 10px 0;
  color: ${({ success }: { success: boolean }): string =>
    success ? blue[500] : red[500]};
`;
