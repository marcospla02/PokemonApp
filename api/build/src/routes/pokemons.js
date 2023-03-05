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
const express_1 = require("express");
const controllers_1 = require("../controllers");
// import getPokemonsIdOrName from "../controllers/controllersApi/getPokemonsIdOrName";
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield (0, controllers_1.getAllPokemons)();
        // const info = await getPokemonsDb();
        res.send(info);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get("/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const infoDb = yield (0, controllers_1.findNameInDb)(name.toLocaleLowerCase());
        if (!infoDb)
            return res.status(404).send(`couldn't find "${name}"`);
        res.send(infoDb);
    }
    catch (error) {
        return res.send(error.message);
    }
}));
exports.default = router;
