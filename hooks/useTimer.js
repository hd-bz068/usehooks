import React from "react";

const useTimer = (initialValue = 0) => {
  const [time, setTime] = React.useState(initialValue);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const start = () => setTimerOn(true);
  const stop = () => setTimerOn(false);
  const resume = () => setTimerOn(true);
  const reset = () => setTime(0);

  const minute = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const second = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const miliSecond = ("0" + ((time / 10) % 100)).slice(-2);

  const actions = {
    start,
    stop,
    resume,
    reset,
  };

  const timer = `${minute}:${second}:${miliSecond}`;

  return [timer, actions];
};

export default useTimer;
