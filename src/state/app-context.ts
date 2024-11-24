import { createContext } from 'react';
import { IAppContext, IAppState } from '../common/interfaces/state.interfaces';

export const initState: IAppState = {
  message: ``,
};

const AppContext = createContext<IAppContext>({
  actions: {
    setMessage: () => {},
  },
  state: {
    message: ``,
  },
});

export default AppContext;
