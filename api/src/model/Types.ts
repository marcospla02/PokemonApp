import { DataTypes } from "sequelize";

const Type = (sequelize: any) => {
  sequelize.define(
    "poke_type",
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

export default Type;
