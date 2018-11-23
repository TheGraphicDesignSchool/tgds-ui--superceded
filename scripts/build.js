const
    chalk = require('chalk'),
    path = require('path'),
    glob = require('glob'),
    rollup = require('rollup'),
    babel = require('rollup-plugin-babel'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    {terser} = require('rollup-plugin-terser'); // more modern -- support es6

const log = console.log

const
    source_dir = path.join(__dirname,'../src'),
    dist_dir = path.join(__dirname,'../dist')

glob( path.join(source_dir,'*.js'), {}, (er,files) => {
    files.forEach( file => rollupFile(file))
})

const rollupFile = async file => {
    const
        base = path.basename(file,'.js'),
        dest = path.join(__dirname,'../dist',base,'index.js')

    log(base,dest)

    const configPlugins = [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
    ]

    const bundle = await rollup.rollup({
        input: file,
        external: ['react'],
        plugins: configPlugins
    })

    return bundle.write({
        file: dest,
        format: 'es',
        globals: {
            react: 'React'
        }
    })
}
