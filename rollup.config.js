// import {uglify} from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './src/components/icons.js',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
    ],
    output: {
        format: 'es',
        file: 'dist/icons/index.js',
        globals: {
            react: "React"
        }
    }
}
