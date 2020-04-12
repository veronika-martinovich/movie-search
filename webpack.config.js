const webpack = require('webpack');
const path = require('path');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    watch: !isProduction,
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'main.js'
    }
  }

  return config;
}
