import React from "react";
import { FcGoogle } from "react-icons/fc";

type GoogleSigninProps = {
  handleGoogleSignIn: (e: React.SyntheticEvent) => Promise<void>;
};
const GoogleSignin = ({ handleGoogleSignIn }: GoogleSigninProps) => {
  return (
    <>
      <div className="flex items-center my-6">
        <div className="flex-1 border border-gray"></div>
        <span className="text-sm mx-4 font-semibold text-gray">OR</span>
        <div className="flex-1 border border-gray"></div>
      </div>

      <button
        onClick={handleGoogleSignIn}
        className="border border-gray hover:shadow-md transition-all duration-300 py-2 px-5 rounded-md flex justify-center gap-3 text-base items-center w-full"
      >
        <FcGoogle className="text-xl" /> Sign in with google
      </button>
    </>
  );
};

export default GoogleSignin;
