const path = require('path')
module.exports = {
  entry: {
    main: './Multiple_entry_files/main.js',
    main1: './Multiple_entry_files/main1.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './')
  }
};