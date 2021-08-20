import { useState } from "react";

const useCopyToClipboard = () => {
  const [state, setstate] = useState("");

  const copy = (copyText) => {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    setstate(copyText);
    dummy.value = copyText;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };
  return [state, copy];
};

export default useCopyToClipboard;
