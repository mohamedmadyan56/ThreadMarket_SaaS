import prisma from "../../config/database";
import type { Role } from "../../generated/prisma/enums";

export interface UserProfile {
    id: string;
    username: string;
    email: string;
    phone: string | null;
    role: Role;
}

class UserModel {
    async findProfileById(id: string): Promise<UserProfile | null> {
        return prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                phone: true,
                role: true,
            }
        })
    }

    async findByEmail(email: string) {
        return prisma.user.findFirst({ where: { email } })
    }
    async findByPhone(phone: string) {
        return prisma.user.findFirst({ where: { phone } });
    }

    async updateProfile(userId: string, data: any): Promise<UserProfile> {
        return prisma.user.update({
            where: { id: userId },
            data,
            select: {
                id: true,
                username: true,
                email: true,
                phone: true,
                role: true,
            }
        })
    }

}


export const userModel = new UserModel();
