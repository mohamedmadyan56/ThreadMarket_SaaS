import prisma from "../../config/database";


class BrandModel {
    async findBrandWithDocuments(brandId: string) {
        return prisma.brand.findUnique({
            where: { id: brandId as any },
            include: { documents: true }
        })
    }

    async findApprovedBrandById(brandId: string) {
        return prisma.brand.findFirst({
            where: {
                id: brandId as any,
                isActive: true,
                verificationStatus: { notIn: ["pending", "suspended"] },
            },
        });
    }

    async findBrandById(brandId: string) {
        return prisma.brand.findUnique({
            where: { id: brandId as any },
        });
    }

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

export const brandModel = new BrandModel();
