#!/usr/bin/env node
console.log('Waiting for webpacking ...');

require('babel-polyfill');
require('../babelServer');

const PATHS = require('../webpack/path-help');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const isomorphicConfig = require('../webpack/webpack-isomorphic-tools-config');

const ROOT = PATHS.ROOT;
const hotPort = process.env.PORT || 3001;


global.__DEVELOPMENT__ = process.env.NODE_ENV === 'start';

global.webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .server(ROOT, function () {
    const Koa = require('koa');
    const middleware = require('koa-webpack');
    const webpack = require('webpack');
    const devConfig = require('../webpack.config');
    const middlewareRegister = require('../src/server/middlewareRegister');
    const compiler = webpack(devConfig);
    const app = new Koa();
     // webpack-dev-middleware
    const dev = {
      noInfo: true,
      quiet: true,
      publicPath: devConfig.output.publicPath,
      stats: {
        colors: true
      }
    };
    // webpack-hot-middleware
    const hot = {

    };
    app.use(middleware({
      compiler: compiler,
      dev: dev,
      hot: hot
    }));

    middlewareRegister(app);

    app.listen(hotPort, () => {
      console.info(`==> 🌎 Listening on port ${hotPort}. Open up http://localhost:${hotPort}/ in your browser.`);
    });
  });
