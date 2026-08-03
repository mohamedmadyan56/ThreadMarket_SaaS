declare class Otp {
    otp: string;
    otp_expiration_date: Date;
    otp_expiration_minutes: number;
    constructor(otp_expiration_minutes: number);
    generateOtp(): string;
}
export default Otp;
//# sourceMappingURL=otp.d.ts.map