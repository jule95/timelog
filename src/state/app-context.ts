import { createContext } from 'react';
import { IAppContext, IAppState } from '../common/interfaces/state.interfaces';

export const initState: IAppState = {
  newEntry: false,
};

const AppContext = createContext<IAppContext>({
  actions: {
    toggleNewEntry: () => {},
  },
  state: {
    newEntry: false,
  },
});

export default AppContext;
