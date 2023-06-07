const path = require('path');

// This file is used for extracting repeating part of the 2 Webpack configs
module.exports = {
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
