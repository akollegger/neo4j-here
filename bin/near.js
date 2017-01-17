#! /usr/bin/env node

require('../dist/neo4j-here.js');

var vorpal = require('vorpal')();

vorpal
    .delimiter('(near) ')
    .show();
