import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

export default (req, store, context) => {
  // The problem is: Node environment does not know anything about JSX.
  // So if we try to execute index.js without additional setup,
  // we will get: SyntaxError: Unexpected token '<'
  const content = renderToString(
    // StaticRouter cannot look at the address bar like BrowserRouter does,
    // so we need to pass the current path user is trying to visit via 'location' prop.
    // The path can be found on a 'req' object of Express route handler.
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // 1) We need to include ONLY the client side JS in the resulting HTML
  // to let browser know that it ALSO needs to download the script file for the app to work properly.
  // 2) We also need to somehow PASS the already initialized Redux STATE TO the BROWSER.
  // Why? Because browser will initialize its own Redux store which will start completely EMPTY ->
  // this will trigger the fetching of data again -> this will result in the screen flashing
  // because data fetched on the server will be overwritten with blank data(it will trigger re-render)
  // and then the blank data will be overwritten with newly fetched data again(it will trigger re-render again).
  // But we don't want this behavior because the data was already fetched on the server before rendering
  // and sending back the markup.
  // 3) We also need to be very careful with XSS attacks. Why? React has XSS attacks defense built-in.
  // But the problem here is that we inject JS into a global variable on the 'window' object.
  // Which is a great place for malicious users to add some malicious code for our browser to execute.
  // That's why instead of 'JSON.stringify' we are using 'serialize' function from the 'serialize-javascript'
  // package. What it does: it does the coding of all the special characters (e.g. </\>) into Unicode.
  // When the browser sees something like '\u003C' (which is '<'), it DOES NOT TRY TO EXECUTE IT. It
  // just uses this information only for rendering purposes. So '\u003C' will be rendered as '<' but no execution!
  return `
    <html lang='en'>
      <head>
        <title>Some SSR page</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;
};
