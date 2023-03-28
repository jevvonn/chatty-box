/*
  Warnings:

  - A unique constraint covering the columns `[last_message_id]` on the table `Conversation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_last_message_id_fkey";

-- AlterTable
ALTER TABLE "Conversation" ALTER COLUMN "last_message_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Conversation_last_message_id_key" ON "Conversation"("last_message_id");

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_last_message_id_fkey" FOREIGN KEY ("last_message_id") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
