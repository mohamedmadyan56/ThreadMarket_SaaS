"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../../shared/middleware/validate");
const authenticate_1 = __importDefault(require("../../shared/middleware/authenticate"));
const upload_1 = require("../../shared/utils/upload");
const auth_controller_1 = require("./auth.controller");
const auth_validators_1 = require("./auth.validators");
const router = (0, express_1.Router)();
router.post("/login", (0, validate_1.validate)(auth_validators_1.loginSchema), auth_controller_1.login);
router.post("/register", upload_1.upload.single("picture"), (0, validate_1.validate)(auth_validators_1.registerSchema), auth_controller_1.register);
router.post("/register-verify-otp", (0, validate_1.validate)(auth_validators_1.otpSchema), auth_controller_1.verifyRegisterOtp);
router.post("/forget-password", (0, validate_1.validate)(auth_validators_1.forgetPasswordSchema), auth_controller_1.sendOtp);
router.post("/verify-otp", (0, validate_1.validate)(auth_validators_1.otpSchema), auth_controller_1.verifyOtp);
router.patch("/reset-password", (0, validate_1.validate)(auth_validators_1.resetPasswordSchema), auth_controller_1.resetPassword);
router.post("/logout", authenticate_1.default, auth_controller_1.logout);
router.post("/refresh-accessToken", auth_controller_1.refreshAccessToken);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map