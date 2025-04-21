import baseConfig from './index.js';
import jsPlugin from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

export default [
  ...baseConfig,
  {
    files: ['**/*.{js,cjs,jsx,ts,cts,tsx}'],
    plugins: {
      js: jsPlugin,
      n: nodePlugin,
    },
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      strict: 'off',
      'n/global-require': 'off',
    },
  },
];
