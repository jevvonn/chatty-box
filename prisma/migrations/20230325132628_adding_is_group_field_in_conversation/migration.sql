/*
  Warnings:

  - Added the required column `is_group` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "is_group" BOOLEAN NOT NULL;
