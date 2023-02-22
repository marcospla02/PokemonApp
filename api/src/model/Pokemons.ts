import { DataTypes, Sequelize } from "sequelize";

const pokemons = (sequelize: Sequelize) => {
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
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
      // types: { type: DataTypes.ARRAY(DataTypes.STRING) },
      createdInDb: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    { timestamps: false }
  );
};

export default pokemons;
