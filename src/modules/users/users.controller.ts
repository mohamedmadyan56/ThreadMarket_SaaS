import { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler";
import { usersService } from "./users.service";

export const getCurrentProfile = asyncHandler(async (req: Request, res: Response) => {
    const userId = (req as any).user.id;

    const profile = await usersService.getCurrentProfile(userId);

    return res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        data: profile,
    });
});
