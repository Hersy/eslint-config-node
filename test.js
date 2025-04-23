import globals from 'globals';

import {
  ecmaConfig,
  importConfig,
  nodeConfig,
  promiseConfig,
  regexpConfig,
  stylisticConfig,
  typescriptConfig,
} from './configs/index.js';

const files = ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'];

const languageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.browser,
    ...globals.node,
  },
};

const applyConfig = config => ({
  files,
  ...config,
  languageOptions: {
    ...languageOptions,
    ...config.languageOptions,
  },
});

const disableRules = (config, rules) => ({
  ...config,
  rules: {
    ...config.rules,
    ...Object.assign({}, ...rules.map(key => ({ [key]: 'off' }))),
  },
});

export default [
  disableRules(
    applyConfig(ecmaConfig),
    [
      'strict',
      'no-magic-numbers',
      'no-restricted-syntax',
    ],
  ),
  applyConfig(typescriptConfig),
  disableRules(
    applyConfig(nodeConfig),
    [
      'n/global-require',
      'n/no-sync',
    ],
  ),
  disableRules(
    applyConfig(importConfig),
    [
      'import/no-dynamic-require',
      'import/no-extraneous-dependencies',
      'import/no-nodejs-modules',
    ],
  ),
  applyConfig(promiseConfig),
  applyConfig(regexpConfig),
  applyConfig(stylisticConfig),
];
