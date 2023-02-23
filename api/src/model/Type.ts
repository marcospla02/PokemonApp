import { DataTypes, Sequelize } from "sequelize";

const Types = (sequelize: Sequelize) => {
  sequelize.define(
    "type",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

export default Types;
