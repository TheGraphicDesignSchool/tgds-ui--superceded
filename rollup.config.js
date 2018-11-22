import {uglify} from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './src/index.js',
    moduleName: 'TgdsUi',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
    ],
    output: {
        format: 'umd',
        file: './index.js',
        globals: {
            react: "React"
        }
    }
}
