

const express = require("express");

const dbController = require("../controllers/dbController");

const dbRouter = express.Router();

dbRouter.post("/db/reset", dbController.reset);

module.exports = dbRouter;
