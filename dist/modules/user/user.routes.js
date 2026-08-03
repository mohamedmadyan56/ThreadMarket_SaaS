"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = __importDefault(require("../../shared/middleware/authenticate"));
const validate_1 = require("../../shared/middleware/validate");
const user_controller_1 = require("./user.controller");
const user_validators_1 = require("./user.validators");
const router = (0, express_1.Router)();
router.get("/me", authenticate_1.default, user_controller_1.getCurrentUser);
router.patch("/me", authenticate_1.default, (0, validate_1.validate)(user_validators_1.updateProfileSchema), user_controller_1.updateCurrentUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map