// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Ensure Node globals are defined
  {
    languageOptions: {
      globals: {
        ...globals.node, // This makes process, console, etc. available as read-only globals
      },
    },
  },
  js.configs.recommended, // built-in rules that ESLint recommends
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { sourceType: 'module' },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-shadow': 'warn',
    },
  },
  eslintConfigPrettier,
];
