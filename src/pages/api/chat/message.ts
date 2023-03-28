import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { prisma } from "~/server/db";
import { GetMessageExpect } from "~/types/api";

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

  const body: GetMessageExpect = req.body;

  const messages = await prisma.message.findMany({
    where: {
      conversationId: body.conversationId,
    },
    orderBy: {
      createdAt: "asc",
    },
    include: {
      user: true,
    },
  });

  return res.status(200).json(messages);
}
