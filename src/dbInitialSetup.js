
const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Tables were created!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/characterSeeder")();
  await require("./seeders/movieSeeder")();
  console.log("[Database] ¡Testing data ready!");
};