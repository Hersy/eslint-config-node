/* eslint-disable n/no-sync, n/global-require, no-magic-numbers */
import fs from 'node:fs';
import path from 'node:path';
import test from 'tape';

import index from '../index.js';

// Object spread to test parsing
const files = { ...{ index } };

const rulesDir = path.join(__dirname, '../rules');

fs.readdirSync(rulesDir).forEach((name) => {
  files[name] = require(path.join(rulesDir, name));
});

// Trailing function comma to test parsing
Object.keys(files).forEach((
  name,
) => {
  const config = files[name];

  test(`${name}: does not reference react`, (t) => {
    t.plan(2);

    // Scan plugins for react and fail if it is found
    const hasReactPlugin = Object.keys(config).some(key => key === 'plugins')
      && config.plugins.some('react');
    t.notOk(hasReactPlugin, 'there is no react plugin');

    // Scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules).
      filter(ruleId => !ruleId.indexOf('react/'));
    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
});
