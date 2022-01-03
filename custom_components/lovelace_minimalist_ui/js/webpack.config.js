const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'lovelace-minimalist-ui.js',
    path: path.resolve(__dirname)
  }
};