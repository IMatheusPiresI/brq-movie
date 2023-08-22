module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'react/jsx-uses-react': 1,
        'arrow-body-style': ['warn'],
        '@typescript-eslint/no-shadow': ['error'],
        'react-hooks/exhaustive-deps': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@**',
                group: 'external',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always-and-inside-groups',
          },
        ],
      },
    },
  ],
};
