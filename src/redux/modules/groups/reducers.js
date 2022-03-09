import { produce } from 'immer';

const INITIAL_STATE = {
  data: {},
  sucess: false,
  loading: true,
};

export const groupsReducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@group/POST': {
        draft.loading = true;
        break;
      }
      case '@group/POST_SUCCESS': {
        draft.data = action.payload.data || {};
        draft.loading = false;
        draft.success = true;
        break;
      }
      case '@group/POST_FAILED': {
        draft.loading = false;
        draft.success = false;
        break;
      }
      default:
        break;
    }
  });
};
