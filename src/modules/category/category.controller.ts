import { Request, Response } from "express";
import { categoryService } from "./category.service";
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../shared/utils/asyncHandler";
import AppError from "../../shared/errors/AppError";

export const createCategory = asyncHandler(async (req: Request, res: Response) => {
    const { brandId } = req.params as { brandId: string };
    const { name, imageUrl } = req.body as { name: string; imageUrl?: string };
    const user = (req as any).user;

    if (!user?.id) {
        throw new AppError("Not authenticated", StatusCodes.UNAUTHORIZED);
    }

    const result = await categoryService.createCategory(brandId, user.id, user.role, name, imageUrl);

    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Category created successfully",
        data: result,
    });
});