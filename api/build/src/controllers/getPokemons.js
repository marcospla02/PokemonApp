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
exports.getPokemons = void 0;
const axios_1 = __importDefault(require("axios"));
const db_1 = require("../db");
let num = 0;
function getPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pokemons = yield (0, axios_1.default)("https://pokeapi.co/api/v2/pokemon?limit=100");
            const infoApi = yield pokemons.data.results.map((poke) => __awaiter(this, void 0, void 0, function* () {
                const info = yield (0, axios_1.default)(poke.url);
                return info;
            }));
            const allInfoApi = yield Promise.all(infoApi);
            const apiUrl = allInfoApi.reduce((prev, value) => {
                return prev.concat(value.data);
            }, []);
            const pokeInfo = yield apiUrl.map((p) => {
                const allPokeInfo = {
                    idPoke: p.id,
                    name: p.name,
                    life: p.stats[0].base_stat,
                    height: p.height,
                    weight: p.weight,
                    Attack: p.stats[1].base_stat,
                    Defense: p.stats[2].base_stat,
                    Speed: p.stats[5].base_stat,
                    typesApi: p.types.map((t) => t.type.name),
                    img: p.sprites.versions["generation-v"]["black-white"].animated
                        .front_default,
                };
                return allPokeInfo;
            });
            // const infoDb = await getPokemonsDb();
            // const allInfo = await pokeInfo.concat(infoDb);
            while (num < 1) {
                console.log(num);
                num++;
                console.log("despues del incremnto", num);
                return db_1.Pokemon.bulkCreate(pokeInfo);
            }
            return db_1.Pokemon.findOrCreate({
                where: { name: pokeInfo.map((p) => p.name) },
            });
        }
        catch (error) {
            console.error(error.message);
            return error.message;
        }
    });
}
exports.getPokemons = getPokemons;
