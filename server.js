const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config');

const app = express();
const webpackCompiler = webpack(webpackConfig);
const PORT = 8080;

const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: '/',
});

const hotMiddleware = webpackHotMiddleware(webpackCompiler);
app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!\n`);
});
