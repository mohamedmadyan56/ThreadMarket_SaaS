import { v2 as cloudinary,UploadApiResponse } from "cloudinary";
import { ENV } from "../../config/env";
import path from "path";
import { resolve } from "dns";
import { rejects } from "assert";

cloudinary.config({
  cloud_name: ENV.CLOUDINARY_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (filePath: string, folder: string):Promise<UploadApiResponse> => {

    if(!filePath){
        throw new AppError("File path is required",400);
    }

    const filePathResolved = path.resolve(filePath);
    try {
         const result = await cloudinary.uploader.upload(filePathResolved, { folder });
  return result;
    }catch(error:any){
        throw new AppError(      error?.message || "Cloudinary upload failed",500)
    }
};

export const uploadBufferToCloudinary = async (
  buffer: Buffer,
  folder: string
): Promise<UploadApiResponse> => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error || !result) {
          reject(new AppError(error?.message || "Buffer upload failed", 500));
        } else {
          resolve(result);
        }
      }
    );
    stream.end(buffer);
  });
};






export const deleteFromCloudinary = async (
  public_Id: string,
  resource_type: string = "image",
) => {
  const result = await cloudinary.uploader.destroy(public_Id, { resource_type });
  return result;
};