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
function getPokemonsDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield db_1.default.pokemon.findAll({
            attributes: [
                "name",
                "life",
                "height",
                "weight",
                "Attack",
                "Defense",
                "Speed",
                "img",
                "createdInDb",
            ],
            include: {
                model: db_2.default.type,
                attributes: ["name"],
                through: {
                    // this is the relationship with Pokemon and poke_type
                    attributes: [],
                },
            },
        });
        // console.log("soy en db:", db);
        return db;
    });
}
exports.default = getPokemonsDb;
