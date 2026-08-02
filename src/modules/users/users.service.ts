import AppError from "../../shared/errors/AppError";
import { usersModel } from "./users.model";

class UsersService {
    async getCurrentProfile(userId: string) {
        const user = await usersModel.findProfileById(userId);
        if (!user) throw new AppError("User not found", 404);

        return {
            id: user.id,
            name: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role,
        };
    }
}

export const usersService = new UsersService();
