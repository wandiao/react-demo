import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './assets/less/style.less';
import router from './router';
import store from './redux/store';


render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root'),
);