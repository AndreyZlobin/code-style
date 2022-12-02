const prettierConfig = require('@self-kit/prettier-config');

module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier', 'import'],
  rules: {
    // определяется конфиг для prettier для того, чтобы его не надо было определять в проекте
    'prettier/prettier': ['error', prettierConfig],

    quotes: ['error', 'single'],

    // запрещает больше одной пустой строки
    'no-multiple-empty-lines': 'error',

    // отключает правило, которое заставялет делать дефолтный экспорт, если экспортиться только одна сущность
    'import/prefer-default-export': 'off',

    // добавляет разделительные пустые строки для блоков импортов
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['internal'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object',
          'index',
        ],
      },
    ],

    // сортирует импорты
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // добавляет запятую в конец списка, если представлен в виде нескольких строк
    'comma-dangle': ['error', 'always-multiline'],

    // добавляет отступы между конструкциями
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: 'switch', next: '*' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: 'try', next: '*' },
      { blankLine: 'always', prev: 'while', next: '*' },
      { blankLine: 'always', prev: '*', next: 'while' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: 'for', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'never', prev: 'expression', next: 'expression' },
      // добавляет отступы перед и после, если выражение написано в несколько строк (например, promise)
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
    ],

    // делает обязательным скобки для if
    curly: ['error', 'all'],
  },
};
