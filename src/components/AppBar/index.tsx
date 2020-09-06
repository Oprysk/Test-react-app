import React, { memo } from "react";
import AppBarComponent from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Switcher } from "../Switcher";
import { useStyles, SpinIcon } from "./styles";
import { IProps } from "./types";

export const AppBarC: React.FC<IProps> = ({ onSwitchPaymentCase }: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBarComponent position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="caption" className={classes.title}>
            <SpinIcon
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            />
          </Typography>
          <Switcher onSwitch={onSwitchPaymentCase} />
        </Toolbar>
      </AppBarComponent>
    </div>
  );
};

export const AppBar = memo<IProps>(AppBarC);
