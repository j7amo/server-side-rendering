import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.get('/', (req, res) => {
  // The problem is: Node environment does not know anything about JSX.
  // So if we try to execute index.js without additional setup,
  // we will get: SyntaxError: Unexpected token '<'
  const content = renderToString(<Home />);

  // Here we only send resulting HTML back to the client
  // NO JS! We need to fix it!
  res.send(content);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
