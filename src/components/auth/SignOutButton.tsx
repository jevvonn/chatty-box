import { signOut } from "next-auth/react";
import { HiOutlineLogin } from "react-icons/hi";

const SignOutButton = () => {
  return (
    <button
      className="btn-secondary btn "
      onClick={() => {
        signOut();
      }}
    >
      <HiOutlineLogin size={20} className="mr-2" /> Sign Out Account
    </button>
  );
};

export default SignOutButton;
