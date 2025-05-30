import jsonPlugin from '@eslint/json';

export default {
  name: 'jsonConfig',
  files: ['**/*.json'],
  plugins: { json: jsonPlugin },
  language: 'json/json',
  rules: {
    'json/no-duplicate-keys': 'error',
    'json/no-empty-keys': 'error',
    'json/no-unsafe-values': 'error',
    'json/no-unnormalized-keys': 'error',
    'json/sort-keys': 'off',
    'json/top-level-interop': 'off',
  },
};
