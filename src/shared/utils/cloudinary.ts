import { v2 as cloudinary } from "cloudinary";
import { ENV } from "../../config/env";
import path from "path";

cloudinary.config({
  cloud_name: ENV.CLOUDINARY_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (filePath: string, folder: string) => {
  const filePathResolved = path.resolve(filePath || "");
  const result = await cloudinary.uploader.upload(filePathResolved, { folder });
  return result;
};

export const deleteFromCloudinary = async (
  public_Id: string,
  resource_type: string = "image",
) => {
  const result = await cloudinary.uploader.destroy(public_Id, { resource_type });
  return result;
};