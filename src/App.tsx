import React from 'react';
import Countdown from './components/Countdown';
import Settings from './components/Settings';
import { ReactComponent as Logo } from './assets/logo.svg';
import { useAppContext } from './store/context';

const App = () => {
  const { appState } = useAppContext();
  const classNames = `${appState.font} bg-purple1 w-screen h-screen overflow-hidden flex flex-col items-center justify-between gap-10 py-20`;

  return (
    <div className={classNames}>
      <Logo />
      <Countdown />
      <Settings />
    </div>
  );
};

export default App;
