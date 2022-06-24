
const express = require("express");
const checkToken = require("../middlewares/checkToken");
const validateEmptyFields = require("../middlewares/validateEmptyFieldsMovie");
const movieController = require("../controllers/movieController");

const movieRouter = express.Router();

// GET /movies?name=nombre
// GET /movies?genre=idGenero
// GET /movies?order=ASC | DESC
movieRouter.get("/movies", movieController.index);

movieRouter.post("/movies", checkToken, validateEmptyFields, movieController.store);

movieRouter.patch("/movies/:id", checkToken, validateEmptyFields, movieController.update);

movieRouter.delete("/movies/:id", checkToken, movieController.destroy);

module.exports = movieRouter;
