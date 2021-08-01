const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: 'state-switch.js',
    path: path.resolve(__dirname)
  }
};
