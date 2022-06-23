
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
const Genre = require("./genre")(sequelize, Model, DataTypes);
const User = require("./user")(sequelize, Model, DataTypes);

// Define relationships

Movie.belongsToMany(Character, { through: 'Characters_Movies' });
Character.belongsToMany(Movie, { through: 'Characters_Movies' });
Genre.hasMany(Movie);
Movie.belongsTo(Genre);

// Character.belongsToMany(Movie);

module.exports = {
  sequelize,
  Character,
  Movie,
  Genre,
  User,
};