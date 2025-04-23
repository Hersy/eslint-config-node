import cssPlugin from '@eslint/css';

export default {
  files: ['**/*.css'],
  plugins: { css: cssPlugin },
  language: 'css/css',
  rules: {
    'css/no-empty-blocks': 'error',
    'css/no-duplicate-imports': 'error',
    'css/no-invalid-at-rules': 'error',
    'css/no-invalid-properties': 'error',
    'css/prefer-logical-properties': 'error',
    'css/use-baseline': 'error',
    'css/use-layers': 'error',
  },
};
