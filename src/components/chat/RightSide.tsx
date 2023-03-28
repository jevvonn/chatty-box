import React from "react";
import { useAppSelector } from "~/hooks/redux";
import { RootState } from "~/store";
import ChatLayout from "./ChatLayout";
import HeaderRight from "./HeaderRight";
import MessageInput from "./MessageInput";

const RightSide = () => {
  const selectedConv = useAppSelector(
    (state: RootState) => state.conversation.selectedConversation
  );

  return (
    <div
      className={`${
        !selectedConv ? "hidden" : "flex"
      }  w-full flex-col lg:flex`}
    >
      {selectedConv ? (
        <>
          <HeaderRight />
          <ChatLayout />
          <MessageInput />
        </>
      ) : (
        <div className="flex h-[100%] w-full items-center justify-center ">
          <p>Choose your conversation first!</p>
        </div>
      )}
    </div>
  );
};

export default RightSide;
