/*
  Warnings:

  - You are about to drop the column `description` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the `UsersOnConversations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UsersOnConversations" DROP CONSTRAINT "UsersOnConversations_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnConversations" DROP CONSTRAINT "UsersOnConversations_userId_fkey";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "UsersOnConversations";

-- CreateTable
CREATE TABLE "_ConversationToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConversationToUser_AB_unique" ON "_ConversationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ConversationToUser_B_index" ON "_ConversationToUser"("B");

-- AddForeignKey
ALTER TABLE "_ConversationToUser" ADD CONSTRAINT "_ConversationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationToUser" ADD CONSTRAINT "_ConversationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
