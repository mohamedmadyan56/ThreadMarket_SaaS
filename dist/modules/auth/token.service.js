"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../config/env");
class TokenService {
    generateAccessToken(payload) {
        return jsonwebtoken_1.default.sign(payload, env_1.ENV.ACCESS_TOKEN_SECRET, {
            expiresIn: Number(env_1.ENV.ACCESS_TOKEN_EXPIRY),
        });
    }
    generateRefreshToken(payload) {
        return jsonwebtoken_1.default.sign(payload, env_1.ENV.REFRESH_TOKEN_SECRET, {
            expiresIn: Number(env_1.ENV.REFRESH_TOKEN_EXPIRY),
        });
    }
    verifyAccessToken(token) {
        return jsonwebtoken_1.default.verify(token, env_1.ENV.ACCESS_TOKEN_SECRET);
    }
    verifyRefreshToken(token) {
        return jsonwebtoken_1.default.verify(token, env_1.ENV.REFRESH_TOKEN_SECRET);
    }
}
exports.tokenService = new TokenService();
//# sourceMappingURL=token.service.js.map