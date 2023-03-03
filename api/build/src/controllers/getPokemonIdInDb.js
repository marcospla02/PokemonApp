"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
function getPokemonsIdInDb(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pokemon = yield db_1.Pokemon.findOne({
                where: { id: id },
                include: {
                    model: db_1.Type,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
            });
            if (!pokemon)
                throw new Error("the id was not found");
            return pokemon;
        }
        catch (error) {
            console.log("Error in pokemonDb:", error.message);
            return error.message;
        }
    });
}
exports.default = getPokemonsIdInDb;
