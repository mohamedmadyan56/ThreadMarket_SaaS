import prisma from "../../config/database";

class CategoryModel {
    async findByNameWithinBrand(brandId: string, name: string) {
        return prisma.category.findFirst({
            where: { brandId, name },
            select: { id: true },
        });
    }

    async create(brandId: string, name: string, imageUrl?: string) {
        return prisma.category.create({
            data: {
                brandId,
                name,
                media: {},
                ...(imageUrl ? { imageUrl } : {}),
            },
            select: { id: true },
        });
    }
}

export const categoryModel = new CategoryModel();
