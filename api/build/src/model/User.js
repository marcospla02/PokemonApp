"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = (sequelize) => {
    sequelize.define("user", {
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
        },
        favorites: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
            // defaultValue: {},
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
};
exports.default = user;
