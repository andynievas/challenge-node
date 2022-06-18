
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Character = require("./character")(sequelize, Model, DataTypes);
const Movie = require("./movie")(sequelize, Model, DataTypes);
const User = require("./user")(sequelize, Model, DataTypes);

// Define relationships

Movie.hasMany(Character);
Character.hasMany(Movie);
//Character.belongsToMany(Movie);

module.exports = {
  sequelize,
  Character,
  Movie,
  User,
};