import globals from 'globals';

import {
  cssConfig,
  ecmaConfig,
  eslintCommentsConfig,
  htmlConfig,
  importConfig,
  jsdocConfig,
  jsonConfig,
  markdownConfig,
  nodeConfig,
  promiseConfig,
  regexpConfig,
  sdlConfig,
  securityConfig,
  sonarjsConfig,
  stylisticConfig,
  typescriptConfig,
  unicornConfig,
} from './configs/index.js';

const scriptFiles = ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'];

const buildScriptLanguageOptions = cjs => ({
  ecmaVersion: 'latest',
  sourceType: cjs ? 'script' : 'module',
  globals: {
    ...globals.browser,
    ...globals.node,
  },
});

const applyScriptLanguageOptions = (config, cjs) => ({
  files: scriptFiles,
  ...config,
  languageOptions: {
    ...buildScriptLanguageOptions(cjs),
    ...config.languageOptions,
  },
});

const isEmpty = array => {
  const zero = 0;
  return array.length === zero;
};

const buildConfig = (cjs = false, test = false, removeRules = []) => [
  { ignores: test ? [] : ['lib/**/*', 'node_modules/**/*', 'test/**/*'] },
  applyScriptLanguageOptions(ecmaConfig, cjs),
  applyScriptLanguageOptions(typescriptConfig, cjs),
  ...test
    ? []
    : [
      applyScriptLanguageOptions(nodeConfig, cjs),
      applyScriptLanguageOptions(importConfig, cjs),
      applyScriptLanguageOptions(promiseConfig, cjs),
      applyScriptLanguageOptions(unicornConfig, cjs),
      applyScriptLanguageOptions(sonarjsConfig, cjs),
      applyScriptLanguageOptions(securityConfig, cjs),
      applyScriptLanguageOptions(sdlConfig, cjs),
    ],
  applyScriptLanguageOptions(regexpConfig, cjs),
  applyScriptLanguageOptions(jsdocConfig, cjs),
  applyScriptLanguageOptions(eslintCommentsConfig, cjs),
  applyScriptLanguageOptions(stylisticConfig, cjs),
  jsonConfig,
  markdownConfig,
  htmlConfig,
  cssConfig,
].map(config => {
  if (
    isEmpty(removeRules)
    || typeof config !== 'object'
    || !config.rules
    || typeof config.rules !== 'object'
  )
    return config;

  const configRules = Object.keys(config.rules);
  const remove = configRules.filter(rule => removeRules.includes(rule));
  if (isEmpty(remove))
    return config;

  const disabledRules = Object.fromEntries(remove.map(rule => [rule, 'off']));

  return {
    ...config,
    rules: {
      ...config.rules,
      ...disabledRules,
    },
  };
});

const cjsTest = buildConfig(true, true, [
  'no-magic-numbers',
  'no-restricted-syntax',
  'strict',
]);

const test = buildConfig(false, true, [
  'no-magic-numbers',
  'no-restricted-syntax',
]);

const cjs = buildConfig(true, false, [
  'strict',
  'n/global-require',
  'n/no-sync',
  'import/no-commonjs',
  'import/no-dynamic-require',
  'import/no-nodejs-modules',
  'unicorn/prefer-module',
]);

export { cjs, cjsTest, test };

export default buildConfig();
