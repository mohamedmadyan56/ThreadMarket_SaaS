"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = __importDefault(require("zod"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
const validate = (schema) => {
    return (req, res, next) => {
        try {
            const data = { ...req.body, ...req.query, ...req.params };
            const parsedData = schema.parse(data);
            if (parsedData)
                return next();
        }
        catch (error) {
            if (error && error instanceof zod_1.default.ZodError) {
                return next(new AppError_1.default(error.issues[0].message, http_status_codes_1.StatusCodes.BAD_REQUEST));
            }
        }
    };
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map