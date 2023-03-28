import React from "react";

const Begin = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-[100dvh] w-full flex-col items-center justify-center">
      <div>
        <div className="mb-4">
          <h4 className="text-2xl">Welcome To,</h4>
          <h1 className="text-5xl"> Chatty Box</h1>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Begin;
