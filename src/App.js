import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { configureStore, history } from './redux';
import GlobalStyle from './styles/global';
import './services/font-awesome';
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
