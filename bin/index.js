#! /usr/bin/env node

require = require('esm')(module);
var args = process.argv.slice(2);
require('../src/cli').cli(args);
