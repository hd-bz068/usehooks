import { useState } from "react";
/**
 * 
 * @param {String} text 
 */

const useSpeak = (text) => {
    const [state, setstate] = useState(text)
  const speak = () => {
    const speech = new SpeechSynthesisUtterance(state);
    speechSynthesis.speak(speech);
  };
  return [state, setstate, speak];
};

export default useSpeak;
