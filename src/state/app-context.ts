import { createContext } from 'react';
import { IAppContext, IAppState } from '../common/interfaces/state.interfaces';

export const initState: IAppState = {
  newEntry: false,
  timeLogs: [],
};

const AppContext = createContext<IAppContext>({
  actions: {
    addTimeLog: () => {},
    setTimeLogs: () => {},
    toggleNewEntry: () => {},
  },
  state: {
    newEntry: false,
    timeLogs: [],
  },
});

export default AppContext;
