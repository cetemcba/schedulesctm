/*
  Warnings:

  - The values [Confirmado,Concluido] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `type` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `materialQuantity` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'RESPOSiBLE';

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('Pendente', 'Agendado', 'Cancelado', 'Indeferido');
ALTER TABLE "schedules" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_localId_fkey";

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "type",
ADD COLUMN     "materialQuantity" INTEGER NOT NULL,
ALTER COLUMN "localId" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Pendente';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "localId" TEXT,
ADD COLUMN     "picture" TEXT NOT NULL,
ADD COLUMN     "token_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_token_id_key" ON "users"("token_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_localId_fkey" FOREIGN KEY ("localId") REFERENCES "locals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_localId_fkey" FOREIGN KEY ("localId") REFERENCES "locals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
