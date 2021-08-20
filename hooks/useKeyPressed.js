import { useState, useEffect } from "react";

/**
 * 
 * @param {string} target 
 * @returns {Boolean} pressedKey
 */

function useKeyPressed(target) {
    const [pressedKey, setPressedKey] = useState(false);

    function keyDownFunction({ key }) {
      if (key === target) {
        setPressedKey(true);
      }
    }
    const keyUpFunction = ({ key }) => {
      if (key === target) {
        setPressedKey(false);
      }
    };
    useEffect(() => {
      window.addEventListener("keydown", keyDownFunction);
      window.addEventListener("keyup", keyUpFunction);
      return () => {
        window.removeEventListener("keydown", keyDownFunction);
        window.removeEventListener("keyup", keyUpFunction);
      };
    }, []); 
    return pressedKey;
  }

  export default useKeyPressed;