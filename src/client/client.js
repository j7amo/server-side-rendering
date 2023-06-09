// Startup point for the client side application
// This first import will polyfill the functions for 'async-await' functionality
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);
// Here we use a special 'hydrate' method of ReactDOM to work with SSR markup in the browser.
// This process of adding JS interactivity back to the static markup (which is more of a preview before this step)
// and re-rendering it afterward is called HYDRATION.
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
