import express from 'express';
import renderHtml from './helpers/renderHtml';

const app = express();

// We use 'express.static' middleware to serve images, CSS files
// and JavaScript files in a directory named 'public'. And this is exactly what we need
// because 'bundle.js' file with all the clientside JS code is located in this folder.
app.use(express.static('public'));

// We are using '*' here to let Express catch ANY route BUT not really handling it.
// No matter what path is requested ('/banana', '/123' etc.) by user,
// Express will behave exactly the same:
// it will send back the result of calling 'renderHtml' function that WILL really handle
// routing because it uses StaticRouter under the hood.
app.get('*', (req, res) => {
  // Here we only send resulting HTML back to the client
  // NO JS! We need to fix it!
  res.send(renderHtml(req));
});

app.listen(3000, () => console.log('Server is running on port 3000'));
