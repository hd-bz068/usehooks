import { useState } from "react";
/*
 *
 * @param {Function} action function to be called.
 */
const useIsLoading = (action) => {
  const [loading, setLoading] = useState(false);
  const doAction = (...args) => {
    setLoading(true);
    return action(...args).finally(() => setLoading(false));
  };
  return [doAction, loading];
};
export default useIsLoading;
