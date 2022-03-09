import { all } from 'redux-saga/effects';

import groups from './groups/sagas';

export default function* rootSaga() {
  return yield all([groups]);
}
