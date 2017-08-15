const px2vw = require('px2vw');
const loaderUtils = require('loader-utils');
module.exports = function(content) {
  const options = loaderUtils.getOptions(this);
  console.log('arguments', arguments, options);
  if(typeof this.options === 'object'){
    const width = this.options.width;
    console.log('width', this.options.width);
  }
  return content;
};
