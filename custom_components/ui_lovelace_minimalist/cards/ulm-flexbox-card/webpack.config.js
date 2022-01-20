const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        filename: 'ulm-flexbox-card.js',
        path: path.resolve(__dirname)
    }
};
