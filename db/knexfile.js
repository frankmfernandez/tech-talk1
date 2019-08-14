module.exports = {
    client: "pg",
    connection: {
      host: "ec2-50-17-246-114.compute-1.amazonaws.com",
      port: 5432,
      database: "d7qm6ncd7jro5q",
      user: "ljlzasarxshvff",
      password: "14e59706ab00595de6c3c7bfd2502daee839ec1ee432feb79e29f34af25ec8cd",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  };
  