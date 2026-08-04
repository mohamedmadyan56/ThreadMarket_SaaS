"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = require("../../config/env");
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: env_1.ENV.EMAIL,
        pass: env_1.ENV.EMAIL_PASSWORD,
    },
});
const sendEmail = async (to, subject, html, text) => {
    try {
        await transporter.sendMail({ from: env_1.ENV.EMAIL, to, subject, text, html });
    }
    catch (error) {
        console.log(error);
    }
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map