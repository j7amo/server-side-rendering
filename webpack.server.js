const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // inform Webpack that we are building a bundle for Node.js and not for the browser
  target: 'node',
  // tell Webpack the root file of our server app
  entry: './src/index.js',
  // tell Webpack where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};

// The 'merge' utility function from the 'webpack-merge' package lets us merge 2 configs into one:
module.exports = merge(baseConfig, config);
