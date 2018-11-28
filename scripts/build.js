const
    chalk = require('chalk'),
    path = require('path'),
    glob = require('glob'),
    rollup = require('rollup'),
    babel = require('rollup-plugin-babel'),
    resolve = require('rollup-plugin-node-resolve')
    // commonjs = require('rollup-plugin-commonjs')
    // {terser} = require('rollup-plugin-terser'); // more modern than uglify -- support es6

const log = console.log

const
    source_dir = path.join(__dirname,'../src/lib'),
    dist_dir = path.join(__dirname,'../dist')


glob( path.join(source_dir,'*.js'), {}, (er,files) => {
    let promises = []

    files.forEach( file => promises.push(rollupFile(file)))

    Promise.all(promises).then( () => {
        log('->', promises.length, 'files rolled-up');
        resolve()
    })
})



// -- rollup one file

const rollupFile = file => {
    const
        base = path.basename(file,'.js'),
        dest = path.join(__dirname,'../dist',base,'index.js')

    log(chalk.grey('* rolling'),base)

    const configPlugins = [
        babel({
            exclude: "node_modules/**"
        }),
	    resolve()
    ]

    return rollup.rollup({
        input: file,
        external: [
            'react',
            'styled-components',
            'react-splitter-layout2',
        ],
        plugins: configPlugins
    }).then( bundle => {
        return bundle.write({
            file: dest,
            format: 'es',
            globals: {
                'react': 'React',
                'styled-components': 'styled'
            }
        })
    }).catch( e => {
        log( chalk.red(e.message));
    })
}
