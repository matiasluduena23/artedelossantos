/*
  Warnings:

  - You are about to drop the column `broad` on the `Mueble` table. All the data in the column will be lost.
  - You are about to drop the column `deep` on the `Mueble` table. All the data in the column will be lost.
  - You are about to drop the column `high` on the `Mueble` table. All the data in the column will be lost.
  - Added the required column `alto` to the `Mueble` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ancho` to the `Mueble` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profundo` to the `Mueble` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Mueble` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mueble" DROP COLUMN "broad",
DROP COLUMN "deep",
DROP COLUMN "high",
ADD COLUMN     "alto" INTEGER NOT NULL,
ADD COLUMN     "ancho" INTEGER NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "profundo" INTEGER NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
