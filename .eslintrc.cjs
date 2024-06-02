module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // Vite rules
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',

    // Third-party rules
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'check-file'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'check-file/filename-naming-convention': [
      'error',
      {
        'src/**/!(main|index).{tsx,jsx}': 'PASCAL_CASE',
        'src/**/!(vite-env.d).{ts,js}': 'CAMEL_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/*': 'KEBAB_CASE',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-cycle': 'error',
    'no-console': 'error',
    eqeqeq: 'error',
    'no-eval': 'error',
    curly: 'error',
    'prefer-const': 'error',
    'no-var': 'error',
  },
};
