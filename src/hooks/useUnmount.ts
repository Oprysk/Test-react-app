import { useEffect } from "react";

export const useUnmount = (callback: () => void | undefined): void => {
  useEffect(() => {
    return callback;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
