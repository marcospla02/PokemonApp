"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.Pokemon = exports.Type = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
const Pokemon_1 = __importDefault(require("./model/Pokemon"));
const Type_1 = __importDefault(require("./model/Type"));
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemondb`, {
    logging: false,
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
exports.sequelize = sequelize;
(0, Type_1.default)(sequelize);
(0, Pokemon_1.default)(sequelize);
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
const { Type, Pokemon } = sequelize.models;
exports.Type = Type;
exports.Pokemon = Pokemon;
Pokemon.belongsToMany(Type, { through: "Pokemon_Type" });
Type.belongsToMany(Pokemon, { through: "Pokemon_Type" }); // the name of the model, no the name file
