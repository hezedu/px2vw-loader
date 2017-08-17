const px2vw = require('px2vw');
const querystring = require('querystring');

module.exports = function(content) {
  if(!this.resourceQuery){
    return content;
  }
  const options = querystring.parse(this.resourceQuery.substr(1));
  if(options.px2vw){
    return px2vw(Number(options.width), content);
  }else{
    return content;
  }
};
