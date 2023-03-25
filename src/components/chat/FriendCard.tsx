import { User } from "@prisma/client";
import Image from "next/image";

const FriendCard = ({
  onChoose,
  user,
}: {
  onChoose: (id: string) => void;
  user: User;
}) => {
  return (
    <div
      className={`flex w-full cursor-pointer gap-4 border-b-[1px] border-slate-700 p-4 hover:bg-slate-500 hover:bg-opacity-20`}
      onClick={() => onChoose(user.id)}
    >
      <div className="flex items-center justify-center">
        <Image
          src={user.image as string}
          width={40}
          height={40}
          alt=""
          className="rounded-full"
        />
      </div>
      <div className="flex w-full flex-col">
        <p className="text-lg">{user.name}</p>
      </div>
    </div>
  );
};

export default FriendCard;
