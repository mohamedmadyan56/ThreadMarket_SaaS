"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_model_1 = require("./user.model");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
class UserService {
    async getCurrentUser(userId) {
        const user = await user_model_1.userModel.findProfileById(userId);
        if (!user)
            throw new AppError_1.default("User not found", http_status_codes_1.StatusCodes.NOT_FOUND);
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role,
        };
    }
    async updateCurrentUser(userId, updates) {
        const user = await user_model_1.userModel.findProfileById(userId);
        if (!user)
            throw new AppError_1.default("User not found", http_status_codes_1.StatusCodes.NOT_FOUND);
        const data = {};
        if (updates.name !== undefined) {
            data.username = updates.name;
        }
        if (updates.email !== undefined) {
            const exists = await user_model_1.userModel.findByEmail(updates.email);
            if (exists && exists.id !== userId) {
                throw new AppError_1.default("Email already in use", http_status_codes_1.StatusCodes.CONFLICT);
            }
            data.email = updates.email;
        }
        if (updates.phone !== undefined) {
            const exists = await user_model_1.userModel.findByPhone(updates.phone);
            if (exists && exists.id !== userId) {
                throw new AppError_1.default("Phone already in use", http_status_codes_1.StatusCodes.CONFLICT);
            }
            data.phone = updates.phone;
        }
        if (updates.profilePictureUrl !== undefined) {
            data.picture_url = updates.profilePictureUrl;
        }
        const updated = await user_model_1.userModel.updateProfile(userId, data);
        return { id: updated.id, name: updated.username };
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map