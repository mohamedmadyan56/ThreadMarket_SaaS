import { Request, Response } from "express";
import { brandService } from "./brand.service";
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../shared/utils/asyncHandler";
import AppError from "../../shared/errors/AppError";

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
  const userId = req.user?.id;
  const filePath = req.file?.path;
  // Create Brand With All Details
  const brand = await brandService.createBrand({
    userId,
    name,
    logoUrl: filePath,
  });
  // Use Get Location Service to get the location details from the latitude and longitude
  const locationDetails = await brandService.getLocation(
    location.longitude,
    location.latitude,
  );
  // Use the brandId to create the main branch location
  const branchLocation = await brandService.createBranchLocation(
    brand.id,
    branchName,
    locationDetails,
  );

  return res
    .status(StatusCodes.CREATED)
    .json({ success: true, message: "OK", data: { brand, branchLocation } });
});
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
