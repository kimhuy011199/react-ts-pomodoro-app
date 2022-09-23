import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { POMO_STATE } from '../core/constants';
import { useAppContext } from '../store/context';

interface ProgressBarProps {
  secondsLeft: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { secondsLeft } = props;
  const { pomoState, appState } = useAppContext();
  const controls = useAnimation();
  const strokeColor =
    appState.color === 'red'
      ? 'stroke-red'
      : appState.color === 'cyan'
      ? 'stroke-cyan'
      : 'stroke-pink';

  useEffect(() => {
    switch (pomoState) {
      case POMO_STATE.INITIAL:
        controls.stop();
        controls.set({
          pathLength: 0,
        });
        break;
      case POMO_STATE.RUNNING:
        controls.start({
          pathLength: 1,
          transition: { duration: secondsLeft, ease: 'linear' },
        });
        break;
      case POMO_STATE.END:
        controls.set({
          pathLength: 0,
        });
        break;
      default:
        controls.stop();
    }
    // eslint-disable-next-line
  }, [pomoState]);

  return (
    <svg
      className="h-72 w-72 rotate-[-90deg]"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        strokeWidth="3"
        strokeLinecap="round"
        fill="transparent"
        className={strokeColor}
        initial={{ pathLength: 0 }}
        animate={controls}
      />
    </svg>
  );
};

export default ProgressBar;
