import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';

export default {
  plugins: { 'eslint-comments': eslintCommentsPlugin },
  rules: {
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': 'warn',
  },
};
