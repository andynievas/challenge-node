
require("dotenv").config();

console.clear();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");

const APP_PORT = process.env.APP_PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());
routes(app);

dbInitialSetup();

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Server running on port ${APP_PORT}!\n`),
);