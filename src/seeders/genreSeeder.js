
const { Genre } = require("../models");

const genres = [
  {
    name: "Action",
    image: "none",
  },
  {
    name: "Drama",
    image: "none",
  },
  {
    name: "Fantasy",
    image: "none",
  },
  {
    name: "Romance",
    image: "none",
  },
  {
    name: "Musical",
    image: "none",
  },
  {
    name: "Family",
    image: "none",
  },
];

module.exports = async () => {
  await Genre.bulkCreate(genres);
  console.log("[Database] Genre seeder.");
};