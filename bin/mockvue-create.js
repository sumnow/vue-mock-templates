#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const mockvue = require('../src/create');


/**
 * Usage.
 */

program
.command('create')
.description('quick create your vue mock template')
.alias('c')
.action(function(pname){
    mockvue.run(pname);
});
program.parse(process.argv);