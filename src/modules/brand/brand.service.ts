import { BrandDocType } from "../../generated/prisma/browser";
import { brandModel } from "./brand.model";
import AppError from "../../shared/errors/AppError";
import { StatusCodes } from "http-status-codes";

class BrandService {
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
}

export const brandService = new BrandService();