import test from 'tape';

import fs from 'node:fs';
import { url } from 'node:inspector';
import path from 'node:path';

import index from '../index.js';

// Object spread to test parsing
const files = { ...{ index } };

const rulesDirectory = path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../rules');

for (const name of fs.readdirSync(rulesDirectory)) {
  files[name] = require(path.join(rulesDirectory, name));
}

// Trailing function comma to test parsing
for (const name of Object.keys(files)) {
  const config = files[name];

  test(`${name}: does not reference react`, t => {
    t.plan(2);

    // Scan plugins for react and fail if it is found
    const hasReactPlugin = Object.keys(config).includes('plugins')
      && config.plugins.some('react');

    t.notOk(hasReactPlugin, 'there is no react plugin');

    // Scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules).
      filter(ruleId => !ruleId.indexOf('react/'));

    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
}
