import { BrandDocType } from "../../generated/prisma/browser";
declare class BrandService {
    createBrand(data: {
        userId: string;
        name: string;
        logoUrl?: string;
    }): Promise<{
        id: string;
        name: string;
        userId: string;
        verificationStatus: import("../../generated/prisma/enums").BrandVerificationTier;
        rating: import("@prisma/client-runtime-utils").Decimal;
        logoUrl: string | null;
        logoUrl_id: string | null;
        followersCount: number;
        viewedTimes: bigint;
        isPromoted: boolean;
        isActive: boolean;
        balance: import("@prisma/client-runtime-utils").Decimal;
        paymentDetails: import("@prisma/client/runtime/client").JsonValue | null;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getPublicBrandProfile(brandId: string): Promise<{
        id: string;
        name: string;
        verificationStatus: import("../../generated/prisma/enums").BrandVerificationTier;
        rating: number;
        logoUrl: string | null;
    }>;
    updateBrandProfile(userId: string, brandId: string, data: {
        name?: string;
        isActive?: boolean;
        logoFilePath?: string;
    }): Promise<{
        id: string;
        name: string;
        userId: string;
        verificationStatus: import("../../generated/prisma/enums").BrandVerificationTier;
        rating: import("@prisma/client-runtime-utils").Decimal;
        logoUrl: string | null;
        logoUrl_id: string | null;
        followersCount: number;
        viewedTimes: bigint;
        isPromoted: boolean;
        isActive: boolean;
        balance: import("@prisma/client-runtime-utils").Decimal;
        paymentDetails: import("@prisma/client/runtime/client").JsonValue | null;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getBrandVerificationStatus(brandId: string, userId: string, role: string): Promise<{
        verificationStatus: import("../../generated/prisma/enums").BrandVerificationTier;
        submittedDocuments: {
            docType: string;
            fileUrl: string;
            status: string;
            rejectionReason: any;
        }[];
        missingDocuments: ("trademark_certificate" | "business_registration" | "representative_id" | "proof_of_address" | "shop_photo" | "product_packaging" | "social_platform" | "website" | "invoice_sample")[];
    }>;
    getLocation(longitude: number, latitude: number): Promise<{
        latitude: any;
        longitude: any;
        placeId: any;
        formattedAddress: any;
        addressLine: any;
        city: any;
        state: any;
        country: any;
        postalCode: any;
        locationGranularity: any;
    }>;
    createBranchLocation(brandId: string, branchName: string, locationDetails: {
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
    }, isMain?: boolean, isActive?: boolean): Promise<any>;
    createBrandDocuments(brandId: string, data: {
        docType: BrandDocType;
        fileUrl: string;
        fileUrl_id: string;
    }[]): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        brandId: string;
        docType: string;
        fileUrl: string;
        reviewedBy: string | null;
        reviewedAt: Date | null;
        rejectionReason: import("../../generated/prisma/enums").BrandDocRejectionReason;
    }[]>;
    getBrandByCondition(where: any): Promise<{
        id: string;
        name: string;
        userId: string;
        verificationStatus: import("../../generated/prisma/enums").BrandVerificationTier;
        rating: import("@prisma/client-runtime-utils").Decimal;
        logoUrl: string | null;
        logoUrl_id: string | null;
        followersCount: number;
        viewedTimes: bigint;
        isPromoted: boolean;
        isActive: boolean;
        balance: import("@prisma/client-runtime-utils").Decimal;
        paymentDetails: import("@prisma/client/runtime/client").JsonValue | null;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
export declare const brandService: BrandService;
export {};
//# sourceMappingURL=brand.service.d.ts.map