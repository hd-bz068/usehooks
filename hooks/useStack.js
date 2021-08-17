import { useState } from "react";

const useStack = (initialState) => {
  const [stack, setStack] = useState(initialState);

  const push = (item) => {
    setStack([...stack, item]);
  };

  const pop = () => {
    if (stack.length > 0) {
      const newStackItem = [...stack];
      const poppedValue = newStackItem.pop();
      setStack(newStackItem);
      return poppedValue;
    }
    return undefined;
  };

  return [stack, push, pop];
};

export default useStack;
