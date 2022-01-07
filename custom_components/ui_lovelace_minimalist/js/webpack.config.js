const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'ui-lovelace-minimalist.js',
    path: path.resolve(__dirname)
  }
};
