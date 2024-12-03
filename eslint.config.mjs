import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'node/prefer-global/process': 'off',
      'ts/no-require-imports': 'off',
      'react/prefer-destructuring-assignment': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'no-async-promise-executor': 'off',
      'no-useless-return': 'off',
    },
    ignores: ['lib'],
    languageOptions: {
      globals: {
        chrome: true,
      },
    },
  },
)
