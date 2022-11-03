/*
  Warnings:

  - Changed the type of `status` on the `schedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pendente', 'Confirmado', 'Concluido');

-- AlterTable
ALTER TABLE "schedules" ADD COLUMN     "isFinished" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;
