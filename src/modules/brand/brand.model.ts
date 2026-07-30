import prisma from "../../config/database";


class BrandModel {
    async findBrandWithDocuments(brandId: string) {
        return prisma.brand.findUnique({
            where: { id: brandId as any },
            include: { documents: true }
        })
    }
}

export const brandModel = new BrandModel();
