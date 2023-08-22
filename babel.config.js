module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
        alias: {
          '@src': './src/',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@schemas': './src/schemas',
          '@services': './src/services',
          '@store': './src/store',
          '@routes': './src/routes',
          '@resources': './src/resources',
        },
      },
    ],
  ],
};
