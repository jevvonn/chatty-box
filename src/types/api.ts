export type ConversationExpect = {
  name?: string;
  is_group: boolean;
  users: string[];
};

export type MessageExpect = {
  conversationId: string;
  content: string;
};

export type GetMessageExpect = {
  conversationId: string;
}