import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: { background: "#3e3e40" },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const SpinIcon = styled.img`
  height: 35px;
  animation: spin 4s linear infinite;
`;
