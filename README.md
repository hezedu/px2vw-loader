# px2vw-loader
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
          {
            loader: 'px2vw-loader',
            options: {
              width: 640
          }
    }]
}
```
