const px2vw = require('px2vw');
const loaderUtils = require('loader-utils');
module.exports = function(content) {
  const options = loaderUtils.getOptions(this);
  return px2vw(options.width, content);
};
