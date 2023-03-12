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
exports.deleteUser = exports.deletePokemon = void 0;
const db_1 = require("../db");
function deletePokemon(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            db_1.Pokemon.destroy({ where: { id: id } });
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.deletePokemon = deletePokemon;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            db_1.User.destroy({ where: { id: id } });
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.deleteUser = deleteUser;
