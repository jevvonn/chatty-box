import { NextApiRequest, NextApiResponse } from "next";
import pusherServer from "~/server/pusher";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.json({ success: false });

  await pusherServer.trigger("chat", "chat-event", {
    message: "Welcome",
  });

  return res.json({ success: true });
}
