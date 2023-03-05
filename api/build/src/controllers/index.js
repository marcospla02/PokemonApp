"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPokemon = exports.getTypes = exports.getPokemonsDb = exports.getPokemonIdInDb = exports.getAllPokemons = exports.findNameInDb = exports.deletePokemon = exports.getPokemonsIdOrName = void 0;
var getPokemonsIdOrName_1 = require("./controllersApi/getPokemonsIdOrName");
Object.defineProperty(exports, "getPokemonsIdOrName", { enumerable: true, get: function () { return __importDefault(getPokemonsIdOrName_1).default; } });
var deletePokemon_1 = require("./deletePokemon");
Object.defineProperty(exports, "deletePokemon", { enumerable: true, get: function () { return __importDefault(deletePokemon_1).default; } });
var findNameInDb_1 = require("./findNameInDb");
Object.defineProperty(exports, "findNameInDb", { enumerable: true, get: function () { return __importDefault(findNameInDb_1).default; } });
var getAllPokemons_1 = require("./getAllPokemons");
Object.defineProperty(exports, "getAllPokemons", { enumerable: true, get: function () { return __importDefault(getAllPokemons_1).default; } });
var getPokemonIdInDb_1 = require("./getPokemonIdInDb");
Object.defineProperty(exports, "getPokemonIdInDb", { enumerable: true, get: function () { return __importDefault(getPokemonIdInDb_1).default; } });
__exportStar(require("./getPokemons"), exports);
var getPokemonsDb_1 = require("./getPokemonsDb");
Object.defineProperty(exports, "getPokemonsDb", { enumerable: true, get: function () { return __importDefault(getPokemonsDb_1).default; } });
var getTypes_1 = require("./getTypes");
Object.defineProperty(exports, "getTypes", { enumerable: true, get: function () { return __importDefault(getTypes_1).default; } });
var newPokemon_1 = require("./newPokemon");
Object.defineProperty(exports, "newPokemon", { enumerable: true, get: function () { return __importDefault(newPokemon_1).default; } });
