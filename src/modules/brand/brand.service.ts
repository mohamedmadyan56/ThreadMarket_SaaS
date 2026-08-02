import { BrandDocType } from "../../generated/prisma/browser";
import { brandModel } from "./brand.model";
import AppError from "../../shared/errors/AppError";


class BrandService {
    async getPublicBrandProfile(brandId: string) {
        const brand = await brandModel.findApprovedBrandById(brandId);
        if (!brand) throw new AppError("Brand not found", 404);

        return {
            id: brand.id,
            name: brand.name,
            verificationStatus: brand.verificationStatus,
            rating: Number(brand.rating),
            logoUrl: brand.logoUrl,
        };
    }

    async getBrandVerificationStatus(brandId: string, userId: string, role: string) {
        const brand = await brandModel.findBrandWithDocuments(brandId);
        if (!brand) throw new AppError("Brand not found", 404);

        if (brand.userId !== userId && role !== "admin") {
            throw new AppError("Unauthorized", 403);
        }

        const allTypes = Object.values(BrandDocType);
        const submitted = new Set(brand.documents.map(d => d.docType));
        const missing = allTypes.filter(t => !submitted.has(t));

        return {
            verificationStatus: brand.verificationStatus,
            submittedDocuments: brand.documents.map(d => ({
                docType: d.docType, fileUrl: d.fileUrl,
                status: d.status, rejectionReason: (d as any).rejectionReason ?? null,
            })),
            missingDocuments: missing,
        };
    }

    // Perpare data for brand creation
    const brandData = {
      userId: data.userId,
      name: data.name,
      logoUrl,
      logoUrl_id,
    };
    // Create brand
    const brand = await brandModel.createBrand(
      brandData as {
        userId: string;
        name: string;
        logoUrl?: string;
        logoUrl_id?: string;
      },
    );

    if (!brand)
      throw new AppError(
        "Brand Creation Failed",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );

    return brand;
  }
  async getBrandVerificationStatus(
    brandId: string,
    userId: string,
    role: string,
  ) {
    const brand = await brandModel.findBrandWithDocuments(brandId);
    if (!brand) throw new AppError("Brand not found", 404);

    if (brand.userId !== userId && role !== "admin") {
      throw new AppError("Unauthorized", 403);
    }

    const allTypes = Object.values(BrandDocType);
    const submitted = new Set(brand.documents.map((d) => d.docType));
    const missing = allTypes.filter((t) => !submitted.has(t));

    return {
      verificationStatus: brand.verificationStatus,
      submittedDocuments: brand.documents.map((d) => ({
        docType: d.docType,
        fileUrl: d.fileUrl,
        status: d.status,
        rejectionReason: (d as any).rejectionReason ?? null,
      })),
      missingDocuments: missing,
    };
  }

  // To-Do => Customize Get Location Service to get the all location details that are missed
  async getLocation(longitude: number, latitude: number) {
    // Implementation for getting location details
    try {
      const response = await axios.get(
        `https://geocode.googleapis.com/v4/geocode/location?location.latitude=${latitude}&location.longitude=${longitude}&key=${ENV.Google_Maps_Key}`,
      );
      return {
        latitude: response.data.results[0].location.latitude,
        longitude: response.data.results[0].location.longitude,
        placeId: response.data.results[0].placeId,
        formattedAddress: response.data.results[0].formattedAddress,
        addressLine: response.data.results[0].addressLine,
        city: response.data.results[0].city,
        state: response.data.results[0].state,
        country: response.data.results[0].country,
        postalCode: response.data.results[0].postalCode,
        locationGranularity: response.data.results[0].granularity,
      };
    } catch (error) {
      console.log(error);
      throw new AppError(
        "Failed to get location details",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createBranchLocation(
    brandId: string,
    branchName: string,
    locationDetails: {
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
    },
  ) {
    const branchLocation = await brandModel.CreateBrandLocation({
      brandId,
      name: branchName,
      ...locationDetails,
    });
    if (!branchLocation)
      throw new AppError(
        "Failed to create branch location",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    return branchLocation;
  }
}

export const brandService = new BrandService();
