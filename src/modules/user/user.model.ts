import prisma from "../../config/database";


class UserModel {
    async findProfileById(id: string) {
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
}


export const userModel = new UserModel();
