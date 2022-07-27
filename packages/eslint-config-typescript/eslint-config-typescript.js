const commonConfig = require('@joynow/eslint-config-common')

module.exports = {
  extends: [
    '@joynow/common',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['prettier'],
  overrides: [
    ...commonConfig.overrides,
    {
      files: ['**/*.ts'],
      rules: {
        'no-use-before-define': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
