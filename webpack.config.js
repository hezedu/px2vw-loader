const path = require('path');
const loader = function(source) {
  return source;
};
console.log(loader)





module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'result.js'
  },
   module: {
      rules: [
        {
          test: /\.css$/,
          use: ['test-loader', 'css-loader']
        }
      ]
   }
}
