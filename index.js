import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';
import jsPlugin from '@eslint/js';
import cssPlugin from '@eslint/css';
import jsonPlugin from '@eslint/json';
import markdownPlugin from '@eslint/markdown';
import stylisticPlugin from '@stylistic/eslint-plugin';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import standardRules from './rules/standards.js';
import errorRules from './rules/errors.js';
import styleRules from './rules/styles.js';
import stylisticRules from './rules/stylistic.js';
import jsdocRules from './rules/jsdoc.js';
import nodeRules from './rules/node.js';
import jsonRules from './rules/json.js';
import cssRules from './rules/css.js';
import babelRules from './rules/babel.js';
import typescriptRules from './rules/typescript.js';

const files = ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'];

const languageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.browser,
    ...globals.node,
  },
};

export default [
  { ignores: ['lib/**/*', 'node_modules/**/*'] },
  {
    files,
    plugins: { js: jsPlugin },
    languageOptions,
    rules: {
      ...standardRules,
      ...errorRules,
      ...styleRules,
    },
  },
  {
    files,
    plugins: { '@babel': babelPlugin },
    languageOptions: {
      ...languageOptions,
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          configFile: './.babelrc',
        },
      },
    },
    rules: babelRules,
  },
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: {
      ...languageOptions,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: typescriptRules,
  },
  {
    files,
    plugins: { jsdoc: jsdocPlugin },
    rules: jsdocRules,
  },
  {
    files,
    plugins: { n: nodePlugin },
    rules: nodeRules,
  },
  {
    files,
    plugins: { '@stylistic': stylisticPlugin },
    rules: stylisticRules,
  },
  {
    files: ['**/*.json'],
    plugins: { json: jsonPlugin },
    language: 'json/json',
    rules: jsonRules,
  },
  {
    files: ['**/*.css'],
    plugins: { css: cssPlugin },
    language: 'css/css',
    rules: cssRules,
  },
  ...markdownPlugin.configs.recommended,
];
