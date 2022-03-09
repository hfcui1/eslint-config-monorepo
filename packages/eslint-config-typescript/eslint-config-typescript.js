const commonConfig = require('@hfcjoy/eslint-config-common')

module.exports = {
  extends: [
    '@hfcjoy/common',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugin: ['prettier'],
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
