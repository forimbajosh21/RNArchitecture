/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      extraNodeModules: {
        src: path.resolve(__dirname, 'src'),
        app: path.resolve(__dirname, 'src/app'),
        common: path.resolve(__dirname, 'src/common'),
        i18n: path.resolve(__dirname, 'src/i18n'),
        routes: path.resolve(__dirname, 'src/routes'),
        screens: path.resolve(__dirname, 'src/screens'),
      },
    },
  };
})();
