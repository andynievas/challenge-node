

const authRoutes = require("./auth");
const characterRoutes = require("./character");
const movieRoutes = require("./movie");
const dbRoutes = require("./db");

module.exports = (app) => {
  app.use(authRoutes);
  app.use(characterRoutes);
  app.use(movieRoutes);
  app.use(dbRoutes);
};