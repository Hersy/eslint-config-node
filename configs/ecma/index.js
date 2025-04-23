import jsPlugin from '@eslint/js';

import errorRules from './rules/errors.js';
import standardRules from './rules/standards.js';
import styleRules from './rules/styles.js';

export default {
  plugins: { js: jsPlugin },
  rules: {
    ...standardRules,
    ...errorRules,
    ...styleRules,
  },
};
