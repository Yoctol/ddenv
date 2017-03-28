const dump = require('./dump');

module.exports = function dd(...args) {
  args.forEach(x => dump(x));
  process.exit(1);
};
