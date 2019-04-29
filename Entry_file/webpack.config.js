const path = require('path')
module.exports = {
  entry: './Entry_file/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  }
};