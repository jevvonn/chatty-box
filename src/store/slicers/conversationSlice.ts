import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationFull } from "~/types/prismaTypes";

type Initial = {
  allConversations: ConversationFull[];
  selectedConversation: ConversationFull | null;
};

const initialState: Initial = {
  allConversations: [],
  selectedConversation: null,
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setInitial: (state, action: PayloadAction<ConversationFull[]>) => {
      state.allConversations = action.payload.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    },
    newConversation(state, action: PayloadAction<ConversationFull>) {
      state.allConversations = [
        action.payload,
        ...state.allConversations.filter(
          (conv) => conv.id !== action.payload.id
        ),
      ];
    },
    setSelectedConversation(
      state,
      action: PayloadAction<ConversationFull | null>
    ) {
      state.selectedConversation = action.payload;
    },
  },
});

export const { newConversation, setInitial, setSelectedConversation } =
  conversationSlice.actions;
export default conversationSlice.reducer;
