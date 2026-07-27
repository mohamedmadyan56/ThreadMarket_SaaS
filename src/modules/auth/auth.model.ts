import prisma from "../../config/database";


class AuthModel {
  async findById(id:string){
    return prisma.user.findUnique({
      where:{id},
      select:{
         id: true, username: true, email: true,
        phone: true, password: true, role: true,
        picture_url: true, refreshToken: true,
        isBanned: true, isOnline: true,
        failedLoginAttempts: true, lockedUntil: true,
        otp: true, otp_expiration: true,
        otp_purpose: true, passwordChangedAt: true,
      }
    })
  }
  async findByEmail(email:string){
    return prisma.user.findFirst({where:{email}})
  }
}