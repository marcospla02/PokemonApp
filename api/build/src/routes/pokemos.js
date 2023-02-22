"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getPokemons_1 = __importDefault(require("../components/getPokemons"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    try {
        const info = (0, getPokemons_1.default)();
        console.log(info);
    }
    catch (error) { }
});
