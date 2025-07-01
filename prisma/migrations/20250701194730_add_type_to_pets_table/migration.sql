/*
  Warnings:

  - Added the required column `type` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pets" ADD COLUMN     "type" VARCHAR(100) NOT NULL;
