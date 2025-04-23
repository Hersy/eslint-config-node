import jsPlugin from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

import config from './index.js';

export default [
  ...config,
  {
    files: ['**/*.{js,cjs,jsx,ts,cts,tsx}'],
    plugins: {
      import: importPlugin,
      js: jsPlugin,
      n: nodePlugin,
    },
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      strict: 'off',
      'n/global-require': 'off',
      'n/no-sync': 'off',
      'import/no-commonjs': 'off',
      'import/no-dynamic-require': 'off',
    },
  },
];
