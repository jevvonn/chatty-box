import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { RootState } from "~/store";
import { setSelectedConversation } from "~/store/slicers/conversationSlice";
import { ConversationFull } from "~/types/prismaTypes";

type Props = {
  conversation: ConversationFull;
};

const ConversationCard = ({ conversation }: Props) => {
  const { data } = useSession();
  const selectedConv = useAppSelector(
    (state: RootState) => state.conversation.selectedConversation
  );
  const dispatch = useAppDispatch();

  const active: boolean = selectedConv?.id === conversation.id;
  let conversationName = conversation.name;
  let conversationImage: string;

  if (!conversation.is_group) {
    const otherUser = conversation.users.find(
      (user) => user.id !== data?.user.id
    );

    conversationName = otherUser?.name as string;
    conversationImage = otherUser?.image as string;
  } else {
    conversationImage = "/img/group_pp.jpg";
  }

  return (
    <div
      className={`" " flex w-full cursor-pointer gap-4 border-b-[1px] border-slate-700 p-4  ${
        active
          ? "bg-slate-500 bg-opacity-30"
          : "hover:bg-slate-500 hover:bg-opacity-20"
      }`}
      onClick={() => dispatch(setSelectedConversation(conversation))}
    >
      <div className="flex items-center justify-center">
        <Image
          src={conversationImage}
          width={40}
          height={40}
          alt=""
          className="rounded-full"
        />
      </div>
      <div className="flex w-full flex-col">
        <p className="text-lg">{conversationName}</p>
        <p className="text-md text-slate-500">
          {conversation.last_message?.content}
        </p>
      </div>
    </div>
  );
};

export default ConversationCard;
