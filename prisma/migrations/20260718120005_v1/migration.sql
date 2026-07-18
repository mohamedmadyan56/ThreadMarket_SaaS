/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "otpPurpose" AS ENUM ('resetpassword', 'signup');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "failedLoginAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isBanned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isOnline" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lockedUntil" TIMESTAMP(3),
ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otp_expiration" TIMESTAMP(3),
ADD COLUMN     "otp_purpose" "otpPurpose" NOT NULL DEFAULT 'resetpassword',
ADD COLUMN     "passwordChangedAt" TIMESTAMP(3),
ADD COLUMN     "payment_id" TEXT,
ADD COLUMN     "picture_url" TEXT,
ADD COLUMN     "picture_url_id" TEXT,
ADD COLUMN     "refreshToken" TEXT,
ADD COLUMN     "resetpasswordExpire" TIMESTAMP(3),
ADD COLUMN     "resetpasswordToken" TEXT,
ADD COLUMN     "updated_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
