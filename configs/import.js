import importPlugin from 'eslint-plugin-import';
import importNamePlugin from 'eslint-plugin-import-name';
import unusedImportPlugin from 'eslint-plugin-unused-imports';

export default {
  name: 'importConfig',
  plugins: {
    import: importPlugin,
    'import-name': importNamePlugin,
    'unused-imports': unusedImportPlugin,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['**/tsconfig.json'],
      },
    },
    'import/ignore': [
      'node_modules',
      String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`,
    ],
  },
  rules: {
    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/default': 'warn',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'warn',
    'import/extensions': ['error', 'ignorePackages'],
    'import/first': 'error',
    'import/group-exports': 'warn',
    'import/max-dependencies': ['warn', { max: 20 }],
    'import/named': 'error',
    'import/namespace': 'warn',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': ['warn', {
      allowArray: true,
      allowObject: true,
    }],
    'import/no-commonjs': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-empty-named-blocks': 'warn',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**',
        'tests`/**',
        'spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/vue.config.js',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
        '**/Gruntfile{,.js}',
        '**/protractor.conf.js',
        '**/protractor.conf.*.js',
        '**/karma.conf.js',
        '**/eslint.config.js',
      ],
      optionalDependencies: false,
    }],
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-namespace': 'warn',
    'import/no-nodejs-modules': 'warn',
    'import/no-relative-packages': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-unused-modules': 'warn',
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'warn',
      {
        groups: ['external', 'internal', 'unknown'],
        pathGroups: [
          {
            pattern: 'node:**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@assets/**',
            group: 'unknown',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'warn',
    'import-name/all-imports-name': [
      'warn',
      { classnames: 'classNames', 'prop-types': 'PropTypes' },
    ],
    'import-name/common-import-name': 'off',
    'import-name/default-import-name': 'off',
    'unused-imports/no-unused-imports': 'warn',

    // Deprecated, replaced by 'import/first'
    'import/imports-first': 'off',

    // Redundant with 'no-unused-vars'
    'unused-imports/no-unused-vars': [
      'off',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
