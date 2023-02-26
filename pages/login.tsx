import LoginForm from "@/components/loginForm/LoginForm";
import Card from "@/components/utility/card/Card";
import GoogleSignin from "@/components/utility/googleSignin/GoogleSignin";
import Link from "next/link";
import React from "react";

const login = () => {
  const onSubmit = () => {};

  // google sign in
  const handleGoogleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // try {
    //   const googleAuthProvider = new GoogleAuthProvider();
    //   await signInWithPopup(auth, googleAuthProvider).then((userCredential) => {
    //     setUser(userCredential.user);
    //     crossValidate(userCredential.user.uid, userCredential.user.displayName);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="mt-3 p-3">
      <Card>
        <LoginForm onSubmit={onSubmit} />
        <GoogleSignin handleGoogleSignIn={handleGoogleSignIn} />
      </Card>

      <div className="mt-6">
        <Card>
          <p className="text-center">
            Already have an account ?
            <span className="font-bold text-green">
              <Link href="/signup">Signup</Link>
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default login;
