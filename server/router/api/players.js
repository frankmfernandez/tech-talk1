const router = require("express").Router();
//const { send, filter } = require("../../helpers");

/***Quotes***/
module.exports = (db) => {
  router.get("/", (req, res) => {
      console.log("im in router")
    // FIXME your code here
    db.players.list().then((players) => {
        console.log("im in db list")
      if (req.query) {
          //const author = req.query.author;
        //   const resultingData = players;
        //   console.log(typeof resultingData)
        
        res.send(players);
      }
    });
  });

  return router;
};
