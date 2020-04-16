import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import RootStore from 'stores/root';

import 'react-datepicker/dist/react-datepicker.css';
import 'c3/c3.css';

import App from './App';

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root')
);
