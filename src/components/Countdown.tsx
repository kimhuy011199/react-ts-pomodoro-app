import React, { useEffect, useState } from 'react';
import { POMO_STATE } from '../core/constants';
import { convertMinsToSecs, convertSecsToMins } from '../core/helper';
import { useAppContext } from '../store/context';
import ProgressBar from './ProgressBar';

const Countdown = () => {
  const { appState, pomoState, setPomoState } = useAppContext();
  const [secondsLeft, setSecondsLeft] = useState<number>(
    convertMinsToSecs(appState.minutes)
  );

  const changeStateHandle = () => {
    switch (pomoState) {
      case POMO_STATE.INITIAL:
      case POMO_STATE.PAUSED:
        setPomoState(POMO_STATE.RUNNING);
        break;
      case POMO_STATE.RUNNING:
        setPomoState(POMO_STATE.PAUSED);
        break;
      case POMO_STATE.END:
        setSecondsLeft(convertMinsToSecs(appState.minutes));
        setPomoState(POMO_STATE.RUNNING);
        break;
    }
  };

  useEffect(() => {
    setSecondsLeft(convertMinsToSecs(appState.minutes));
  }, [appState]);

  useEffect(() => {
    if (pomoState === POMO_STATE.INITIAL) {
      return;
    }
    if (!secondsLeft) {
      setPomoState(POMO_STATE.END);
    }
    let interval: any;
    if (pomoState === POMO_STATE.RUNNING) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [pomoState, setPomoState, secondsLeft]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 relative h-72 w-72 z-0 rounded-full shadow-2xl bg-purple2">
      <div className="absolute top-0 left-0 -z-10">
        <ProgressBar secondsLeft={secondsLeft} />
      </div>
      <span className="text-gray1 text-7xl font-bold mt-6">
        {convertSecsToMins(secondsLeft)}
      </span>
      <button
        onClick={changeStateHandle}
        className="text-gray1 uppercase tracking-[0.7em] font-medium ml-[0.7em]"
      >
        {pomoState}
      </button>
    </div>
  );
};

export default Countdown;
