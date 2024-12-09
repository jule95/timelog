import { FC, ReactElement, useReducer } from 'react';
import appReducer from './app-reducer';
import AppContext, { initState } from './app-context';
import { IAppActions } from '../common/interfaces/state.interfaces';
import { EStateActions } from '../common/enums/state.enums';
import { ITimeLog } from '../pages/MyTimeLog/MyTimeLog.types.ts';

const AppState:FC<{ children: ReactElement}> = props => {
  const [state, dispatch] = useReducer(appReducer, initState);

  const toggleNewEntry = () => {
    dispatch({ payload: !state.newEntry, type: EStateActions.TOGGLE_NEW_ENTRY });
  };

  const addTimeLog = (payload: ITimeLog) => {
    dispatch({ payload, type: EStateActions.ADD_TIME_LOG });
  };

  const setTimeLogs = (payload: ITimeLog[]) => {
    dispatch({ payload, type: EStateActions.SET_TIME_LOGS });
  };

  const actions: IAppActions = {
    addTimeLog,
    setTimeLogs,
    toggleNewEntry,
  };

  return (
    <AppContext.Provider value={{ actions, state }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
