import { useState } from "react";

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind];
};

export default useInput;
