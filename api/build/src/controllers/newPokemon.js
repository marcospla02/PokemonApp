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
function newPokemon(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!body.name)
                throw new Error("the name is required");
            let newPokemon = yield db_1.default.pokemon.create({
                name: body.name,
                life: body.life,
                height: body.height,
                weight: body.weight,
                Attack: body.Attack,
                Defense: body.Defense,
                Speed: body.Speed,
                img: body.img,
            });
            const findType = yield db_2.default.type.findAll({
                where: { name: body.types },
            });
            // console.log("soy find type:", findType);
            newPokemon.setDataValue("types", findType);
            return newPokemon;
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.default = newPokemon;
