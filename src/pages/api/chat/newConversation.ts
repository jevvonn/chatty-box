import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { prisma } from "~/server/db";
import pusherServer from "~/server/pusher";
import { ConversationExpect } from "~/types/api";

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

  const body: ConversationExpect = req.body;

  if (!body.is_group) {
    const conversation = await prisma.conversation.findMany({
      where: {
        AND: [
          {
            users: {
              some: {
                id: {
                  equals: body.users[0],
                },
              },
            },
          },
          {
            users: {
              some: {
                id: {
                  equals: body.users[1],
                },
              },
            },
          },
          {
            is_group: {
              equals: false,
            },
          },
        ],
      },
      include: {
        users: true,
        last_message: true,
      },
    });

    if (conversation.length) {
      pusherServer.trigger(
        session.user.id,
        "new-conversation",
        conversation[0]
      );
      return res.status(200).json({ success: true });
    }
  }

  const newConversation = await prisma.conversation.create({
    data: {
      name: body.name || "noneed",
      is_group: body.is_group,
      users: {
        connect: body.users.map((id) => {
          return { id };
        }),
      },
    },
    include: {
      users: true,
      last_message: true,
    },
  });

  pusherServer.trigger([...body.users], "new-conversation", newConversation);

  return res.status(200).json({ success: true });
}
