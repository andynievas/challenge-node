
const { Character } = require("../models");

const characters = [
  {
    name: "Andy",
    age: 23,
    weight_value: 70,
    story: "Habia una vez",
  },
  {
    name: "Valentina",
    age: 23,
    weight_value: 70,
    story: "Habia una vez",
  },
  {
    name: "Ines",
    age: 23,
    weight_value: 70,
    story: "Habia una vez",
  },
];

module.exports = async () => {
  await Character.bulkCreate(characters);
  console.log("[Database] Characters seeder.");
};