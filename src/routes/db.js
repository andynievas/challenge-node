

const express = require("express");

const dbController = require("../controllers/dbController");

const dbRouter = express.Router();

dbRouter.post("/db/reset", dbController.index);

module.exports = dbRouter;
