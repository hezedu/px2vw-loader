const path = require('path');
const loader = require('./index')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'result.css'
  },
   module: {
      rules: [
        {
          test: /\.css$/,
          loader
        }
      ]
   }
}
