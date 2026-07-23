import { asyncHandler } from "../helpers/asyncHandler";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { UUID } from "node:crypto";
import Brand from "../classes/Brand.class";
import ApiResponse from "../classes/ApiResponse";
import ApiError from "../classes/ApiError";


export const brandVerificationStatus = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { brandId } = req.params;
        const brand = new Brand();
        
        const user = (req as any).user;
        if (!user?.id) {
            throw new ApiError("User not authenticated", StatusCodes.UNAUTHORIZED);
        }
        const result = await brand.getBrandVerificationStatus(
            brandId as UUID        ,
            user?.id,
            user?.role
        );
        
        return res
            .status(StatusCodes.OK)
            .json(new ApiResponse(true, "found", result));
    }
);