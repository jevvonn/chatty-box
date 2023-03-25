import React from "react";
import ChatLayout from "./ChatLayout";
import HeaderRight from "./HeaderRight";
import MessageInput from "./MessageInput";

const RightSide = () => {
  return (
    <div className=" hidden w-full flex-col lg:flex">
      <HeaderRight />
      <ChatLayout />
      <MessageInput />
    </div>
  );
};

export default RightSide;
