// In this Webpack config file we are creating a separate configuration
// for JS that will be shipped to the browser.
// But why can't we just use 'build/bundle.js'?
// The answer is simple: because it contains serverside code (and potentially it can also
// contain some sensitive info like API keys and whatnot) and the browser does not need it.
// The browser ONLY needs the code that will be executed specifically in the browser.
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // We make a new entry file and change the path to it here
  entry: './src/client/client.js',
  // We also put the resulting file in a different folder
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

// The 'merge' utility function from the 'webpack-merge' package lets us merge 2 configs into one:
module.exports = merge(baseConfig, config);
