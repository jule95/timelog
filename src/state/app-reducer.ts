import { produce } from 'immer';
import { IAppState, IStateAction } from '../common/interfaces/state.interfaces';
import { EStateActions } from '../common/enums/state.enums';

const appReducer = produce((draft: IAppState, action: IStateAction) => {
  switch (action.type) {
    case EStateActions.TOGGLE_NEW_ENTRY:
      draft.newEntry = action.payload;
      break;
    case EStateActions.ADD_TIME_LOG:
      draft.timeLogs.push(action.payload);
      draft.newEntry = false;
      break;
    case EStateActions.SET_TIME_LOGS:
      draft.timeLogs = action.payload;
      break;
    default:
  }
});

export default appReducer;
