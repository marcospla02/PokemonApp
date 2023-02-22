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
const express_1 = require("express");
const getAllPokemons_1 = __importDefault(require("../components/getAllPokemons"));
const getPokemonsIdOrName_1 = __importDefault(require("../components/getPokemonsIdOrName"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield (0, getAllPokemons_1.default)();
        res.send(info);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get("/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const infoApi = yield (0, getPokemonsIdOrName_1.default)(undefined, name);
        res.send(infoApi);
    }
    catch (error) {
        return res.send(error.message);
    }
}));
exports.default = router;
