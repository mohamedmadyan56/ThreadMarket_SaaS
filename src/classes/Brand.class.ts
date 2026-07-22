import { UUID } from "node:crypto";
import { BrandDocType } from "../generated/prisma/browser";
import prisma from "../utils/connectDB";
import  ApiError  from "./ApiError";
import StatusCodes  from "http-status-codes";

class Brand {
    constructor() {}

    async getBrandVerificationStatus (brandId: string, userId: string , role: string) { 

//  - find brand with documents
//        - fetch verification status and documents:
//               - if not found => return 404
        const brand = await prisma.brand.findUnique({
            where: {
                id: brandId as UUID
            },include: {
                documents: true
            }
        });
        if (!brand) {
            throw new ApiError("Brand not found" ,StatusCodes.NOT_FOUND );
        }

    // - authorize user:
    const isOwner = brand.userId === userId;
    const isAdmin = role === "admin";
    
        if (!isOwner && !isAdmin) {
            throw new ApiError("You are not authorized to access this brand", StatusCodes.FORBIDDEN);
        }
 
        //  - calculate missing documents: 
//        - Get all values from BrandDocType enum.
//         - Get submitted document types.
//         - Compare both lists.
//         - Return document types that were not submitted.
const allDocumentTypes = Object.values(BrandDocType);
const submittedDocumentTypes = new Set(
    brand.documents.map((doc) => doc.docType)
);
const missingDocuments = allDocumentTypes.filter(
    type => !submittedDocumentTypes.has(type)
);
const submittedDocuments = brand.documents.map((doc) => ({
    docType: doc.docType,
    fileUrl: doc.fileUrl,
    status: doc.status,
    rejectionReason: (doc as any).rejectionReason ?? null
}));
//  - return response:
return {

    verificationStatus: brand.verificationStatus,
    submittedDocuments: submittedDocuments,
    missingDocuments
        };

    }
}

export default Brand;