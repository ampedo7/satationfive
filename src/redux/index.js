import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { toast } from 'react-toastify';
import { unAuthenticate } from '@s/auth';
import history from '@s/history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({
    onError: (err) => {
      if (err.data) toast.error(err.data.errors.msg || err.data.errors);
      if (err.status === 401) {
        unAuthenticate();
        history.push('/register');
      }
    },
  });
  const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export { configureStore, history };
