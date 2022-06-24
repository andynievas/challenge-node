

const express = require("express");
const checkToken = require("../middlewares/checkToken");
const validateEmptyFields = require("../middlewares/validateEmptyFieldsCharacter");
const characterController = require("../controllers/characterController");

const characterRouter = express.Router();

// GET /characters?name=nombre
// GET /characters?age=edad
// GET /characters?movies=idMovie
characterRouter.get("/characters", characterController.index);

characterRouter.post("/characters", checkToken, validateEmptyFields, characterController.store);

characterRouter.patch("/characters/:name", checkToken, validateEmptyFields, characterController.update);

characterRouter.delete("/characters/:name", checkToken, characterController.destroy);


module.exports = characterRouter;
