const
	chalk = require('chalk'),
	path = require('path'),
	chokidar = require('chokidar')

const
	source_dir = path.join(__dirname,'../src/lib')
const
	{ rollupLib } = require('./_functions')


const log = console.log

chokidar.watch( source_dir, {}).on('change', path => {
	log('->', chalk.green(path))
	rollupLib(source_dir);
});
