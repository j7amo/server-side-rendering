import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// We use 'express.static' middleware to serve images, CSS files
// and JavaScript files in a directory named 'public'. And this is exactly what we need
// because 'bundle.js' file with all the clientside JS code is located in this folder.
app.use(express.static('public'));

app.get('/', (req, res) => {
  // The problem is: Node environment does not know anything about JSX.
  // So if we try to execute index.js without additional setup,
  // we will get: SyntaxError: Unexpected token '<'
  const content = renderToString(<Home />);

  // We need to include ONLY the client side JS in the resulting HTML
  // to let browser know that it ALSO needs to download the script file for the app to work properly.
  const html = `
    <html lang='en'>
      <head>
        <title>Some SSR page</title>
      </head>
      <body>
        <div>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;

  // Here we only send resulting HTML back to the client
  // NO JS! We need to fix it!
  res.send(html);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
