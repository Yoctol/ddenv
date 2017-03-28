const { dump, dumpAllAndExit } = require('./src');

if (!global.d) {
  global.d = dump;
}

if (!global.dd) {
  global.dd = dumpAllAndExit;
}
