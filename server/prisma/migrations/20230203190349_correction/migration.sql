/*
  Warnings:

  - You are about to drop the column `isFinished` on the `schedules` table. All the data in the column will be lost.
  - Made the column `localId` on table `schedules` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_localId_fkey";

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "isFinished",
ALTER COLUMN "localId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_localId_fkey" FOREIGN KEY ("localId") REFERENCES "locals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
