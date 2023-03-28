import { MdOutlineEmojiEmotions } from "react-icons/md";
import autosize from "autosize";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import axios from "axios";
import { MessageExpect } from "../../types/api";
import { useAppSelector } from "~/hooks/redux";
import { RootState } from "~/store";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const conversation = useAppSelector(
    (state: RootState) => state.conversation.selectedConversation
  );

  const handleSubmit = async () => {
    const newMessage = message.trimStart();
    setMessage("");

    let data: MessageExpect = {
      content: newMessage,
      conversationId: conversation?.id as string,
    };

    await axios.post("/api/chat/newMessage", data);
  };

  return (
    <div className="flex w-full items-center gap-4 bg-neutral p-2">
      <div className="flex h-full items-center justify-center">
        <MdOutlineEmojiEmotions size={30} />
      </div>
      <textarea
        placeholder="Type your message..."
        rows={1}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          autosize(e.target);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            if (e.currentTarget.value.trimStart()) {
              handleSubmit();
            }
            e.preventDefault();
          }
        }}
        className="input-chat textarea-bordered textarea box-border max-h-[100px] min-h-[38px] w-full resize-none overflow-x-hidden  text-lg"
      ></textarea>
      <button className="btn-primary btn" onSubmit={handleSubmit}>
        <BiSend size={20} />
      </button>
    </div>
  );
};

export default MessageInput;
