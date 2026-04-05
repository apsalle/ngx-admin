// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angularPlugin = require("@angular-eslint/eslint-plugin");
const angularTemplatePlugin = require("@angular-eslint/eslint-plugin-template");
const angularTemplateParser = require("@angular-eslint/template-parser");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    plugins: {
      "@angular-eslint": angularPlugin,
      "@angular-eslint/template": angularTemplatePlugin,
    },
    processor: angularTemplatePlugin.processors["extract-inline-html"],
    rules: {
      // Angular ESLint recommended rules
      "@angular-eslint/component-class-suffix": "error",
      "@angular-eslint/contextual-lifecycle": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/no-empty-lifecycle-method": "error",
      "@angular-eslint/no-inputs-metadata-property": "error",
      "@angular-eslint/no-output-native": "error",
      "@angular-eslint/no-output-on-prefix": "error",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/no-outputs-metadata-property": "error",
      "@angular-eslint/use-pipe-transform-interface": "error",
      "@angular-eslint/use-lifecycle-interface": "warn",

      // Custom rules
      "@angular-eslint/prefer-standalone": "warn",
      "@angular-eslint/no-input-rename": [
        "warn",
        {
          allowedNames: ["name"],
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          prefix: "ngx",
          style: "kebab-case",
          type: "element",
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          prefix: "ngx",
          style: "camelCase",
          type: "attribute",
        },
      ],

      // Relax rules not previously enforced — enable gradually
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      "@angular-eslint/template": angularTemplatePlugin,
    },
    rules: {
      // Angular template recommended rules
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/no-negated-async": "error",
    },
  },
);
