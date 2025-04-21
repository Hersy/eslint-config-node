/* eslint strict: 0, n/global-require: 0 */

'use strict';

import test from 'tape';
import index from '../index.js';

test('all entry points parse', (t) => {
  t.doesNotThrow(() => index, 'index does not throw');

  t.end();
});
