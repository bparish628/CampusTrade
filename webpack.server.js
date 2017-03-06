/* eslint no-console: 0 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const properties = require('./properties.json');
const webpackConfig = require('./webpack.config');

const restHost = properties.RestHost;
const serverUrl = `http://${restHost}`;
const config = Object.create(webpackConfig);

config.entry.app.unshift('webpack-dev-server/client?http://localhost:3000/', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.watch = true;

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  publicPath: `/${config.output.publicPath}`,
  contentBase: 'dist',
  hot: true,
  stats: {
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  proxy: [
    {
      context: (pathname, req) => pathname === '/' && req.method === 'GET',
      target: `${serverUrl}/index.html`
    },
    {
      context: '/**',
      target: serverUrl
    }
  ]
});

server.listen(3000, 'localhost', err => {
  if (err) {
    console.log(err);
  }
});
