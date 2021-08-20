import { useState } from "react";

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

/**
 * this hook changes speech into text, simply talk into microphone and it will return the text. This hook returns an array with **text** & **status** & **start** function which starts the recognition.
 * @returns {Array}
 */
const useSpeechRecognition = () => {
  const [state, setstate] = useState("");
  const [status, setStatus] = useState(null);

  const recognition = new SpeechRecognition();

  recognition.onstart = () => {
    setStatus("Listening....");
  };
  recognition.onresult = (event) => {
    const current = event.resultIndex;
    const text = event.results[current][0].transcript;
    setStatus(null);
    setstate(text);
  };

  const start = () => {
    recognition.start();
  };
  return [state, status, start];
};

export default useSpeechRecognition;
