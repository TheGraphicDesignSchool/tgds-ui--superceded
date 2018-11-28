const
    path = require('path'),
    glob = require('glob')

const log = console.log

const
    { rollupLib } = require('./_functions')

const
    source_dir = path.join(__dirname,'../src/lib')


rollupLib(source_dir);


