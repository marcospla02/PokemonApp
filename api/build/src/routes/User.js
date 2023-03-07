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
const getUsers_1 = require("../controllers/getUsers");
const User_1 = require("../controllers/User");
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultUser = yield (0, getUsers_1.getUsers)();
        if (!resultUser)
            return res.status(404).send("Not users yet");
        res.send(resultUser);
    }
    catch (error) {
        res.send(error.message);
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resultUser = yield (0, getUsers_1.getUserById)(id);
        if (!resultUser)
            return res.status(404).send("The user does not exist");
        res.send(resultUser);
    }
    catch (error) {
        res.send(error.message);
    }
}));
router.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { favorites } = req.body;
        const id = req.params.id;
        const resultUpdate = yield (0, User_1.updateUser)(favorites, id);
        res.send(resultUpdate);
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.default = router;
