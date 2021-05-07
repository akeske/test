const Chalk = require('chalk');

function hello() {
  console.log(Chalk.red(`Hello node.js!\nUsing ${process.version} node version.`));
}

hello();