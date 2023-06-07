import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
  // The problem is: Node environment does not know anything about JSX.
  // So if we try to execute index.js without additional setup,
  // we will get: SyntaxError: Unexpected token '<'
  const content = renderToString(<Home />);

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
