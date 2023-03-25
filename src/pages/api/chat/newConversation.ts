import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { prisma } from "~/server/db";
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
        ],
      },
    });

    if (conversation.length) return res.status(200).json(conversation[0]);
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
  });

  return res.status(200).json(newConversation);
}
