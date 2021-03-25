const px2vw = require('px2vw');
const querystring = require('querystring');

module.exports = function(content) {
  if(!this.resourceQuery){
    return content;
  }
  const options = querystring.parse(this.resourceQuery.substr(1));
  if(options.px2vw){
    let fixedNum = options.fixedNum ? Number(options.fixedNum) : undefined;
    return px2vw(Number(options.width), content, Number(options.minWidth), fixedNum);
  }else{
    return content;
  }
};
