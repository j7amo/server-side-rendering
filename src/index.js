// This first import will polyfill the functions for 'async-await' functionality
import 'babel-polyfill';
import express from 'express';
import renderHtml from './helpers/renderHtml';
import createStore from './helpers/createStore';

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
  // This might look strange but Redux store on the server MUST be set up differently!
  // We need it to behave differently - NOT like the Redux store in the browser.
  // The usual behavior of the React-Redux app in the browser in the context of
  // fetching some data:
  // 1) dispatch an action
  // 2) call API
  // 3) resolve API call and receive data
  // 4) call the reducer and get the updated state
  // 5) update the React layer
  // But we DON'T update React layer on the server side. It is static! We don't mount components!
  // We just get the resulting HTML which is a static string.
  // On the client side in the browser it all happens naturally!
  // We don't know the exact moment when the data from the API is received
  // OR when the state inside Redux store is updated. We don't get any signals about these things.
  // But on the server we NEED TO KNOW THE EXACT MOMENT the data is received and AS SOON AS THE DATA IS RECEIVED
  // we must attempt to generate HTML and send it to the browser as quick as possible! Because this
  // is basically the whole point of SSR - user should get the content blazing fast!

  // We are creating a Redux store here, initialize and add data to it
  // and finally pass it to 'renderHtml' function.
  const store = createStore();

  // Here we only send resulting HTML back to the client
  // NO JS! We need to fix it!
  res.send(renderHtml(req, store));
});

app.listen(3000, () => console.log('Server is running on port 3000'));
