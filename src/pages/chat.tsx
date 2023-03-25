import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import LeftSide from "~/components/chat/LeftSide";
import RightSide from "~/components/chat/RightSide";
import { authOptions } from "~/server/auth";

const Chats = () => {
  const { data } = useSession();

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Chats;
