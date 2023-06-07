const path = require('path');

module.exports = {
  // inform Webpack that we are building a bundle for Node.js and not for the browser
  target: 'node',
  // tell Webpack the root file of our server app
  entry: './src/index.js',
  // tell Webpack where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // tell Webpack to run Babel on every JSX file it runs through to transpile it to ES5 Javascript
  // and to skip 'node_modules' directory
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react', // this turns jsx into normal js function calls
            'stage-0', // this is for handling async code
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};
