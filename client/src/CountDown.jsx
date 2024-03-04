import React, { useState, useEffect, useRef } from "react";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinuts, setTimerMinuts] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const setTimer = () => {
    const countdownDate = new Date("march 11, 2024 11:11:11").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinuts(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 text-white text-center auto-cols-max">
        <div className="w-[115px] text-gray-400 rounded-full m-2 sm:m-5 p-[5px]">
          <span className="text-white-600 font-bold text-4xl sm:text-5xl">
            <span style={{ "--value": 15 }} className="text-white">
              {timerDays}
            </span>
          </span>
          days
        </div>
        <div className="w-[100px] text-gray-400 rounded-full m-2 sm:m-5  p-[5px]">
          <span className="text-white-600 font-bold text-4xl sm:text-5xl">
            <span style={{ "--value": 10 }} className="text-white">
              {timerHours}
            </span>
          </span>
          hours
        </div>
        <div className="w-[100px] text-gray-400 rounded-full m-2 sm:m-5  p-[5px]">
          <span className="text-white-600 font-bold text-4xl sm:text-5xl">
            <span style={{ "--value": 24 }} className="text-white">
              {timerMinuts}
            </span>
          </span>
          min
        </div>
        <div className="w-[100px] text-gray-400 rounded-full m-2 sm:m-5  p-[5px]">
          <span className="text-white-600 font-bold text-4xl sm:text-5xl">
            <span style={{ "--value": 20 }} className="text-white">
              {timerSeconds}
            </span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export { CountDown };
