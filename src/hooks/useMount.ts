import { useEffect } from "react";

export const useMount = (callback: Function): void => {
  return useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
