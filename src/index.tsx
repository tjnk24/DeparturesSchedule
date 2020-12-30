import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import App from '@components/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import getProps from '@store/actions/appProps';
import api from '@utils/api';
import store from './store';

store.dispatch(getProps(api.appProps));

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

render(
  app,
  document.getElementById('root'),
);
