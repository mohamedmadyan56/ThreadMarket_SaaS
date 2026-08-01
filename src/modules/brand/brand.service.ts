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

    async softDeleteCategory(brandId: string, categoryId: string, userId: string) {
        const brand = await brandModel.findBrandById(brandId);
        if (!brand) throw new AppError("Brand not found",404);

        if (brand.userId !== userId) {
            throw new AppError("You are not authorized to manage this brand", 403);
        }

        const category = await brandModel.findCategoryById(categoryId);
        if (!category) throw new AppError("Category not found", 404);

        const activeProducts = await brandModel.countActiveProductsInCategory(brandId, categoryId);
        if (activeProducts > 0) {
            throw new AppError(
                "Cannot delete category: active products depend on it",
                409,
            );
        }

        await brandModel.softDeleteCategory(categoryId);

        return {};
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
}

export const brandService = new BrandService();