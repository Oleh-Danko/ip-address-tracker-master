'use strict';

let path = require('path');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    // path: __dirname + './dist/js'
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
