module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/node_modules/**'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
