const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@modules': 'src/redux/modules',
    '@s': 'src/services',
    '@a': 'src/assets',
    '@common': 'src/common',
    '@constants': 'src/constants',
  })(config);

  return config;
};
