import { composer } from 'eslint-flat-config-utils';
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

const applyScriptLanguageOptions = (config, cjs = false) => ({
  files: scriptFiles,
  ...config,
  languageOptions: {
    ...buildScriptLanguageOptions(cjs),
    ...config.languageOptions,
  },
});

const buildConfig = (cjs = false, test = false) => [
  { name: 'ignores', ignores: test ? [] : ['lib/**/*', 'node_modules/**/*', 'test/**/*'] },
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
];

const buildTestConfig = (cjs = false) => composer(buildConfig(cjs, true)).
  removeRules(
    ...cjs ? ['strict'] : [],
    'no-magic-numbers',
    'no-restricted-syntax',
  );

const cjs = composer(buildConfig(true)).
  removeRules(
    'strict',
    'n/global-require',
    'n/no-sync',
    'import/no-commonjs',
    'import/no-dynamic-require',
    'import/no-nodejs-modules',
    'unicorn/prefer-module',
  );

const test = buildTestConfig();

const cjsTest = buildTestConfig(true);

export {
  cjs,
  test,
  cjsTest,
};

export default buildConfig();
