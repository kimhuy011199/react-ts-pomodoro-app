import React, { useState } from 'react';
import { POMO_STATE } from '../core/constants';
import { AppStateInterface } from '../core/interface';

interface AppContextOptions {
  appState: AppStateInterface;
  setAppState: (props: AppStateInterface) => void;
  pomoState: string;
  setPomoState: (props: string) => void;
}

const AppContext = React.createContext({} as AppContextOptions);

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useDialog must be used within a AppContextProvider');
  }
  return context;
};

const AppStateProvider = (props: any) => {
  const [appState, setAppState] = useState<AppStateInterface>({
    minutes: 1,
    color: 'red',
    font: 'kumbh',
  });

  const [pomoState, setPomoState] = useState<string>(POMO_STATE.INITIAL);

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
        pomoState,
        setPomoState,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppStateProvider;
