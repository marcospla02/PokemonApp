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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const db_2 = __importDefault(require("../db"));
function getPokemonsIdInDb(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pokemon = yield db_1.default.pokemon.findAll({
                where: {
                    id: id,
                },
                include: {
                    model: db_2.default.type,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
            });
            console.log("soy pokemonDb:", pokemon);
            return pokemon;
        }
        catch (error) {
            console.log("Error in pokemonDb:", error.message);
            return error.message;
        }
    });
}
exports.default = getPokemonsIdInDb;
