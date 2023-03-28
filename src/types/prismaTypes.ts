import { Prisma } from "@prisma/client";

export type ConversationFull = Prisma.ConversationGetPayload<{
  include: {
    users: true;
    last_message: true;
  };
}>;

export type ConversationWithMessage = Prisma.ConversationGetPayload<{
  include: {
    messages: true;
  };
}>;

export type ConversationWithUser = Prisma.ConversationGetPayload<{
  include: {
    users: true;
  };
}>;

export type MessageFull = Prisma.MessageGetPayload<{
  include: {
    user: true;
  };
}>;
