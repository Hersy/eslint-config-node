import markdownPlugin from '@eslint/markdown';

export default {
  name: 'markdownConfig',
  files: ['**/*.md'],
  plugins: { markdown: markdownPlugin },
  language: 'markdown/commonmark',
  rules: {
    'markdown/fenced-code-language': 'error',
    'markdown/heading-increment': 'error',
    'markdown/no-duplicate-headings': 'warn',
    'markdown/no-empty-links': 'error',
    'markdown/no-html': 'warn',
    'markdown/no-invalid-label-refs': 'error',
    'markdown/no-missing-label-refs': 'error',
  },
};
