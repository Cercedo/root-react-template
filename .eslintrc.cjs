module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // Vite rules
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",

    // Third-party rules
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
}
