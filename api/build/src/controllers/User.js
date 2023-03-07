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
exports.updateUser = exports.createUser = void 0;
const db_1 = require("../db");
const createUser = (props) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, favorites, email, id } = props;
        const newUser = yield db_1.User.create({
            id: id,
            name: name,
            favorites: favorites,
            email: email,
        });
        newUser.save();
        return newUser;
    }
    catch (error) {
        return error.message;
    }
});
exports.createUser = createUser;
// UPDATE USER.
const updateUser = (favorites, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("soy favorites:", favorites);
        const update_user = yield db_1.User.update({ favorites: favorites }, { where: { id: id } });
        if (update_user[0] === 0)
            return "Error in update";
        return { message: "successfully updated" };
    }
    catch (error) {
        return error.message;
    }
});
exports.updateUser = updateUser;
