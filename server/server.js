/**
 * YOU SHOULDN'T MODIFY THIS FILE
 * UNLESS ABSOLUTELY NECESSARY.
 */
const cors = require("cors")
/***Express setup***/
const express = require("express");
const app = express();


/***Middleware Dependencies***/
const morgan = require("morgan"); //logger middleware

/***Other Dependencies***/
const db = require("../db");
const apiRouter = require("./router/api")(db);

/***Add middleware to the server, mounted on the /api/ path ***/
app.use("/api", [
  cors(),
  express.json(), //enables parsing of application/json request bodies
  express.urlencoded({ extended: true }), //enables parsing of application/x-www-form-urlencoded data
  apiRouter,
]);

//app.use(cors);

if (process.env.NODE_ENV !== "test") {
  //run morgan middelware's development mode; detailed, colored dev log
  if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
}

module.exports = app;
