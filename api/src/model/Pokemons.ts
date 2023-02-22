import { DataTypes } from "sequelize";

const Pokemon = (sequelize: any) => {
  sequelize.define(
    "pokemon",
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
      life: { type: DataTypes.INTEGER },
      height: { type: DataTypes.DECIMAL },
      weight: { type: DataTypes.DECIMAL },
      Attack: { type: DataTypes.INTEGER },
      Defense: { type: DataTypes.INTEGER },
      Speed: { type: DataTypes.INTEGER },
      img: { type: DataTypes.STRING },
      types: { type: DataTypes.ARRAY(DataTypes.STRING) },
    },
    { timestamps: false }
  );
};

export default Pokemon;
