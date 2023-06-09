import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });

  const session = await getServerSession(req, res, authOptions);

  if (!session)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  const userConv = await prisma.conversation.findMany({
    where: {
      users: {
        some: {
          id: {
            equals: session.user.id,
          },
        },
      },
    },
    include: {
      users: true,
      last_message: true,
    },
  });

  return res.status(200).json(userConv);
}
