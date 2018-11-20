# px2vw-loader 0.2.2
webpack loader wrap for [px2vw](https://github.com/hezedu/px2vw).
## install
`npm install px2vw-loader`
## use
### webpack 3 rule:
```js
{
  test: /\.css$/,
  use: [  
          'style-loader',
          'css-loader',
          'px2vw-loader'
    }]
}
```
### source file
```js
require('some.css?px2vw=true&width=640&minWidth=320')
```
