module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/no-cycle': 0,
    'no-param-reassign': 0,
    'func-names': 'off',
  },
};
