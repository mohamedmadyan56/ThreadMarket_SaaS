import { UploadApiResponse } from "cloudinary";
type ResourceType = "image" | "video" | "raw" | "auto";
export declare const uploadToCloudinary: (filePath: string, folder: string) => Promise<UploadApiResponse>;
export declare const uploadBufferToCloudinary: (buffer: Buffer, folder: string) => Promise<UploadApiResponse>;
export declare const deleteFromCloudinary: (publicId: string, resource_type?: ResourceType) => Promise<{
    result: string;
}>;
export {};
//# sourceMappingURL=cloudinary.d.ts.map