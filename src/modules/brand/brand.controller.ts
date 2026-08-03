import { Request, Response } from "express";
import { brandService } from "./brand.service";
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../shared/utils/asyncHandler";
import AppError from "../../shared/errors/AppError";
import { authModel } from "../auth/auth.model";

export const createBrand = asyncHandler(async (req: any, res: Response) => {
  const {
    name,
    location,
    branchName,
  }: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
    };
    branchName: string;
  } = req.body;
  const user = (req as any).user;
  const filePath = req.file?.path;

  const brand = await brandService.createBrand({
    userId: user.id,
    name,
    logoUrl: filePath,
  });

  // Update the brand's role to "brand" after creating the brand
  await authModel.updateUser(user.id, { role: "brand" });
  const locationDetails = await brandService.getLocation(
    location.longitude,
    location.latitude,
  );

  const branchLocation = await brandService.createBranchLocation(
    brand.id,
    branchName,
    locationDetails,
    true, // isMain
  );

  return res
    .status(StatusCodes.CREATED)
    .json({ success: true, message: "OK", data: { brand, branchLocation } });
});

export const updateBrandProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const user = (req as any).user;
    const { brandId } = req.params as { brandId: string };
    const { name, isActive } = req.body as {
      name?: string;
      isActive?: boolean;
      isPromoted?: boolean;
    };

    if (!user?.id) {
      throw new AppError("Not authenticated", StatusCodes.UNAUTHORIZED);
    }

    const filePath = req.file?.path;
    const brand = await brandService.updateBrandProfile(user.id, brandId, {
      name,
      isActive,
      logoFilePath: filePath,
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Brand profile updated successfully",
      data: brand,
    });
  },
);

export const brandVerificationStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const { brandId } = req.params as { brandId: string };
    const user = (req as any).user;

    if (!user?.id) {
      throw new AppError("Not authenticated", 401);
    }

    const result = await brandService.getBrandVerificationStatus(
      brandId,
      user.id,
      user.role,
    );

    return res.status(200).json({ success: true, message: "OK", data: result });
  },
);
