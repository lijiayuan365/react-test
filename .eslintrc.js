module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [],
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {},
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'camelcase': 'off',
    'comma-dangle': 'off',
    'handle-callback-err': 'off',
    'no-unused-vars': 'off',
    'quote-props': 'off',
    'no-extra-semi': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/display-name': 'off',
    'prefer-const': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
  }
}
