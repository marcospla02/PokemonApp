"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pokemons = (sequelize) => {
    sequelize.define("pokemon", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        life: { type: sequelize_1.DataTypes.INTEGER },
        height: { type: sequelize_1.DataTypes.DECIMAL },
        weight: { type: sequelize_1.DataTypes.DECIMAL },
        Attack: { type: sequelize_1.DataTypes.INTEGER },
        Defense: { type: sequelize_1.DataTypes.INTEGER },
        Speed: { type: sequelize_1.DataTypes.INTEGER },
        img: { type: sequelize_1.DataTypes.STRING },
        typesApi: { type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING) },
        idPoke: { type: sequelize_1.DataTypes.INTEGER, defaultValue: null },
    }, { timestamps: false });
};
exports.default = pokemons;
