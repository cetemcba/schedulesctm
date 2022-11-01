/*
  Warnings:

  - Changed the type of `type` on the `locals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `mateials` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `schedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ENFERMAGEM', 'ESTETICA', 'SEGTRABALHO', 'ANALISESCLINICAS', 'INFORMATICA');

-- AlterTable
ALTER TABLE "locals" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL;

-- AlterTable
ALTER TABLE "mateials" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL;

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL;
