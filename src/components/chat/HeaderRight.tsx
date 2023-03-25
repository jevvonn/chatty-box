import { useSession } from "next-auth/react";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const HeaderRight = () => {
  const { data } = useSession();

  return (
    <div className="flex w-full items-center justify-between bg-neutral p-4">
      <div className="flex gap-4">
        <Image
          src={data?.user.image as string}
          width={32}
          height={32}
          alt=""
          className="rounded-full"
        />
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
        </ul>
      </div>
    </div>
  );
};

export default HeaderRight;
