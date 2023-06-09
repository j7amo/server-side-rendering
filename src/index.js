// This first import will polyfill the functions for 'async-await' functionality
import 'babel-polyfill';
import express from 'express';
import renderHtml from './helpers/renderHtml';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes';

const app = express();
// We are using cookie-based authentication in our app (because JWT solution is far from ideal - we cannot attach
// JWT on the first request BUT we already are expecting to see the page after this very first request).
// With cookie-based auth solution we don't have control over sending cookies BUT the browser
// will send them automatically for us if they MATCH DOMAIN THAT ISSUED THEM ORIGINALLY.
// To make this matching happen we have to set up a proxy that
// will redirect initial request from the browser to the API so that browser can successfully send the cookie.
// So we basically 'trick' the browser into thinking that it is sending cookies
// to the API when in reality it communicates with the rendering server!
// Then on the rendering server we
// 1) intercept and extract the cookie from the request
// 2) attach cookie to axios request to the API
// 3) API sees the cookie, recognizes us and gives us the data we need
// 4) we use this data for SSR of the pages that require authentication
// 5) we send back complete HTML with all the needed data
app.use(
  '/api',
  proxy('https://react-ssr-api.herokuapp.com/', {
    // This particular setup is needed because the author of API set it up in some specific way.
    // Usually we don't need this setup.
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';

      return opts;
    },
  })
);
// We use 'express.static' middleware to serve images, CSS files
// and JavaScript files in a directory named 'public'. And this is exactly what we need
// because 'bundle.js' file with all the clientside JS code is located in this folder.
app.use(express.static('public'));

// We are using '*' here to let Express catch ANY route BUT not really handling it.
// No matter what path is requested ('/banana', '/123' etc.) by user,
// Express will behave exactly the same:
// it will send back the result of calling 'renderHtml' function that WILL really handle
// routing because it uses StaticRouter under the hood.
app.get('*', async (req, res) => {
  // This might look strange but Redux store on the server MUST be set up differently!
  // We need it to behave differently - NOT like the Redux store in the browser.
  // The usual behavior of the React-Redux app in the browser in the context of
  // fetching some data:
  // 1) dispatch an action from a lifecycle method/useEffect hook
  // 2) call API from thunk
  // 3) resolve API call and receive data
  // 4) call the reducer and get the updated state
  // 5) update the React layer via connect function/useSelector hook
  // BUT:
  // 'componentDidMount' lifecycle method is NOT invoked when we call 'renderToString' function!
  // So we end up with no data and cannot show it to the user as a result.

  // We are creating a Redux store here, initialize and add data to it
  // and finally pass it to 'renderHtml' function.
  const store = createStore(req);

  // Before we pass the store to 'renderHtml' function we need it to contain all the data (i.e. everything
  // should be fetched). To understand what exactly we should fetch we first need to somehow know what
  // set of components we will render.
  // 'matchRoutes' function can help us with that.
  // It checks if some route is matched based on the user request
  // and returns the array of components to be rendered.
  // So by now we know exact components to be rendered WITHOUT rendering them (remember that we want
  // to 1) fetch all the needed data 2) render the app ONLY once 3) return the string to the client).
  const pendingRequests = matchRoutes(Routes, req.path).map((matchedRoute) => {
    if (matchedRoute.route.loadData) {
      return matchedRoute.route.loadData(store);
    }
  });

  // 'pendingRequests' is an array of promises because 'loadData' function returns a promise.
  // To make sure that we
  // 1) fetch all the data and
  // 2) update store with this data before rendering - we await 'Promise.all'
  await Promise.all(pendingRequests);

  // And now we have everything we need to create markup and send it to the client
  res.send(renderHtml(req, store));
});

app.listen(3000, () => console.log('Server is running on port 3000'));
