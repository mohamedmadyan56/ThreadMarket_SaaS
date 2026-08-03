import  prisma  from "../../config/database";

class CategoryModel {

async findCategoryById(categoryId: string) {
        return prisma.category.findUnique({
            where: { id: categoryId as any },
        });
    }

    async countActiveProductsInCategory(brandId: string, categoryId: string) {
        return prisma.product.count({
            where: {
                brandId: brandId as any,
                categoryId: categoryId as any,
                available: true,
            },
        });
    }

    async softDeleteCategory(categoryId: string) {
        return prisma.category.update({
            where: { id: categoryId as any },
            data: { ishidden: true },
        });
    }
}

export const categoryModel = new CategoryModel();