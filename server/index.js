
// TJ stuff
// const app = require("./app");

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

/**
 * YOU SHOULDN'T MODIFY THIS FILE
 * UNLESS ABSOLUTELY NECESSARY.
 */
const PORT = process.env.PORT || 8000; //default port to 1337

/***Our Express App***/
const app = require("./server.js");

/***CLI Text Coloring Module***/
const chalk = require("chalk");

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(
    `${chalk.green.bold("Server listening on port: ")}${chalk.cyan.bold(PORT)}`
  )
);
