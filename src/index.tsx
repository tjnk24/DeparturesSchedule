import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import App from '@components/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '@store/provider';

const app = (
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);

render(
  app,
  document.getElementById('root'),
);
