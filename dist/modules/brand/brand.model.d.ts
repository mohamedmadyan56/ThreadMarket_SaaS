import { BrandDocType } from "../../generated/prisma/browser";
declare class BrandModel {
    findBrandWithDocuments(brandId: string): Promise<({
        documents: {
            id: string;
            status: string;
            createdAt: Date;
            brandId: string;
            docType: string;
            fileUrl: string;
            reviewedBy: string | null;
            reviewedAt: Date | null;
            rejectionReason: import("../../generated/prisma/enums").BrandDocRejectionReason;
        }[];
    } & {
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
    }) | null>;
    findBrandById(brandId: string): Promise<{
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
    createBrand(data: {
        userId: string;
        name: string;
        logoUrl?: string;
        logoUrl_id?: string;
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
    updateBrand(brandId: string, data: {
        name?: string;
        isActive?: boolean;
        logoUrl?: string | null;
        logoUrl_id?: string | null;
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
    getUserBrand(userId: string): Promise<{
        id: string;
        name: string;
        userId: string;
        verificationStatus: import("../../generated/prisma/enums").BrandVerificationTier;
    } | null>;
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
    CreateBrandLocation(data: {
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
    }): Promise<any>;
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
    findApprovedBrandById(brandId: string): Promise<{
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
export declare const brandModel: BrandModel;
export {};
//# sourceMappingURL=brand.model.d.ts.map