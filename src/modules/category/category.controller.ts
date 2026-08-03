import { Request, Response } from "express";
import { categoryService } from "./category.service";
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../shared/utils/asyncHandler";
import AppError from "../../shared/errors/AppError";

export const deleteBrandCategory = asyncHandler(async (req: Request, res: Response) => {
    const { brandId, catId } = req.params as { brandId: string; catId: string };
    const userId = (req as any).user.id;

    const result = await categoryService.softDeleteCategory(brandId, catId, userId);

    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Category deleted successfully",
        data: result,
    });
});
