import { useState, useEffect } from "react";
/**
 * this hook returns the size of window as it resizes.
 * @returns {Array} x and y size
 */
function useWindowSize() {

  const [windowHeight, setWindowHeight] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return [windowHeight, windowWidth];
}
export default useWindowSize;
