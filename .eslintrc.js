module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-a11y/no-onchange': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/no-dynamic-require': 'off',
    'no-await-in-loop': 'off',
    'no-unused-expressions': 'off',
    'no-multi-spaces': 'off',
    'key-spacing': 'off',
    'global-require': 'off',
    '@typescript-eslint/member-delimiter-style': [1, {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    'no-warning-comments': ['warn', {
      terms: [''],
      location: 'start',
    }],
  },
  settings: {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
