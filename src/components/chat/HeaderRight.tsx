import { useSession } from "next-auth/react";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { RootState } from "~/store";
import { BiLeftArrow } from "react-icons/bi";
import { setSelectedConversation } from "~/store/slicers/conversationSlice";

const HeaderRight = () => {
  const { data } = useSession();
  const selectedConv = useAppSelector(
    (state: RootState) => state.conversation.selectedConversation
  );
  const dispatch = useAppDispatch();

  let conversationName = selectedConv?.name;
  let conversationImage: string;

  if (!selectedConv?.is_group) {
    const otherUser = selectedConv?.users.find(
      (user) => user.id !== data?.user.id
    );

    conversationName = otherUser?.name as string;
    conversationImage = otherUser?.image as string;
  } else {
    conversationImage = "/img/group_pp.jpg";
  }

  return (
    <div className="flex w-full items-center justify-between bg-neutral p-4">
      <div className="flex gap-4">
        <button
          className={`rounded-lg bg-base-100 px-3 ${
            selectedConv && "block"
          } lg:hidden`}
          onClick={() => dispatch(setSelectedConversation(null))}
        >
          <BiLeftArrow />
        </button>
        <Image
          src={conversationImage}
          width={32}
          height={32}
          alt=""
          className="rounded-full"
        />
        <p className="text-lg">{conversationName}</p>
      </div>
      {/* <div className="dropdown-end dropdown">
        <label tabIndex={0} className="cursor-pointer hover:bg-base-content">
          <FiMoreVertical size={20} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu w-52 rounded-md bg-base-100 p-2 shadow"
        >
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default HeaderRight;
