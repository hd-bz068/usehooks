import { useEffect, useState } from "react";

const useDocumentTitle = (initialState) => {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    setstate(initialState);
    document.title = initialState;
  }, [initialState]);

  return state;
};

export default useDocumentTitle;
