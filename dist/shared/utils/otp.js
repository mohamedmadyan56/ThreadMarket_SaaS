"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
class Otp {
    otp = "";
    otp_expiration_date;
    otp_expiration_minutes;
    constructor(otp_expiration_minutes) {
        this.otp_expiration_date = new Date(Date.now() + otp_expiration_minutes * 60 * 1000);
        this.otp_expiration_minutes = otp_expiration_minutes;
    }
    generateOtp() {
        const generatedOtp = (0, nanoid_1.customAlphabet)("0123456789", 5);
        return (this.otp = generatedOtp());
    }
}
exports.default = Otp;
//# sourceMappingURL=otp.js.map