

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
        defaultValue: 'none',
        allowNull: false,
      },
      release_date: {
        type: DataTypes.STRING,
        defaultValue: JSON.stringify((new Date()).toLocaleDateString()),
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
        validate: {
          min: 1,
          max: 5,
        },
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