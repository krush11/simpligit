#! /usr/bin/env node

require = require('esm')(module);
const process = require('process');
var args = process.argv.slice(2);
require('../src/cli').cli(args);
