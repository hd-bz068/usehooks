import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (MODE = false) => {
  const [enabled, setEnabled] = useLocalStorage("dark-mode", MODE);

  const handleChange = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    if (enabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [enabled]);

  return [enabled, handleChange];
};

export default useDarkMode;
