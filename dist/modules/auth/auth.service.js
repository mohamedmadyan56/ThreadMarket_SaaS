"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../config/env");
const auth_model_1 = require("./auth.model");
const token_service_1 = require("./token.service");
const email_1 = require("../../shared/utils/email");
const emailTemplates_1 = require("../../shared/utils/emailTemplates");
const cloudinary_1 = require("../../shared/utils/cloudinary");
const upload_1 = require("../../shared/utils/upload");
const otp_1 = __importDefault(require("../../shared/utils/otp"));
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
class AuthService {
    async register(username, email, password, filePath) {
        const existingUser = await auth_model_1.authModel.findByEmail(email);
        if (existingUser) {
            throw new AppError_1.default(`User with email ${email} already exists`, 409);
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(password, salt);
        let picture;
        if (filePath) {
            try {
                const result = await (0, cloudinary_1.uploadToCloudinary)(filePath, "users");
                picture = { url: result.secure_url, id: result.public_id };
            }
            finally {
                (0, upload_1.removeFileFromDisk)(filePath);
            }
        }
        const otpUtil = new otp_1.default(5);
        const generatedOtp = otpUtil.generateOtp();
        const otpSalt = await bcryptjs_1.default.genSalt(10);
        const hashedOtp = await bcryptjs_1.default.hash(generatedOtp, otpSalt);
        try {
            await (0, email_1.sendEmail)(email, "Sign up Verification", (0, emailTemplates_1.otpEmailTemplate)({ name: username, otp: generatedOtp, expiresInMinutes: otpUtil.otp_expiration_minutes, appName: "Fashion Connect", supportEmail: "example@gmail.com" }));
        }
        catch (error) {
            if (picture?.id) {
                const { deleteFromCloudinary } = await Promise.resolve().then(() => __importStar(require("../../shared/utils/cloudinary")));
                await deleteFromCloudinary(picture.id);
            }
            throw error;
        }
        const token = jsonwebtoken_1.default.sign({ purpose: "signup-pending", username, email, password: hashedPassword, picture, otpHash: hashedOtp }, env_1.ENV.ACCESS_TOKEN_SECRET, { expiresIn: otpUtil.otp_expiration_minutes * 60 * 1000 });
        return { Token: token, expiration: otpUtil.otp_expiration_minutes };
    }
    async verifyRegisterOtp(token, otp) {
        const payload = jsonwebtoken_1.default.verify(token, env_1.ENV.ACCESS_TOKEN_SECRET);
        if (payload?.purpose !== "signup-pending")
            throw new AppError_1.default("Invalid Registration Session", 400);
        const otpMatches = await bcryptjs_1.default.compare(otp, payload.otpHash);
        if (!otpMatches)
            throw new AppError_1.default("OTP does not match", 400);
        const existingUser = await auth_model_1.authModel.findByEmail(payload.email);
        if (existingUser) {
            if (payload.picture?.id) {
                const { deleteFromCloudinary } = await Promise.resolve().then(() => __importStar(require("../../shared/utils/cloudinary")));
                await deleteFromCloudinary(payload.picture.id);
            }
            throw new AppError_1.default("Email already exists", 409);
        }
        await auth_model_1.authModel.createUser({
            username: payload.username, email: payload.email,
            password: payload.password, picture_url: payload.picture?.url,
            picture_url_id: payload.picture?.id, isVerified: true
        });
    }
    async login(identifier, password) {
        const user = await auth_model_1.authModel.findUserByIdentifier(identifier);
        if (!user)
            throw new AppError_1.default("Invalid credentials", 401);
        if (user.lockedUntil && user.lockedUntil > new Date())
            throw new AppError_1.default("Account is locked", 403);
        if (user.isBanned)
            throw new AppError_1.default("Account is banned", 403);
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            await auth_model_1.authModel.incrementFailedAttempts(user.id);
            throw new AppError_1.default("Invalid credentials", 401);
        }
        const accessToken = token_service_1.tokenService.generateAccessToken({ id: user.id });
        const refreshToken = token_service_1.tokenService.generateRefreshToken({ id: user.id });
        await auth_model_1.authModel.updateAfterLogin(user.id, refreshToken);
        return {
            accessToken, refreshToken,
            accessTokenExpiration: Number(env_1.ENV.ACCESS_TOKEN_EXPIRY),
            refreshTokenExpiration: Number(env_1.ENV.REFRESH_TOKEN_EXPIRY),
            user: { id: user.id, username: user.username, phone: user.phone, email: user.email, role: user.role, picture_url: user.picture_url },
        };
    }
    async logout(refreshToken, accessToken) {
        const token = accessToken || refreshToken;
        if (!token)
            throw new AppError_1.default("No token", 401);
        try {
            const payload = jsonwebtoken_1.default.verify(token, env_1.ENV.ACCESS_TOKEN_SECRET);
            await auth_model_1.authModel.setOffline(payload.id);
        }
        catch {
            throw new AppError_1.default("Invalid token", 401);
        }
    }
    async sendOtp(email, purpose) {
        if (purpose !== "resetpassword" && purpose !== "signup")
            throw new AppError_1.default("Invalid purpose", 400);
        const user = await auth_model_1.authModel.findByEmail(email);
        if (!user)
            throw new AppError_1.default("User not found", 404);
        const otpUtil = new otp_1.default(5);
        const generatedOtp = otpUtil.generateOtp();
        await (0, email_1.sendEmail)(email, "OTP Verification", (0, emailTemplates_1.otpEmailTemplate)({ name: user.username, otp: generatedOtp, expiresInMinutes: otpUtil.otp_expiration_minutes, appName: "Fashion Connect", supportEmail: "example@gmail.com" }));
        const token = jsonwebtoken_1.default.sign({ id: user.id, purpose: "reset-password" }, env_1.ENV.ACCESS_TOKEN_SECRET, { expiresIn: otpUtil.otp_expiration_minutes * 60 * 1000 });
        await auth_model_1.authModel.updateOtp(user.id, generatedOtp, otpUtil.otp_expiration_date, purpose);
        return { Token: token, expiration: otpUtil.otp_expiration_minutes };
    }
    async verifyOtp(token, otp) {
        const payload = jsonwebtoken_1.default.verify(token, env_1.ENV.ACCESS_TOKEN_SECRET);
        if (payload?.purpose !== "reset-password")
            throw new AppError_1.default("Invalid session", 400);
        const user = await auth_model_1.authModel.findById(payload.id);
        if (!user)
            throw new AppError_1.default("User not found", 404);
        if (new Date() > user.otp_expiration)
            throw new AppError_1.default("OTP expired", 400);
        if (user.otp !== otp)
            throw new AppError_1.default("Invalid OTP", 400);
        await auth_model_1.authModel.clearOtp(user.id);
        const verifyToken = jsonwebtoken_1.default.sign({ id: user.id, purpose: "verify-otp" }, env_1.ENV.ACCESS_TOKEN_SECRET, { expiresIn: 5 * 60 });
        return { Token: verifyToken, expiration: 5 };
    }
    async resetPassword(token, newPassword) {
        const payload = jsonwebtoken_1.default.verify(token, env_1.ENV.ACCESS_TOKEN_SECRET);
        if (payload?.purpose !== "verify-otp")
            throw new AppError_1.default("Invalid session", 400);
        const user = await auth_model_1.authModel.findById(payload.id);
        if (!user)
            throw new AppError_1.default("User not found", 404);
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, salt);
        await auth_model_1.authModel.updatePassword(user.id, hashedPassword);
    }
    async refreshAccessToken(incomingRefreshToken) {
        const payload = token_service_1.tokenService.verifyRefreshToken(incomingRefreshToken);
        const user = await auth_model_1.authModel.findById(payload.id);
        if (!user)
            throw new AppError_1.default("User not found", 404);
        if (user.refreshToken !== incomingRefreshToken)
            throw new AppError_1.default("Refresh token revoked", 401);
        if (user.isBanned)
            throw new AppError_1.default("Account banned", 403);
        if (user.lockedUntil && user.lockedUntil > new Date())
            throw new AppError_1.default("Account locked", 403);
        const newAccessToken = token_service_1.tokenService.generateAccessToken({ id: user.id });
        const newRefreshToken = token_service_1.tokenService.generateRefreshToken({ id: user.id });
        await auth_model_1.authModel.updateRefreshToken(user.id, newRefreshToken);
        return {
            accessToken: newAccessToken, refreshToken: newRefreshToken,
            accessTokenExpiration: Number(env_1.ENV.ACCESS_TOKEN_EXPIRY),
            refreshTokenExpiration: Number(env_1.ENV.REFRESH_TOKEN_EXPIRY),
        };
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=auth.service.js.map