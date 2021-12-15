import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'store/reducer';
import { redirect } from 'store/redirect';
import { fetchAllQuests } from './api/actions-api'
import { api } from './api/api';
import App from 'components/app/app';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect),
});

store.dispatch(fetchAllQuests());

render(
  <StrictMode>
    <Provider store={store}>
        <ToastContainer />
        <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
