import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';

export default (req) => {
  // Here we create another Axios instance but this time for the server-side-rendering side.
  // In this case we have to manually attach the cookie to the request because the request itself
  // is not carried by the browser this time, and we still want to trick the API
  // into thinking that this request comes from the browser.
  const axiosInstance = axios.create({
    baseURL: 'https://react-ssr-api.herokuapp.com/',
    headers: {
      cookie: req.get('cookie') || '',
    },
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
