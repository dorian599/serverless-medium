require('dotenv').config();

const url = require('url');


const params = url.parse(process.env.POSTGRES_CONNECTION);
const auth = params.auth.split(':');
const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  idleTimeoutMillis: 0.001
};

module.exports = config;
