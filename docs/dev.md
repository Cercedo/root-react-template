# 🐛 Development

## Dependencies

- **Tailwind CSS**: A utility-first CSS framework.
  - [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

- **Eslint**: A tool for identifying and reporting on patterns in ECMAScript/JavaScript code.
  - [ESLint](https://www.npmjs.com/package/eslint)
  - Dependencies:
    - `@typescript-eslint/eslint-plugin`: Provides lint rules for TypeScript codebases.
      - [Details](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
    - `@typescript-eslint/parser`: Allows ESLint to lint TypeScript source code.
      - [Details](https://www.npmjs.com/package/@typescript-eslint/parser)
    - `eslint-plugin-import`: Supports linting of ES2015+ import/export syntax, and prevents issues with misspelling of file paths and import names.
      - [Details](https://www.npmjs.com/package/eslint-plugin-import)
    - `eslint-plugin-jsx-a11y`: Checks accessibility rules on JSX elements.
      - [Details](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
    - `eslint-plugin-react`: Provides React specific linting rules.
      - [Details](https://www.npmjs.com/package/eslint-plugin-react)
    - `eslint-plugin-react-hooks`: Enforces the Rules of Hooks.
      - [Details](https://www.npmjs.com/package/eslint-plugin-react-hooks)

  - Additional resources:
    - [Adding ESLint and Prettier to a ViteJS React project](https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj?signin=true)

- **Prettier**: An opinionated code formatter.
  - [Prettier](https://www.npmjs.com/package/prettier)
  - Dependecies:
    - `eslint-config-prettier`: Turns off all Eslint rules that might conflict with Prettier.
      - [Details](https://github.com/prettier/eslint-config-prettier)

  - Additional resources:
    - [Adding ESLint and Prettier to a ViteJS React project](https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj?signin=true)

- **Absolute Imports**
  - Steps:
    1. Configure path aliases in `tsconfig.json`.
        - These aliases streamline your import statements. For instance, replace lengthy relative paths like `../../components/Button` with a simpler alias such as `@components/Button`.
    2. Install and set up `vite-tsconfig-paths` in `vite.config.ts`.
        - This plugin enables Vite to resolve imports using TypeScript's path mapping. This means that when Vite is bundling your application, it will understand and correctly resolve any import paths that use your TypeScript path aliases.
    3. Configure ESLint to recognize TypeScript aliases in `.eslintrc.cjs`.
        - By default, ESLint doesn't recognize TypeScript-specific features. Although your TypeScript compiler understands the path aliases, ESLint may throw errors as it can't resolve the aliased paths.
        - To resolve this, use `eslint-import-resolver-typescript`. This plugin enables ESLint to understand TypeScript's path and module resolution. Configuring ESLint with this plugin allows it to correctly resolve your TypeScript path aliases, preventing unnecessary errors.
    4. Implement the aliases in your import statements.

  - Dependencies:
    - `vite-tsconfig-paths`: Enables vite to resolve imports using TypeScript's path mapping.
      - [More Info](https://www.npmjs.com/package/vite-tsconfig-paths?activeTab=readme)
    - `eslint-import-resolver-typescript`: Helps ESLint understand TypeScript's path and module resolution, including path aliases.
      - [More Info](https://www.npmjs.com/package/eslint-import-resolver-typescript)

  - Additonal resources:
    - [Streamlining Absolute Imports in React with TypeScript and Vite](https://dev.to/mizanrifat/streamlining-absolute-imports-in-react-with-typescript-and-vite-2bpp)
    - [Preferences for auto imports and generated code](https://stackoverflow.com/questions/47330773/is-it-possible-to-configure-vs-code-such-way-that-import-will-use-absolute-path)
    - [eslint-plugin-import > TypeScript](https://www.npmjs.com/package/eslint-plugin-import#typescript)

- **Husky**: Automatically lint your commit messages, code, and run tests upon committing or pushing.
  - [Get started](https://typicode.github.io/husky/get-started.html)

- **commitlint**: Lint commit messages.
  - [Getting started](https://commitlint.js.org/guides/getting-started.html#getting-started)

- **lint-staged**: Run linters against staged git files.
  - [Installation and setup](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#installation-and-setup)

- **eslint-plugin-check-file**: ESLint rules for consistent filename and folder.
  - [Installation](https://www.npmjs.com/package/eslint-plugin-check-file)
