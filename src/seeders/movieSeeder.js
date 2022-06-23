
const { Movie } = require("../models");

const movies = [
  {
    title: "Shrek",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 3),
  },
  {
    title: "Shrek",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 3),
  },
  {
    title: "Shrek",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 3),
  },
];

module.exports = async () => {
  await Movie.bulkCreate(movies);
  console.log("[Database] Se corrió el seeder de Peliculas.");
};