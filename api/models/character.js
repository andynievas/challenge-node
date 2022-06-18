

module.exports = (sequelize, Model, DataTypes) => {
  class Character extends Model { }

  Character.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      weight_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      weight_unit: {
        type: DataTypes.STRING,
        defaultValue: "Kg",
        allowNull: false
      },
      story: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "character",
    },
  );

  return Character;
};