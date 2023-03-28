import axios from "axios";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import pusher from "~/client/pusher";
import LeftSide from "~/components/chat/LeftSide";
import RightSide from "~/components/chat/RightSide";
import { useAppDispatch } from "~/hooks/redux";
import { newConversation, setInitial } from "~/store/slicers/conversationSlice";
import type { ConversationFull } from "~/types/prismaTypes";

const Chats = () => {
  const session = useSession();
  const dispatch = useAppDispatch();

  const getConversation = async () => {
    const { data } = await axios.get<ConversationFull[]>(
      "/api/chat/conversation"
    );
    dispatch(setInitial(data));
  };

  useEffect(() => {
    getConversation();
    const channel = pusher.subscribe(session.data?.user.id as string);

    channel.bind("new-conversation", (data: ConversationFull) => {
      dispatch(newConversation(data));
    });
  }, [dispatch, newConversation, getConversation, session]);

  return (
    <>
      <Head>
        <title>Chats</title>
      </Head>
      <main className="flex h-[100dvh] w-full">
        <LeftSide />
        <RightSide />
      </main>
    </>
  );
};

export default Chats;
