import { signIn } from "next-auth/react";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginButton = () => {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/",
        })
      }
      className="btn-primary btn text-white"
    >
      <AiOutlineGoogle color="white" size={20} className="mr-2" /> Login With
      Google
    </button>
  );
};

export default LoginButton;
