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


  async findUserByIdentifier(identifier:string){
    return prisma.user.findFirst({
      where:{OR:[{email:identifier},{phone:identifier}]}
    })
  }
 async createUser(data: {
  username: string;
  email: string;
  password: string;
  picture_url?: string;
  picture_url_id?: string;
  isVerified?: boolean;
}) {
  return prisma.user.create({
    data,
  });
}
async updatrAfterLogin(userId:string,refreshToken:string){
  return prisma.user.update({
    where:{id:userId},
    data:{failedLoginAttempts:0,lockedUntil: null,isOnline:true,refreshToken}
  })
}

}