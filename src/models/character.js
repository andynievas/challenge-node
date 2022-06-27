

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
        defaultValue: "",
        allowNull: false,
      },
      age: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      weight_value: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
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
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "character",
    },
  );

  return Character;
};