import { CategoryModel } from "../../generated/prisma/models";
import AppError from "../../shared/errors/AppError";
import { StatusCodes } from "http-status-codes";
import { brandModel } from "../brand/brand.model";
import { categoryModel } from "./category.model";
class CategoryService {

    async createCategory(brandId: string, userId: string, role: string, name: string, imageUrl?: string) {
        const brand = await brandModel.findBrandWithDocuments(brandId);
        if (!brand) {
            throw new AppError("Brand not found", StatusCodes.NOT_FOUND);
        }
        if (brand.userId !== userId && role !== "admin") {
            throw new AppError("You are not authorized to create categories for this brand", StatusCodes.FORBIDDEN);
        }
        const existing = await categoryModel.findByNameWithinBrand(brandId, name);
        if (existing) {
            throw new AppError("Category name already exists in this brand", StatusCodes.CONFLICT);
        }

        const category = await categoryModel.create(brandId, name, imageUrl);
        return { id: category.id };
    }
}
export const categoryService = new CategoryService();
