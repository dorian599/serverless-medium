const express = require('serverless-express/express');
const { postgraphile } = require('postgraphile');
const Pool = require('pg-pool');
const pgConfig = require('./config');

const {
  SCHEMA,
  PG_DEFAULT_ROLE,
  JW_SECRET,
  JW_PG_TYPE_IDENTIFIER
} = process.env;

const pool = new Pool(pgConfig);
let postgraphileConfig = { // options
  dynamicJson: true,
  graphqlRoute: '/',
  extendedErrors: ['hint', 'detail', 'errcode'],
  jwtSecret: JW_SECRET,
  jwtPgTypeIdentifier: JW_PG_TYPE_IDENTIFIER,
  legacyRelations: 'omit',
  readCache: 'introspection.cache',
  pgDefaultRole: PG_DEFAULT_ROLE
};

const app = express();
app.use(postgraphile(
  pool,
  SCHEMA,
  postgraphileConfig,
));

module.exports = app;
