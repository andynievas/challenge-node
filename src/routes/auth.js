

const express = require("express");
const checkToken = require("../middlewares/checkToken");
const authController = require("../controllers/authController");

const authRouter = express.Router;

authRouter.post("/auth/login", checkToken, authController.index);

authRouter.post("/auth/register", authController.index);

