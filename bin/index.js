#! /usr/bin/env node

require = require('esm')(module);
const yargs = require('yargs');

const usage = "\nSimpliGit ";
const options = yargs
    .usage(usage)
    .help(true)
    .argv;

// `process.cwd()` gives current working directory where the cli tool is executed
// `__dirname` gives directory where the file logging `__dirname` exists
// console.log(process.cwd());
require('../src/cli').cli(process.argv);
