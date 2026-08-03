"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authModel = void 0;
const database_1 = __importDefault(require("../../config/database"));
class AuthModel {
    async findById(id) {
        return database_1.default.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                phone: true,
                password: true,
                role: true,
                picture_url: true,
                refreshToken: true,
                isBanned: true,
                isOnline: true,
                failedLoginAttempts: true,
                lockedUntil: true,
                otp: true,
                otp_expiration: true,
                otp_purpose: true,
                passwordChangedAt: true,
            },
        });
    }
    async findByEmail(email) {
        return database_1.default.user.findFirst({ where: { email } });
    }
    async findUserByIdentifier(identifier) {
        return database_1.default.user.findFirst({
            where: { OR: [{ email: identifier }, { phone: identifier }] },
        });
    }
    async createUser(data) {
        return database_1.default.user.create({ data });
    }
    async updateRefreshToken(userId, refreshToken) {
        return database_1.default.user.update({
            where: { id: userId },
            data: { refreshToken },
        });
    }
    async updateAfterLogin(userId, refreshToken) {
        return database_1.default.user.update({
            where: { id: userId },
            data: {
                failedLoginAttempts: 0,
                lockedUntil: null,
                isOnline: true,
                refreshToken,
            },
        });
    }
    async incrementFailedAttempts(userId) {
        const user = await database_1.default.user.findUnique({ where: { id: userId } });
        if (!user)
            return;
        const failedAttempts = user.failedLoginAttempts + 1;
        const updateData = { failedLoginAttempts: failedAttempts };
        if (failedAttempts >= 5) {
            updateData.lockedUntil = new Date(Date.now() + 30 * 60 * 1000);
        }
        return database_1.default.user.update({ where: { id: userId }, data: updateData });
    }
    async updateOtp(userId, otp, expiration, purpose) {
        return database_1.default.user.update({
            where: { id: userId },
            data: { otp, otp_expiration: expiration, otp_purpose: purpose },
        });
    }
    async clearOtp(userId) {
        return database_1.default.user.update({
            where: { id: userId },
            data: { otp: null, otp_expiration: null, otp_purpose: null },
        });
    }
    async updatePassword(userId, hashedPassword) {
        return database_1.default.user.update({
            where: { id: userId },
            data: { password: hashedPassword, passwordChangedAt: new Date() },
        });
    }
    async setOffline(userId) {
        return database_1.default.user.update({
            where: { id: userId },
            data: { refreshToken: null, isOnline: false },
        });
    }
    async updateUser(userId, data) {
        return database_1.default.user.update({
            where: { id: userId },
            data,
        });
    }
}
exports.authModel = new AuthModel();
//# sourceMappingURL=auth.model.js.map