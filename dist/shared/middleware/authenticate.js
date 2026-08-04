"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../config/env");
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = __importDefault(require("../errors/AppError"));
const authenticate = (0, asyncHandler_1.asyncHandler)(async (req, _res, next) => {
    const token = req.headers.authorization?.startsWith("Bearer ") &&
        req.headers.authorization.split(" ")[1];
    if (!token)
        throw new AppError_1.default("No token provided", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_1.ENV.ACCESS_TOKEN_SECRET);
        console.log("Decoded Token:", decoded); // Debugging line to check the decoded token
        console.log(decoded);
        // todo => if the user has removed but the user know the token he will always have access to some controllers
        req.user = decoded;
        next();
    }
    catch {
        throw new AppError_1.default("Invalid or expired token", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    }
});
exports.default = authenticate;
//# sourceMappingURL=authenticate.js.map