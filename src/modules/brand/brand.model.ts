import prisma from "../../config/database";

class BrandModel {
  async findBrandWithDocuments(brandId: string) {
    return prisma.brand.findUnique({
      where: { id: brandId as any },
      include: { documents: true },
    });
  }

  // Create Brand
  async createBrand(data: { userId: string; name: string; logoUrl?: string }) {
    return await prisma.brand.create({ data });
  }

  async getUserBrand(userId: string) {
    return await prisma.brand.findUnique({
      select: {
        id: true,
        userId: true,
        name: true,
        verificationStatus: true,
      },
      where: {
        userId: userId,
      },
    });
  }

  async getBrandByCondition(where: any) {
    return await prisma.brand.findFirst({ where });
  }

  async CreateBrandLocation(data: {
    brandId: string;
    name: string;
    latitude: number;
    longitude: number;
    placeId: string;
    formattedAddress: string;
    addressLine: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    locationGranularity: string;
  }) {
    return await prisma.brandBranch.create({ data });
  }
}

export const brandModel = new BrandModel();
