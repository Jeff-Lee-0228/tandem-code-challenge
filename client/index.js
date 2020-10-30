import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
