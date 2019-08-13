// const express = require("express");
// const path = require("path");
// const db = require("./knex");
// const bodyParser = require("body-parser");
// const app = express();
// const knex = require("knex");
// app.use(bodyParser.json());



// // Serve static assets
// app.use(express.static(path.resolve(__dirname, "..", "dist")));

// app.get("/api/players", async (req,res) => {
//     try{
//         const players = await knex(db).select().from("players")
//         console.log(players)
//         res.json(players)
//     } catch (err){
//         console.log("Error", err);
//         res.sendStatus(500);
//     }
// });

// // app.post("/api/players", async (req, res) => {
// //   try {
// //     console.log(req.body.queryParams);
// //     //Declare parameters - This will need to be changed for front-end integration
// //     //Declare the query

// //     // paramsObj = req.body.queryParams;
// //     // let query = db("players");

// //     // for (const key in paramsObj){
// //     //     if (paramsObj[key]===true){
// //     //         for (const key in paramsObj.sortBy){
// //     //             if(paramsObj.sortBy[key]===true){
// //     //                 query.select().where("")
// //     //             }
// //     //         }
// //     //     }
// //     // }

// //     //Return query results
// //     query.then((results) => res.json(results));
// //   } catch (err) {
// //     console.error("Error loading locations", err);
// //     res.sendStatus(500);
// //   }
// // });

// // Always return the main index.html, since we are developing a single page application
// // app.get("*", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
// // });



// module.exports = app;
