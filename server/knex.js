const Knex = require("knex");
const config = require("./knexfile");

const db = Knex({
  client: config.client,
  port: config.port,
  connection: {
    host: config.connection.host,
    port: config.connection.port,
    database: config.connection.database,
    user: config.connection.user,
    password: config.connection.password,
  },
});

module.exports = db;
