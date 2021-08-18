import { useState, useCallback } from "react";

const useArray = (initialState = []) => {
  const [state, setstate] = useState(initialState);

  const actions = {
    add: useCallback((a) => setstate((v) => [...v, a])),
    clear: useCallback(() => setstate((v) => [])),
    removeById: useCallback((id) =>
      setstate((arr) => arr.filter((item) => item && item.id !== id))
    ),
    removeAt: useCallback((index) =>
      setstate((arr) => {
        arr.splice(index, 1);
        return arr;
      })
    ),
  };

  return [state, setstate, actions];
};

export default useArray;
