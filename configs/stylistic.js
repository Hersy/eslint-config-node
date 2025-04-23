import stylisticPlugin from '@stylistic/eslint-plugin';

const options = {
  lineWidtdh: 80,
  tabWidth: 2,
};

export default {
  plugins: { '@stylistic': stylisticPlugin },
  rules: {
    '@stylistic/array-bracket-newline': ['warn', 'consistent'],
    '@stylistic/array-bracket-spacing': ['warn', 'never'],
    '@stylistic/array-element-newline': [
      'warn',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: { multiline: true, minItems: 6 },
      },
    ],
    '@stylistic/arrow-parens': ['warn', 'as-needed'],
    '@stylistic/arrow-spacing': ['warn', { before: true, after: true }],
    '@stylistic/block-spacing': ['warn', 'always'],
    '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    '@stylistic/comma-dangle': ['warn', 'always-multiline'],
    '@stylistic/comma-spacing': ['warn', { before: false, after: true }],
    '@stylistic/comma-style': [
      'warn',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    '@stylistic/computed-property-spacing': ['warn', 'never'],
    '@stylistic/curly-newline': [
      'warn',
      {
        multiline: true,
        minElements: 3,
        consistent: true,
      },
    ],
    '@stylistic/dot-location': ['warn', 'object'],
    '@stylistic/eol-last': ['warn', 'always'],
    '@stylistic/func-call-spacing': ['warn', 'never'],
    '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
    '@stylistic/function-call-spacing': ['warn', 'never'],
    '@stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
    '@stylistic/generator-star-spacing': ['warn', { before: false, after: true }],
    '@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
    '@stylistic/indent': ['warn', options.tabWidth],
    '@stylistic/indent-binary-ops': ['warn', options.tabWidth],
    '@stylistic/jsx-child-element-spacing': 'warn',
    '@stylistic/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    '@stylistic/jsx-closing-tag-location': ['warn', 'tag-aligned'],
    '@stylistic/jsx-curly-brace-presence': ['warn', 'never'],
    '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
    '@stylistic/jsx-curly-spacing': [
      'warn',
      { when: 'never', allowMultiline: false },
    ],
    '@stylistic/jsx-equals-spacing': ['warn', 'never'],
    '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    '@stylistic/jsx-function-call-newline': ['warn', 'multiline'],
    '@stylistic/jsx-indent-props': ['warn', options.tabWidth],
    '@stylistic/jsx-max-props-per-line': [
      'warn',
      { maximum: 1, when: 'multiline' },
    ],
    '@stylistic/jsx-newline': ['warn', { prevent: true, allowMultilines: true }],
    '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    '@stylistic/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: false,
        allowLeadingUnderscore: false,
        allowNamespace: false,
      },
    ],
    '@stylistic/jsx-props-no-multi-spaces': 'warn',
    '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
    '@stylistic/jsx-self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    '@stylistic/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: true,
        shorthandFirst: true,
        shorthandLast: false,
        multiline: 'ignore',
        noSortAlphabetically: false,
        reservedFirst: true,
        locale: 'en_001',
      },
    ],
    '@stylistic/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    '@stylistic/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
        propertyValue: 'ignore',
      },
    ],
    '@stylistic/key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    '@stylistic/keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    '@stylistic/line-comment-position': [
      'warn',
      {
        position: 'above',
        ignorePattern: 'TODO',
        applyDefaultPatterns: true,
      },
    ],
    '@stylistic/linebreak-style': ['warn', 'unix'],
    '@stylistic/lines-around-comment': [
      'warn',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        applyDefaultIgnorePatterns: true,
      },
    ],
    '@stylistic/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: false },
    ],
    '@stylistic/max-len': [
      'warn',
      options.lineWidtdh,
      options.tabWidth,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    '@stylistic/max-statements-per-line': ['warn', { max: 1 }],
    '@stylistic/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'last-member',
      },
    ],
    '@stylistic/multiline-comment-style': ['warn', 'starred-block'],
    '@stylistic/multiline-ternary': ['warn', 'always-multiline'],
    '@stylistic/new-parens': 'warn',
    '@stylistic/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],
    '@stylistic/no-confusing-arrow': ['warn', { allowParens: true }],
    '@stylistic/no-extra-parens': [
      'warn',
      'all',
      {
        conditionalAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      },
    ],
    '@stylistic/no-extra-semi': 'warn',
    '@stylistic/no-floating-decimal': 'warn',
    '@stylistic/no-mixed-operators': [
      'warn',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],
    '@stylistic/no-mixed-spaces-and-tabs': 'warn',
    '@stylistic/no-multi-spaces': [
      'warn',
      {
        ignoreEOLComments: false,
      },
    ],
    '@stylistic/no-multiple-empty-lines': [
      'warn',
      { max: 1, maxBOF: 0, maxEOF: 0 },
    ],
    '@stylistic/no-tabs': 'warn',
    '@stylistic/no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    '@stylistic/no-whitespace-before-property': 'warn',
    '@stylistic/nonblock-statement-body-position': ['warn', 'beside'],
    '@stylistic/object-curly-newline': [
      'warn',
      {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
    ],
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/object-property-newline': [
      'warn',
      { allowAllPropertiesOnSameLine: true },
    ],
    '@stylistic/one-var-declaration-per-line': ['warn', 'always'],
    '@stylistic/operator-linebreak': [
      'warn',
      'before',
      { overrides: { '=': 'none' } },
    ],
    '@stylistic/padded-blocks': [
      'warn',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      { allowSingleLineBlocks: true },
    ],
    '@stylistic/padding-line-between-statements': 'off',
    '@stylistic/quote-props': [
      'warn',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],
    '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
    '@stylistic/rest-spread-spacing': ['warn', 'never'],
    '@stylistic/semi': ['warn', 'always'],
    '@stylistic/semi-spacing': ['warn', { before: false, after: true }],
    '@stylistic/semi-style': ['warn', 'last'],
    '@stylistic/space-before-blocks': 'warn',
    '@stylistic/space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/space-in-parens': ['warn', 'never'],
    '@stylistic/space-infix-ops': 'warn',
    '@stylistic/space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
      },
    ],
    '@stylistic/spaced-comment': [
      'warn',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],
    '@stylistic/switch-colon-spacing': ['warn', { after: true, before: false }],
    '@stylistic/template-curly-spacing': 'warn',
    '@stylistic/template-tag-spacing': ['warn', 'never'],
    '@stylistic/type-annotation-spacing': [
      'warn',
      { before: false, after: true },
    ],
    '@stylistic/type-generic-spacing': 'warn',
    '@stylistic/type-named-tuple-spacing': 'warn',
    '@stylistic/wrap-iife': [
      'warn',
      'outside',
      { functionPrototypeMethods: false },
    ],
    '@stylistic/wrap-regex': 'warn',
    '@stylistic/yield-star-spacing': ['warn', 'after'],
  },
};
