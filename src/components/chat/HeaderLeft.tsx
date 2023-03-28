import { signOut, useSession } from "next-auth/react";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const HeaderLeft = () => {
  const { data } = useSession();

  return (
    <div className="flex w-full items-center justify-between bg-neutral  p-4  ">
      <div className="flex items-center gap-4">
        <div>
          <Image
            src={data?.user.image as string}
            width={32}
            height={32}
            alt=""
            className="rounded-full"
          />
        </div>
        <p className="text-lg">{data?.user.name}</p>
      </div>
      <div className="dropdown-end dropdown">
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
          <li>
            <div
              onClick={async () => {
                await axios.post("/api/pusher");
              }}
            >
              Sync Contact
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                signOut();
              }}
              className="text-red-400"
            >
              Sign Out
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLeft;
