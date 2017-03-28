const prettyFormat = require('pretty-format');

module.exports = function dump(x) {
  console.log(prettyFormat(x));
};
