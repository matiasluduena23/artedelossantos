/*
  Warnings:

  - Added the required column `name` to the `Mueble` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mueble" ADD COLUMN     "name" TEXT NOT NULL;
