import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs' // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import resolve from '@rollup/plugin-node-resolve'
import del from 'rollup-plugin-delete'
import css from 'rollup-plugin-css-porter'
import sass from 'rollup-plugin-sass'
import babel from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'

export default {
  input: 'src/lib.ts', // our source file
  output: [
    {
      // Keep the bundle as an ES module file, suitable for other bundlers
      // and inclusion as a <script type=module> tag in modern browsers
      name: 'library',
      file: 'lib/lib.esm.js',
      format: 'esm', // the preferred format
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    'tslib',
    'vue',
  ],
  plugins: [
    commonjs(),
    // [Rollup Plugin Vue](https://rollup-plugin-vue.vuejs.org/)
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
      module: 'esnext',
      tsconfig: 'tsconfig.json',
      tsconfigOverride: { exclude: ['node_modules', 'src/main.ts', 'tests'] }
    }),
    babel({
      extensions: [
        ...DEFAULT_EXTENSIONS,
        'ts',
        'tsx'
      ],
      presets: [
        '@vue/cli-plugin-babel/preset'
      ],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    sass(),
    css(),
    resolve(),
    // terser() // minifies generated bundles

    del({
      targets: 'lib/main.d.ts',
      hook: 'generateBundle'
    })
  ]
}
