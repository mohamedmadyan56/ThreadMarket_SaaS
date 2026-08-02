/*
  Warnings:

  - You are about to alter the column `viewed_times` on the `brands` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "brands" ALTER COLUMN "viewed_times" SET DATA TYPE INTEGER;
