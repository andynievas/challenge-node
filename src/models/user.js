
const bcryptjs = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    async checkPassword(password) {
      const match = await bcryptjs.compare(password, this.password);
      return match;
    }
  }

  User.init(
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
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    },
  );

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcryptjs.hash(user.password, process.env.BCRYPTROUNDS);
    user.password = hashedPassword;
  });

  return User;
};