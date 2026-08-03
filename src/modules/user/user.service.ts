import { userModel } from "./user.model";
import AppError from "../../shared/errors/AppError";
import { StatusCodes } from "http-status-codes";


class UserService {
    async getCurrentUser(userId: string) {
        const user = await userModel.findProfileById(userId);
        if (!user) throw new AppError("User not found", StatusCodes.NOT_FOUND);
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role,
        }

    }


    async updateCurrentUser(userId: string, updates: { name?: string; email?: string; phone?: string; profilePictureUrl?: string }) {
        const user = await userModel.findProfileById(userId);
        if (!user) throw new AppError("User not found", StatusCodes.NOT_FOUND);

        const data: any = {};

        if (updates.name !== undefined) {
            data.username = updates.name;
        }

        if (updates.email !== undefined) {
            const exists = await userModel.findByEmail(updates.email);
            if (exists && exists.id !== userId) {
                throw new AppError("Email already in use", StatusCodes.CONFLICT);
            }
            data.email = updates.email;
        }

        if (updates.phone !== undefined) {
            const exists = await userModel.findByPhone(updates.phone);
            if (exists && exists.id !== userId) {
                throw new AppError("Phone already in use", StatusCodes.CONFLICT);
            }
            data.phone = updates.phone;
        }

        if (updates.profilePictureUrl !== undefined) {
            data.picture_url = updates.profilePictureUrl;
        }

        const updated = await userModel.updateProfile(userId, data);

        return { id: updated.id, name: updated.username };
    }

}

export const userService = new UserService();
