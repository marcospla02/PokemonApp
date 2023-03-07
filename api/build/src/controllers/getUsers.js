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
exports.getUserById = exports.getUsers = void 0;
const db_1 = require("../db");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const get_user = yield db_1.User.findAll();
        if (!get_user)
            throw new Error("Users not found");
        return get_user;
    }
    catch (error) {
        return error.message;
    }
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield db_1.User.findOne({ where: { id: id } });
        return findUser;
    }
    catch (error) {
        return error.message;
    }
});
exports.getUserById = getUserById;
