import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
import Pokemons from "./model/Pokemons";
import Types from "./model/Types";

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemondb`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

Types(sequelize);
Pokemons(sequelize);

const { type, pokemon } = sequelize.models;

type.belongsToMany(pokemon, { through: "Pokemon_Type" }); // the name of the model, no the name file
pokemon.belongsToMany(type, { through: "Pokemon_Type" });

export default {
  type,
  pokemon,
  sequelize,
};
