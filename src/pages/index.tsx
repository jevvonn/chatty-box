import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import socket from "~/server/socket";

const Home: NextPage = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket);
    });
  }, [socket]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <main>
        <h1>Hello world</h1>
      </main>
    </>
  );
};

export default Home;
