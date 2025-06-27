/*
  Warnings:

  - Added the required column `bingo_id` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "bingo_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_bingo_id_fkey" FOREIGN KEY ("bingo_id") REFERENCES "bingos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
