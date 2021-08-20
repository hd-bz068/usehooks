import { useState, useEffect, useRef } from "react";

/**
 *
 * @returns {Array} with the reference that can be used on the element and value which is {Boolean}
 */

function useOnHover() {
  const [value, setValue] = useState(false);
  const reference = useRef(null);

  const onMouseHoverIn = () => setValue(true);
  const onMouseHoverOut = () => setValue(false);

  useEffect(() => {
    const endPoint = reference.current;
    if (endPoint) {
      endPoint.addEventListener("mouseover", onMouseHoverIn);
      endPoint.addEventListener("mouseout", onMouseHoverOut);
      return () => {
        endPoint.removeEventListener("mouseover", onMouseHoverIn);
        endPoint.removeEventListener("mouseout", onMouseHoverOut);
      };
    }
  }, [reference.current]);
  return [reference, value];
}

export default useOnHover;
