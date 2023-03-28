import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import LoginButton from "~/components/auth/LoginButton";
import Chats from "~/components/Chats";
import Begin from "~/components/Begin";

const Login: NextPage = () => {
  const { data, status } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>

      {status === "loading" ? (
        <Begin>
          <h2 className="text-2xl">Singing You In...</h2>
        </Begin>
      ) : !data ? (
        <Begin>
          <LoginButton />
        </Begin>
      ) : (
        <Chats />
      )}
    </>
  );
};

export default Login;
