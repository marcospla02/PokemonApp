import { DataTypes, Sequelize } from "sequelize";

const Types = (sequelize: Sequelize) => {
  sequelize.define(
    "type",
    {
      id: {
        type: DataTypes.UUID, //  sea unico
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

export default Types;
