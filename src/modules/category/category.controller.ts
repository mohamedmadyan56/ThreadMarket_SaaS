import { asyncHandler } from "../../shared/utils/asyncHandler";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { categoryService } from "./category.service";
import AppError from "../../shared/errors/AppError";
export const getCategories = asyncHandler(
  async (req: Request, res: Response) => {
    // todo => Discuss about category ownership and creation is for admin and for every brand
    const {
      search,
      limit = 10,
      page = 1,
    } = req.params as {
      search: string;
      limit: string;
      page: string;
    };
    const skip = (Number(page) - 1) * Number(limit);
    const filter = {
      search: search,
      skip: skip,
      take: Number(limit),
    };
    const categories = await categoryService.getCategories(filter);
    if (!categories || categories.data.length === 0) {
      throw new AppError("Categories not found", StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({
      success: true,
      message: "OK",
      data: {
        categories,
        total: categories.total,
        page: Number(page),
      },
    });
  },
);
