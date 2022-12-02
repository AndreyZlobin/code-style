module.exports = {
  extends: ['airbnb-base', '@self-kit/eslint-config-base'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    // отключается ошибка при модификации параметров. Данный механизм часто используется в express
    'no-param-reassign': [2, { props: false }],
  },
  env: {
    node: true,
    jest: true,
  },
};
