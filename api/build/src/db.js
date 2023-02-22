"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const Pokemons_1 = __importDefault(require("./model/Pokemons"));
const Types_1 = __importDefault(require("./model/Types"));
const sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemondb`, {
    logging: false,
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
(0, Pokemons_1.default)(sequelize);
(0, Types_1.default)(sequelize);
const { poke_type, pokemon } = sequelize.models;
poke_type.belongsToMany(pokemon, { through: "Pokemon_Type" }); // the name of the model, no the name file
pokemon.belongsToMany(poke_type, { through: "Pokemon_Type" });
exports.default = {
    poke_type,
    pokemon,
    sequelize,
};
