module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:storybook/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 140
      }
    ],
    /**
     * Turn off console rule
     * https://eslint.org/docs/latest/rules/no-console#rule-details
     */
    'no-console': 'warn',
    /**
     * Disallow debugger keywords
     * https://eslint.org/docs/latest/rules/no-debugger
     */
    'no-debugger': 'error',
    /**
     * Add curly braces to all if statements
     * https://eslint.org/docs/latest/rules/curly#rule-details
     */
    curly: ['error', 'all'],
    /**
     * Enforce single quotes
     * https://eslint.org/docs/latest/rules/quotes
     */
    quotes: ['error', 'single'],
    /**
     * Set brace style for curly braces
     * https://eslint.org/docs/latest/rules/brace-style#rule-details
     */
    'brace-style': 'error',
    /**
     * Set indentation rule to 2 spaces
     * https://eslint.org/docs/latest/rules/indent#rule-details
     */
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    /**
     * Define maximum complexity level
     * https://eslint.org/docs/latest/rules/complexity#rule-details
     */
    complexity: ['error', { max: 25 }],
    /**
     * Turn off arrow body style
     * https://eslint.org/docs/latest/rules/arrow-body-style#rule-details
     */
    'arrow-body-style': 'off',
    /**
     * Arrow callback style rule
     * https://eslint.org/docs/latest/rules/prefer-arrow-callback#rule-details
     */
    'prefer-arrow-callback': 'off',
    /**
     * Turn off unused vars
     * https://eslint.org/docs/latest/rules/no-unused-vars#rule-details
     */
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    /**
     * Enforce no magic numbers
     * https://eslint.org/docs/latest/rules/no-magic-numbers
     */
    'no-magic-numbers': ['warn', { ignoreArrayIndexes: true, ignore: [-1, 0, 1] }],
    /**
     * Enforce no lonely if's
     * https://eslint.org/docs/latest/rules/no-lonely-if
     */
    'no-lonely-if': 'error',
    /**
     * Enforce no return in else
     * https://eslint.org/docs/latest/rules/no-else-return
     */
    'no-else-return': 'error',
    /**
     * Enforce no nested ternary operators
     * https://eslint.org/docs/latest/rules/no-nested-ternary
     */
    'no-nested-ternary': 'error',
    /**
     * Enforce unnecessary ternary operators
     * https://eslint.org/docs/latest/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',
    /**
     * Enforce declarative function style
     * https://eslint.org/docs/latest/rules/func-style
     */
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    /**
     * Enforce automatic import order
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     *
     * `no-unresolved` has to stay due to the compatibility with vue components.
     * For some reason eslint doesn't automatically resolve webpack & TypeScript aliases.
     */
    'import/no-unresolved': 'off',
    /**
     * Define custom import order for internal and external modules
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '@/store/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/generated/**',
            group: 'internal'
          },
          {
            pattern: '@/assets/**',
            group: 'internal'
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'after'
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        /**
         * Turn off any rule
         * https://typescript-eslint.io/rules/no-explicit-any/
         */
        '@typescript-eslint/no-explicit-any': 'off',
        /**
         * Enforce types instead of interfaces
         * https://typescript-eslint.io/rules/consistent-type-definitions/
         */
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
      }
    },
    {
      files: ['*.spec.ts', '*.cy.tsx'],
      rules: {
        'no-magic-numbers': 'off'
      }
    }
  ]
}
