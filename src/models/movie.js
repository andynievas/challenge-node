

module.exports = (sequelize, Model, DataTypes) => {
  class Movie extends Model { }

  Movie.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.ENUM(['1', '2', '3', '4', '5']),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "movie",
    },
  );

  return Movie;
};