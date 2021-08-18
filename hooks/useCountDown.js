import { useRef, useState, useEffect } from "react";

/**
 * Custom hook for creating and managing countdown timer.
 *
 * @param {Date} DATE Initial value of the stack.
 * @return {Array} Array containing the days, hours, mins and seconds.
 */

const useCountDown = (DATE) => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const interval = useRef;

  const start = () => {
    const countDownDate = new Date(DATE).getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 )) / (1000 * 60)
      );

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    start();
    return () => {
      clearInterval(interval.current);
    };
  });

  return [timerDays, timerHours, timerMinutes, timerSeconds]
};

export default useCountDown;
