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


}

export const brandModel = new BrandModel();
