import prisma from "../utils/connectDB";
import { nanoid } from "nanoid";
class Otp {
  otp: string = "";
  otp_expiration_date: Date;
  otp_expiration_minutes: number;
  constructor(otp_expiration_minutes: number) {
    this.otp_expiration_date = new Date(
      Date.now() + otp_expiration_minutes * 60 * 1000,
    );
    this.otp_expiration_minutes = otp_expiration_minutes;
  }

  generateOtp() {
    const generatedOtp = nanoid(5);
    return (this.otp = generatedOtp);
  }
}

export default Otp;
