import config from './index.js';
import n from 'eslint-plugin-n';

export default [
  ...config,
  {
    files: ['**/*.{js,ts}'],
    plugins: { n },
    rules: {
      'n/file-extension-in-import': [
        'error',
        'always',
      ],
    },
  },
];
