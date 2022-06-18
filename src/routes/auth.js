

const express = require("express");
const checkToken = require("../middlewares/checkToken");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/auth/login", checkToken, authController.login);

authRouter.post("/auth/register", authController.register);

module.exports = authRouter;
