module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  extends: ["plugin:vue/vue3-essential", "plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["vue", "@typescript-eslint"],

  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-v-html': 'off',
    'vue/no-mutating-props': 'off',
    'vue/require-default-pro': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^(unused|ignored).*$',
    //     varsIgnorePattern: '^(unused|ignored).*$'
    //   }
    // ],
    'no-unused-vars': 'off',
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^(unused|ignored).*$',
    //     varsIgnorePattern: '^(unused|ignored).*$'
    //   }
    // ],
    'space-before-function-paren': 'off',
    // quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/require-valid-default-prop': 'off',
    // 'no-console': 'error',
    'no-console': 'off',
    'vue/no-setup-props-destructure': 'off'
  },
  globals: {
    window: true,
    NodeJS: true
  }
}
