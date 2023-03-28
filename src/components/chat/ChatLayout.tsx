import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import pusher from "~/client/pusher";
import { useAppSelector } from "~/hooks/redux";
import { RootState } from "~/store";
import { GetMessageExpect } from "~/types/api";
import { MessageFull } from "~/types/prismaTypes";

const ChatLayout = () => {
  const session = useSession();
  const [messages, setMessages] = useState<MessageFull[] | null>(null);
  const endMessage = useRef<HTMLDivElement | null>(null);

  const selectedConv = useAppSelector(
    (state: RootState) => state.conversation.selectedConversation
  );

  const getMessage = async () => {
    if (!selectedConv) return;
    const dataExcpect: GetMessageExpect = {
      conversationId: selectedConv.id as string,
    };
    const { data } = await axios.post<MessageFull[]>(
      "/api/chat/message",
      dataExcpect
    );

    setMessages(data);
  };

  const scrollToBottom = () => {
    endMessage.current?.scrollIntoView();
  };

  useEffect(() => {
    pusher.bind("send-message", (data: MessageFull) => {
      setMessages((prev) => (prev ? [...prev, data] : prev));
    });

    pusher.bind(
      "new-message",
      (data: { newMessage: MessageFull; exampleId: string }) => {
        setMessages((prev) =>
          prev
            ? [
                ...prev.filter((msg) => msg.id !== data.exampleId),
                data.newMessage,
              ]
            : prev
        );
      }
    );
  }, []);

  useEffect(() => {
    if (messages) scrollToBottom();
  }, [messages]);

  useEffect(() => {
    getMessage();
  }, [selectedConv]);

  return (
    <div style={{ flex: "1 1 0" }} className="overflow-y-auto p-4">
      {messages?.map((message) => {
        if (selectedConv?.is_group) {
          if (message.user.id !== session.data?.user.id) {
            return (
              <div key={message.id} className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      src={message.user.image as string}
                      width={64}
                      height={64}
                      alt=""
                    />
                  </div>
                </div>
                <div className="chat-bubble whitespace-pre-wrap">
                  {message.content}
                </div>
                <div className="chat-footer">{message.user.name}</div>
              </div>
            );
          } else {
            return (
              <div className="chat chat-end" key={message.id}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      src={message.user.image as string}
                      width={64}
                      height={64}
                      alt=""
                    />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-primary whitespace-pre-wrap">
                  {message.content}
                </div>
              </div>
            );
          }
        } else {
          if (message.user.id !== session.data?.user.id) {
            return (
              <div key={message.id} className="chat chat-start">
                <div className="chat-bubble whitespace-pre-wrap">
                  {message.content}
                </div>
              </div>
            );
          } else {
            return (
              <div className="chat chat-end" key={message.id}>
                <div className="chat-bubble chat-bubble-primary">
                  {message.content}
                </div>
              </div>
            );
          }
        }
      })}
      {messages && <div ref={endMessage} />}
    </div>
  );
};

export default ChatLayout;
