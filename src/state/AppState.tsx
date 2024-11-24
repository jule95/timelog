import { FC, ReactElement, useReducer } from 'react';
import appReducer from './app-reducer';
import AppContext, { initState } from './app-context';
import { IAppActions } from '../common/interfaces/state.interfaces';
import { EMessageActions } from '../common/enums/state.enums';

const AppState:FC<{ children: ReactElement}> = props => {
  const [state, dispatch] = useReducer(appReducer, initState);

  const setMessage = (payload: string) => {
    dispatch({ payload, type: EMessageActions.SET_MESSAGE });
  };

  const actions: IAppActions = {
    setMessage,
  };

  return (
    <AppContext.Provider value={{ actions, state }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
