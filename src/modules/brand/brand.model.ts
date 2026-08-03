import prisma from "../../config/database";

class BrandModel {
  async findBrandWithDocuments(brandId: string) {
    return prisma.brand.findUnique({
      where: { id: brandId as any },
      include: { documents: true },
    });
  }

  async findBrandById(brandId: string) {
    return prisma.brand.findUnique({ where: { id: brandId as any } });
  }

  async createBrand(data: {
    userId: string;
    name: string;
    logoUrl?: string;
    logoUrl_id?: string;
  }) {
    return await prisma.brand.create({ data });
  }

  async updateBrand(
    brandId: string,
    data: {
      name?: string;
      isActive?: boolean;
      logoUrl?: string | null;
      logoUrl_id?: string | null;
    },
  ) {
    return prisma.brand.update({
      where: { id: brandId as any },
      data,
    });
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
    isMain?: boolean;
    isActive?: boolean;
  }) {
    return await prisma.brandBranch.create({ data });
  }
}

export const brandModel = new BrandModel();
