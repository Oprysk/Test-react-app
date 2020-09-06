import React, { memo, useCallback } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IProps } from "./types";

export const SwitcherComponent: React.FC<IProps> = ({ onSwitch }: IProps) => {
  const [isChecked, setIsChecked]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState<boolean>(false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      onSwitch(event.target.checked);
    },
    [onSwitch]
  );

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isChecked}
          onChange={handleChange}
          name="switcher"
          color="primary"
        />
      }
      label="Switch to failed case"
    />
  );
};

export const Switcher = memo<IProps>(SwitcherComponent);
