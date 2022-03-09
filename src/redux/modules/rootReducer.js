import { combineReducers } from 'redux';
import { groupsReducer } from './groups/reducers';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    groupsReducer: groupsReducer,
  });
export default rootReducer;
