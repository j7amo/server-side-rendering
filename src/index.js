const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Home = require('./client/components/Home');

const app = express();

app.get('/', (req, res) => {
  // the problem is: Node environment does not know anything about JSX.
  // so if we try to execute index.js without additional setup,
  // we will get: SyntaxError: Unexpected token '<'
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
