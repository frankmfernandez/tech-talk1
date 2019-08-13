const router = require("express").Router();
const playersRouter = require("./players");
module.exports = (db) => {
  router.use("/players", playersRouter(db));

  return router;
};
