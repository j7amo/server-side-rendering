const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Tell Webpack that we are building a bundle for Node.js and not for the browser
  target: 'node',
  // Tell Webpack the root file of our server-side-rendering app
  entry: './src/index.js',
  // Tell Webpack where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // This configuration that use 'webpack-node-externals' package lets Webpack SKIP adding
  // dependencies which are present in 'node_modules' folder to the resulting bundle to make it
  // much lighter which in turn should make server-side-rendering boot up faster.
  // We can do this because Node.js can resolve modules directly from 'node_modules' folder at the runtime,
  // so it looks like we don't even need those packages included in the bundle at all in the first place!
  externals: [webpackNodeExternals()],
};

// The 'merge' utility function from the 'webpack-merge' package lets us merge 2 configs into one:
module.exports = merge(baseConfig, config);
