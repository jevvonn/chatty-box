import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { prisma } from "~/server/db";
import pusherServer from "~/server/pusher";
import { MessageExpect } from "~/types/api";
import { MessageFull } from "~/types/prismaTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });

  const session = await getServerSession(req, res, authOptions);

  if (!session)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  const body: MessageExpect = req.body;

  let exampleId = Math.random().toString() + "asdjkbalsjkdbasdb";
  const exampleMessage: MessageFull = {
    id: exampleId,
    content: body.content,
    conversationId: body.conversationId,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: { ...(session.user as User), emailVerified: null },
    userId: session.user.id,
  };

  pusherServer.trigger(session.user.id, "send-message", exampleMessage);

  const newMessage = await prisma.message.create({
    data: {
      content: body.content,
      conversation: {
        connect: {
          id: body.conversationId,
        },
      },
      user: {
        connect: {
          id: session.user.id,
        },
      },
    },
    include: {
      user: true,
    },
  });

  const updateConversation = await prisma.conversation.update({
    where: {
      id: body.conversationId,
    },
    data: {
      last_message: {
        connect: {
          id: newMessage.id,
        },
      },
    },
    include: {
      users: true,
      last_message: true,
    },
  });

  pusherServer.trigger(
    [...updateConversation.users.map((user) => user.id)],
    "new-message",
    { newMessage, exampleId }
  );
  pusherServer.trigger(
    [...updateConversation.users.map((user) => user.id)],
    "new-conversation",
    updateConversation
  );

  return res.status(200).json({ success: true });
}
