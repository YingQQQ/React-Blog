require('babel-polyfill');
require('../babelServer');

const PATHS = require('../webpack/path-help');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const isomorphicConfig = require('../webpack/webpack-isomorphic-tools-config');

const ROOT = PATHS.ROOT;

global.__DEVELOPMENT__ = process.env.NODE_ENV === 'start';

global.webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .server(ROOT, function () {
    require('../src/server/server');
  });
