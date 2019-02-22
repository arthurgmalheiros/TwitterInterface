const express = require("express");

const routes = express.Router();

const TweetController = require("./Controllers/TweetController");
const LikeController = require("./Controllers/LikeController");

//utilizar os métodos importados
routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

routes.post("/likes/:id", LikeController.store);

module.exports = routes;