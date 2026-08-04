"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.updateProfileSchema = zod_1.default.object({
    name: zod_1.default.string().min(1, "Name cannot be empty").optional(),
    email: zod_1.default.string().email("Invalid email format").optional(),
    phone: zod_1.default.string().min(8, "Phone must be at least 8 characters").optional(),
    profilePictureUrl: zod_1.default.string().url("Invalid URL").optional(),
}).refine((data) => Object.values(data).some((v) => v !== undefined), {
    message: "At least one field must be provided",
});
//# sourceMappingURL=user.validators.js.map