/* eslint-disable no-undef */
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    tsConfigRootDir: __dirname,
    project: [ './tsconfig.json' ],
    createDefaultProgram: true,
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: [ '*.svelte' ],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    indent: [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'never' ],
    'quote-props': [ 'error', 'as-needed' ],
    'comma-dangle': [ 'error', 'only-multiline' ],
    'no-extra-parens': [ 'error', 'all' ],
    'no-template-curly-in-string': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
  },
  settings: {
    'svelte3/typescript': require('typescript'),
    'svelte3/ignore-styles': () => true
  }
}


module.exports = config