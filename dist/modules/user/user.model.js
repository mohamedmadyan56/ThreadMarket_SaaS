"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const database_1 = __importDefault(require("../../config/database"));
class UserModel {
    async findProfileById(id) {
        return database_1.default.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                phone: true,
                role: true,
            }
        });
    }
    async findByEmail(email) {
        return database_1.default.user.findFirst({ where: { email } });
    }
    async findByPhone(phone) {
        return database_1.default.user.findFirst({ where: { phone } });
    }
    async updateProfile(userId, data) {
        return database_1.default.user.update({
            where: { id: userId },
            data,
            select: {
                id: true,
                username: true,
                email: true,
                phone: true,
                role: true,
            }
        });
    }
}
exports.userModel = new UserModel();
//# sourceMappingURL=user.model.js.map