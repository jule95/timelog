import { EMessageActions } from '../enums/state.enums';

export interface IStateAction {
  type: EMessageActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any; // ToDo: Figure this out.
}

export interface IAppState {
  newEntry: boolean;
}

export interface IAppActions {
  toggleNewEntry: () => void;
}

export interface IAppContext {
  actions: IAppActions;
  state: IAppState;
}
