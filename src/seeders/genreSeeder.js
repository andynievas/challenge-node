
const { Genre } = require("../models");

const genres = [
  {
    name: "Action",
    image: "none",
  },
  {
    name: "Infantil",
    image: "none",
  },
  {
    name: "Princess",
    image: "none",
  },
];

module.exports = async () => {
  await Genre.bulkCreate(genres);
  console.log("[Database] Se corrió el seeder de Genre.");
};