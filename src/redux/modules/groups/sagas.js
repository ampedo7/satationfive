import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import api from '@s/api';
import { postGroupFailed } from './actions';

export function* postGroupApi({ payload }) {
  try {
    let _route = `api/group`;
    yield delay(300);
    yield call(api.post, _route, {
      ...payload,
    });
    return yield delay(300);
    // return yield put(postGroup(response));
  } catch (err) {
    return yield put(postGroupFailed());
  }
}

export default all([takeLatest('@group/POST', postGroupApi)]);
