

const characterRoutes = require("./characterRoutes");
const movieRoutes = require("./movieRoutes");
const authRoutes = require("./authRoutes");
const dbRoutes = require("./dbRoutes");
// const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use(characterRoutes);
  app.use(movieRoutes);
  app.use(authRoutes);
  app.use(dbRoutes);
  // app.use(userRoutes);
};