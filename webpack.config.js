const merge = require('webpack-merge');
const validate = require('webpack-validator');

const PATHS = require('./webpack/path-help');
const Loaders = require('./webpack/loader');
const development = require('./webpack/webpack.development');
const production = require('./webpack/webpack.production');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const links = [
  "https://fonts.googleapis.com/css?family=Lato:300|Roboto",
  "http://cdn.bootcss.com/ionicons/2.0.1/css/ionicons.min.css"
]


const common = merge({
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },
  Loaders.commonPreloaders(PATHS.client),
  Loaders.commonLoaders(PATHS.client),
  Loaders.commonPlugins({
    title: 'Dome',
    appMountId: 'app',
    links:links
  })
);
let config;

if (TARGET && TARGET === 'start') {
  console.info('==> webpack with development')
  config = merge(common, development); // merge two config
  module.exports = validate(config, {
    quiet: true
  })
}

if (TARGET && TARGET === 'build') {
  console.info('==> webpack with production');
  config = merge(common, production);
  module.exports = validate(config, {
    quiet: true
  })
}
