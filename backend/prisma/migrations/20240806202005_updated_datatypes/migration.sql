/*
  Warnings:

  - You are about to drop the column `authorid` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorid_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorid",
DROP COLUMN "published",
ADD COLUMN     "authorId" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "publishedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "name" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
