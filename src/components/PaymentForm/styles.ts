import styled from "styled-components";
import { Button, Select, TextField } from "@material-ui/core";
import red from "@material-ui/core/colors/red";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TextInput = styled(TextField)`
  width: 100%;
  margin-top: 11px;
`;

export const Dropdown = styled(Select)`
  width: 100%;
  margin-top: 11px;
`;

export const ErrorMessage = styled.div`
  margin-top: 8px;
  color: ${red[500]};
`;

export const SubmitButton = styled(Button)`
  height: 40px;
  margin-top: 20px;
`;
