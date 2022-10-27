/*
  Warnings:

  - You are about to drop the column `descrtipon` on the `mateials` table. All the data in the column will be lost.
  - Added the required column `description` to the `mateials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mateials" DROP COLUMN "descrtipon",
ADD COLUMN     "description" TEXT NOT NULL;
