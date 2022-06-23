
const db = require("./models");

module.exports = async () => {
  // Create tables:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Tables were created!");

  // Run seeders (datos de prueba):
  await require("./seeders/characterSeeder")();
  await require("./seeders/movieSeeder")();
  console.log("[Database] ¡Testing data ready!");
};