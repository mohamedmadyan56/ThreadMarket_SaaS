import { v2 as cloudinary,UploadApiResponse } from "cloudinary";
import { ENV } from "../../config/env";
import path from "path";

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

export const deleteFromCloudinary = async (
  public_Id: string,
  resource_type: string = "image",
) => {
  const result = await cloudinary.uploader.destroy(public_Id, { resource_type });
  return result;
};