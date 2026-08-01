import { Request, Response } from "express";
import { brandService } from "./brand.service";
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../shared/utils/asyncHandler";
import AppError from "../../shared/errors/AppError";

export const getPublicBrandProfile = asyncHandler(async (req: Request, res: Response) => {
    const { brandId } = req.params as { brandId: string };

    const result = await brandService.getPublicBrandProfile(brandId);

    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Brand profile retrieved successfully",
        data: result,
    });
});

export const brandVerificationStatus = asyncHandler(async (req: Request, res: Response) => {
    const { brandId } = req.params as { brandId: string };
    const user = (req as any).user;

    if (!user?.id) {
        throw new AppError("Not authenticated", 401);
    }

    const result = await brandService.getBrandVerificationStatus(brandId, user.id, user.role);

    return res.status(200).json({ success: true, message: "OK", data: result });
});