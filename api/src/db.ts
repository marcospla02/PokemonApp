import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
import pokemons from "./model/Pokemon";
import Types from "./model/Type";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemondb`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

Types(sequelize);
pokemons(sequelize);
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

(sequelize.models as any) = Object.fromEntries(capsEntries);

const { Type, Pokemon } = sequelize.models;

Pokemon.belongsToMany(Type, { through: "Pokemon_Type" });
Type.belongsToMany(Pokemon, { through: "Pokemon_Type" }); // the name of the model, no the name file

export { Type, Pokemon, sequelize };
