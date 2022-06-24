
const { Movie } = require("../models");

const movies = [
  {
    title: "Toy Story",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 6),
  },
  {
    title: "Raya",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 6),
  },
  {
    title: "Soul",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 6),
  },
  {
    title: "Encanto",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 6),
  },
  {
    title: "Luca",
    image: "none",
    release_date: "hoy",
    rating: 3,
    genreId: Math.ceil(Math.random() * 6),
  },
];

module.exports = async () => {
  await Movie.bulkCreate(movies);
  console.log("[Database] Movies seeder.");
};