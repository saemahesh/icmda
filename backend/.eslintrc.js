module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-unused-vars": 2,
    "arrow-body-style": 2,
    "no-param-reassign": 2,
    "no-console": 2,
    import: 2,
    "no-var": 2,
    "quote-props": 2,
    "array-callback-return": 2,
    "prefer-destructuring": 2
  }
};
