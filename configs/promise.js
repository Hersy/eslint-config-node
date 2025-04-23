import promisePlugin from 'eslint-plugin-promise';

export default {
  name: 'promiseConfig',
  plugins: { promise: promisePlugin },
  rules: {
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    'promise/no-multiple-resolved': 'error',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'promise/prefer-catch': 'warn',
    'promise/spec-only': 'warn',
  },
};
