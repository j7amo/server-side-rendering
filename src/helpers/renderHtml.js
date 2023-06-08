import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';

export default (req, store) => {
  // The problem is: Node environment does not know anything about JSX.
  // So if we try to execute index.js without additional setup,
  // we will get: SyntaxError: Unexpected token '<'
  const content = renderToString(
    // StaticRouter cannot look at the address bar like BrowserRouter does,
    // so we need to pass the current path user is trying to visit via 'location' prop.
    // The path can be found on a 'req' object of Express route handler.
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  // We need to include ONLY the client side JS in the resulting HTML
  // to let browser know that it ALSO needs to download the script file for the app to work properly.
  return `
    <html lang='en'>
      <head>
        <title>Some SSR page</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;
};
