import express from 'express';
import renderHtml from './helpers/renderHtml';

const app = express();

// We use 'express.static' middleware to serve images, CSS files
// and JavaScript files in a directory named 'public'. And this is exactly what we need
// because 'bundle.js' file with all the clientside JS code is located in this folder.
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Here we only send resulting HTML back to the client
  // NO JS! We need to fix it!
  res.send(renderHtml());
});

app.listen(3000, () => console.log('Server is running on port 3000'));
