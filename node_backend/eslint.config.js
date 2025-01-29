import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier'; // Import Prettier config

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Apply rules to JS and TS files
    languageOptions: {
      globals: globals.browser, // Use browser globals if necessary
    },
    plugins: [
      'prettier', // Add Prettier plugin
    ],
    extends: [
      pluginJs.configs.recommended, // Include ESLint's recommended JS rules
      ...tseslint.configs.recommended, // Include TypeScript ESLint rules
      'plugin:prettier/recommended', // Integrate Prettier with ESLint
      eslintConfigPrettier, // Disables ESLint rules that conflict with Prettier
    ],
    rules: {
      'prettier/prettier': 'error', // Treat Prettier formatting issues as errors
    },
  },
];
