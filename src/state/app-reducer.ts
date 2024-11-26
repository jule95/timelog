import { produce } from 'immer';
import { IAppState, IStateAction } from '../common/interfaces/state.interfaces';
import { EMessageActions } from '../common/enums/state.enums';

const appReducer = produce((draft: IAppState, action: IStateAction) => {
  switch (action.type) {
    case EMessageActions.SET_NEW_ENTRY:
      draft.newEntry = action.payload;
      break;
    default:
  }
});

export default appReducer;
