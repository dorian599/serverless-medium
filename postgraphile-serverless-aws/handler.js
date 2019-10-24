const handler = require('serverless-express/handler');
const server = require('./server');

exports.handler = handler(server);