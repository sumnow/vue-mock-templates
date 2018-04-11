#!/usr/bin/env node

process.title = 'mockvue';

require('commander')
.version(require('../package').version)
.usage('<command> [options]')
.command('create', 'quick create your vue mock template (short-cut alias: "c")')
.parse(process.argv)


require('./mockvue-create');