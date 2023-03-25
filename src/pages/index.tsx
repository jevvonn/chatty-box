import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import LoginButton from "~/components/auth/LoginButton";
import SignOutButton from "~/components/auth/SignOutButton";
import { BsFillChatDotsFill } from "react-icons/bs";
import Image from "next/image";

const Login: NextPage = () => {
  const { data, status } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <main className="flex h-[100dvh] w-full flex-col items-center justify-center">
        <div>
          <div className="mb-4">
            <h4 className="text-2xl">Welcome To,</h4>
            <h1 className="text-5xl"> Chatty Box</h1>
          </div>

          {status === "loading" ? (
            <h2 className="text-2xl">Singing You In...</h2>
          ) : !data ? (
            <LoginButton />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={data.user.image as string}
                  width={35}
                  height={35}
                  className="rounded-full"
                  alt=""
                />
                <h4 className="text-2xl">{data.user.name}</h4>
              </div>
              <div className="flex flex-col gap-2">
                <Link href={"/chat"} className="btn-primary btn text-white">
                  <BsFillChatDotsFill
                    color="white"
                    size={20}
                    className="mr-2"
                  />{" "}
                  Go My To Chats
                </Link>
                <SignOutButton />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Login;
