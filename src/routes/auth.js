

const express = require("express");
const emptyFieldsLogin = require("../middlewares/validateEmptyFieldsLogin");
const emptyFieldsRegister = require("../middlewares/validateEmptyFieldsRegister");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/auth/login", emptyFieldsLogin, authController.login);

authRouter.post("/auth/register", emptyFieldsRegister, authController.register);

module.exports = authRouter;
