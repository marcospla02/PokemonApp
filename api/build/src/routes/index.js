"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemons_1 = __importDefault(require("./pokemons"));
const poke_type_1 = __importDefault(require("./poke_type"));
const pokemonId_1 = __importDefault(require("./pokemonId"));
const createPokemon_1 = __importDefault(require("./createPokemon"));
const router = (0, express_1.Router)();
router.use("/pokemons", pokemons_1.default);
router.use("/poketype", poke_type_1.default);
router.use("/pokemonId", pokemonId_1.default);
router.use("/create", createPokemon_1.default);
exports.default = router;
