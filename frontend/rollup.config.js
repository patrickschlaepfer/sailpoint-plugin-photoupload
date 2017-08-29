// Rollup plugins
import 'rollup';
import typescript from 'rollup-plugin-typescript';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-js';
import postcss from 'rollup-plugin-postcss';
import string from 'rollup-plugin-string';

const config =  {
    entry: 'src/app/main.ts',
    exports: 'auto',
    targets: [{
        dest: 'build/PhotoUploadApp.js',
        format: 'umd',
        moduleName: 'PhotoUploadApp',
        sourceMap: true
    }],
    plugins: [
        postcss({
            extensions: [ '.css' ],
        }),
        string({
            // Required to be specified
            include: '**/*.html',

            // Undefined by default
            exclude: ['**/index.html']
        }),
        typescript({
            typescript: require('typescript')
        }),
        buble(),
        nodeResolve({
            jsnext: true,
            main: true,
        }),
        commonjs()
    ],
};

// Minified JS Build
if (process.env.BUILD === 'minify') {
    config.targets = [{
        dest: 'build/PhotoUploadApp.min.js',
        format: 'umd',
        moduleName: 'PhotoUploadApp',
        sourceMap: false}];
    config.plugins.push(
        uglify({}, minify)
    );
}

console.info(`\u001b[36m\[Rollup ${process.env.BUILD} build\]\u001b[97m \nConverting Typescript from ${config.entry} to javascript, exporting to: ${config.targets[0].dest}`);

export default config
