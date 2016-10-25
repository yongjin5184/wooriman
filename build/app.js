var express = require('express');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('../routes/index');
var users = require('../routes/users');

const app = express();
const port = 9000;
const devPort = 9001;

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  let compiler = webpack(config);
  let devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

app.use('/', express.static(__dirname + '/../public'));

var users = require('./routes/users');
app.use('/users', users);

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});