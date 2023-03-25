import { useSession } from "next-auth/react";
import Image from "next/image";

const ConversationCard = ({ active }: { active: boolean }) => {
  const { data } = useSession();
  return (
    <div
      className={`" " flex w-full cursor-pointer gap-4 border-b-[1px] border-slate-700 p-4  ${
        active
          ? "bg-slate-500 bg-opacity-30"
          : "hover:bg-slate-500 hover:bg-opacity-20"
      }`}
    >
      <div className="flex items-center justify-center">
        <Image
          src={data?.user.image as string}
          width={40}
          height={40}
          alt=""
          className="rounded-full"
        />
      </div>
      <div className="flex w-full flex-col">
        <p className="text-lg">{data?.user.name}</p>
        <p className="text-md text-slate-500">
          {/* {conversation.messages[0]?.content} */}
        </p>
      </div>
    </div>
  );
};

export default ConversationCard;
