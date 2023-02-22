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
const axios_1 = __importDefault(require("axios"));
const getPokemonsDb_1 = __importDefault(require("./getPokemonsDb"));
function getPokemonsIdOrName(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pokemons;
            //todo esto es para la api, tengo que hacer lo mismo para mi bbdd
            if (name) {
                pokemons = yield (0, axios_1.default)(`https://pokeapi.co/api/v2/pokemon/${name}`);
            }
            else if (id) {
                pokemons = yield (0, axios_1.default)(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }
            const poke = yield (pokemons === null || pokemons === void 0 ? void 0 : pokemons.data);
            const infoPoke = {
                name: poke.name,
                life: poke.stats[0].base_stat,
                height: poke.height,
                weight: poke.weight,
                Attack: poke.stats[1].base_stat,
                Defense: poke.stats[2].base_stat,
                Speed: poke.stats[5].base_stat,
                types: poke.types.map((t) => t.type.name),
                img: poke.sprites.versions["generation-v"]["black-white"].animated
                    .front_default,
            };
            const dbPokemon = yield (0, getPokemonsDb_1.default)();
            const findPokemon = dbPokemon &&
                dbPokemon.find((poke) => {
                    const nameDb = poke.getDataValue("name");
                    return (nameDb === null || nameDb === void 0 ? void 0 : nameDb.toLowerCase()) === (name === null || name === void 0 ? void 0 : name.toLowerCase());
                });
            if (findPokemon) {
                console.log("'estoy en findPokemon'");
                return findPokemon;
            }
            else if (infoPoke)
                return infoPoke;
        }
        catch (error) {
            console.error("error in getPokemonsId:", error.message);
            return error.message;
        }
    });
}
exports.default = getPokemonsIdOrName;
