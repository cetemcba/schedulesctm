/*
  Warnings:

  - You are about to drop the column `openPeriod` on the `locals` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `schedules` table. All the data in the column will be lost.
  - Added the required column `closeHour` to the `locals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endHour` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starHour` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "locals" DROP COLUMN "openPeriod",
ADD COLUMN     "closeHour" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "date",
DROP COLUMN "hour",
ADD COLUMN     "endHour" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "starHour" TIMESTAMP(3) NOT NULL;
