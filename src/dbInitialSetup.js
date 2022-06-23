
const db = require("./models");

module.exports = async () => {
  // Create tables:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Tables were created!");

  // Run seeders (datos de prueba):
  await require("./seeders/characterSeeder")();
  await require("./seeders/genreSeeder")();
  await require("./seeders/movieSeeder")();

  const characters = await db.Character.findAll();
  await characters.map(async (character) => await character.addMovie(Math.floor(Math.random() * 3) + 1));

  // const movies = await db.Movie.findAll();
  // await movies.map(async (movie) => await movie.addGenre());

  console.log("[Database] ¡Testing data ready!");
};