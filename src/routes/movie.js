
const express = require("express");

const movieController = require("../controllers/movieController");

const movieRouter = express.Router();

// GET /movies?name=nombre
// GET /movies?age=edad
// GET /movies?movies=idMovie
movieRouter.get("/movies", movieController.index);

module.exports = movieRouter;
