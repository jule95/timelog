import { EStateActions } from '../enums/state.enums';
import { ITimeLog } from '../../pages/MyTimeLog/MyTimeLog.types.ts';

export interface IStateAction {
  type: EStateActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any; // ToDo: Figure this out.
}

export interface IAppState {
  newEntry: boolean;
  timeLogs: ITimeLog[];
}

export interface IAppActions {
  setTimeLogs: (payload: ITimeLog[]) => void;
  toggleNewEntry: () => void;
  addTimeLog: (payload: ITimeLog) => void;
}

export interface IAppContext {
  actions: IAppActions;
  state: IAppState;
}
