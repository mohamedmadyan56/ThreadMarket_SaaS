import { categoryModel } from "./category.model";
import { brandModel } from "../brand/brand.model";
import AppError from "../../shared/errors/AppError";
class CategoryService {
    async softDeleteCategory(brandId: string, categoryId: string, userId: string) {
        const brand = await brandModel.findBrandById(brandId);
        if (!brand) throw new AppError("Brand not found",404);

        if (brand.userId !== userId) {
            throw new AppError("You are not authorized to manage this brand", 403);
        }

        const category = await categoryModel.findCategoryById(categoryId);
        if (!category) throw new AppError("Category not found", 404);

        const activeProducts = await categoryModel.countActiveProductsInCategory(brandId, categoryId);
        if (activeProducts > 0) {
            throw new AppError(
                "Cannot delete category: active products depend on it",
                409,
            );
        }

        await categoryModel.softDeleteCategory(categoryId);

        return {};
    }
}

export const categoryService = new CategoryService();
