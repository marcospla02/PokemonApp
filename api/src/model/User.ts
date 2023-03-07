import { DataTypes, Sequelize } from "sequelize";

const user = (sequelize: Sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      favorites: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        // defaultValue: {},
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

export default user;
