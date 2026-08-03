"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
const database_1 = __importDefault(require("../../config/database"));
const authorize = (...roles) => {
    return async (req, res, next) => {
        // todo => Search what is the practical way of signing the token will some info or just with user id
        const userId = req.user?.id;
        const user = await database_1.default.user.findUnique({ where: { id: userId } });
        if (!roles.includes(user?.role)) {
            return next(new AppError_1.default("You are not Authorized to Access This Route", http_status_codes_1.StatusCodes.FORBIDDEN));
        }
        return next();
    };
};
exports.authorize = authorize;
//# sourceMappingURL=authorize.js.map