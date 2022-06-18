

const express = require("express");

const characterController = require("../controllers/characterController");

const characterRouter = express.Router();

// GET /characters?name=nombre
// GET /characters?age=edad
// GET /characters?movies=idMovie
characterRouter.get("/characters", characterController.index);

module.exports = characterRouter;
