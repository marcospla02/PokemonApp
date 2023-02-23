"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Types = (sequelize) => {
    sequelize.define("type", {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
};
exports.default = Types;
