// In this Webpack config file we are creating a separate configuration
// for JS that will be shipped to the browser.
// But why can't we just use 'build/bundle.js'?
// The answer is simple: because it contains serverside code (and potentially it can also
// contain some sensitive info like API keys and whatnot) and the browser does not need it.
// The browser ONLY needs the code that will be executed specifically in the browser.
const path = require('path');

module.exports = {
  // We make a new entry file and change the path to it here
  entry: './src/client/client.js',
  // We also put the resulting file in a different folder
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  // Tell Webpack to run Babel on every JSX file it runs through to transpile it to ES5 Javascript
  // and to skip 'node_modules' directory
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react', // This turns jsx into normal js function calls
            'stage-0', // This is for handling async code
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};
