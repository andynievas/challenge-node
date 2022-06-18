

const authRoutes = require("./auth");
const checkToken = require("../middlewares/checkToken");
const characterRoutes = require("./character");
const movieRoutes = require("./movie");
const dbRoutes = require("./db");

module.exports = (app) => {
  app.use(authRoutes);
  app.use(checkToken);
  app.use(characterRoutes);
  app.use(movieRoutes);
  app.use(dbRoutes);
};