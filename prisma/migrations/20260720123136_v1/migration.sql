/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "brand_verification_tier" AS ENUM ('pending', 'basic_verification', 'full_verification', 'suspended');

-- CreateEnum
CREATE TYPE "BrandDocType" AS ENUM ('trademark_certificate', 'business_registration', 'representative_id', 'proof_of_address', 'shop_photo', 'product_packaging', 'social_platform', 'website', 'invoice_sample');

-- CreateEnum
CREATE TYPE "brand_doc_rejection_reason" AS ENUM ('illegible', 'expired', 'name_mismatch', 'wrong_doc_type', 'incomplete', 'unsupported_format', 'suspected_fraud', 'other');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "brandDocumentId" UUID;

-- CreateTable
CREATE TABLE "brands" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "brand_name" TEXT NOT NULL,
    "verification_status" "brand_verification_tier" NOT NULL DEFAULT 'pending',
    "rating" DECIMAL(2,1) NOT NULL DEFAULT 0,
    "logo_url" TEXT,
    "logo_url_id" TEXT,
    "followers_count" INTEGER NOT NULL DEFAULT 0,
    "viewed_times" BIGINT NOT NULL DEFAULT 0,
    "is_promoted" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "balance" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "payment_details" JSONB,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brand_documents" (
    "document_id" UUID NOT NULL,
    "brand_id" UUID NOT NULL,
    "doc_type" VARCHAR(40) NOT NULL,
    "file_url" TEXT NOT NULL,
    "reviewed_by" UUID,
    "reviewed_at" TIMESTAMPTZ,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "brand_documents_pkey" PRIMARY KEY ("document_id")
);

-- CreateTable
CREATE TABLE "brand_social_links" (
    "brand_id" UUID NOT NULL,
    "platform" VARCHAR(30) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "brand_social_links_pkey" PRIMARY KEY ("brand_id","platform")
);

-- CreateTable
CREATE TABLE "brand_followers" (
    "brand_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "followed_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "brand_followers_pkey" PRIMARY KEY ("brand_id","user_id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "media" JSONB[],
    "description" TEXT NOT NULL,
    "brand_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "discount" INTEGER DEFAULT 0,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "rating" DECIMAL(2,1) NOT NULL DEFAULT 0,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variants" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "sold" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "category_name" TEXT NOT NULL,
    "media" JSONB NOT NULL,
    "ishidden" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" UUID NOT NULL,
    "productId" UUID,
    "content" TEXT NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brands_user_id_key" ON "brands"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "variants_product_id_color_size_key" ON "variants"("product_id", "color", "size");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand_documents" ADD CONSTRAINT "brand_documents_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand_documents" ADD CONSTRAINT "brand_documents_reviewed_by_fkey" FOREIGN KEY ("reviewed_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand_social_links" ADD CONSTRAINT "brand_social_links_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand_followers" ADD CONSTRAINT "brand_followers_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand_followers" ADD CONSTRAINT "brand_followers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variants" ADD CONSTRAINT "variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
