
const { Movie } = require("../models");

const movies = [
  {
    title: "Shrek",
    image: "none",
    release_date: "hoy",
    rating: 3,
    characterId: [1, 2],
  },
  {
    title: "Shrek",
    image: "none",
    release_date: "hoy",
    rating: 3,
    characterId: [3, 2],
  },
  {
    title: "Shrek",
    image: "none",
    release_date: "hoy",
    rating: 3,
    characterId: [2, 1],
  },
];

module.exports = async () => {
  await Movie.bulkCreate(movies);
  console.log("[Database] Se corrió el seeder de Peliculas.");
};