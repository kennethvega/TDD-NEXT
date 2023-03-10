import SignupForm from "@/components/signupForm/SignupForm";
import Card from "@/components/utility/card/Card";
import GoogleSignin from "@/components/utility/googleSignin/GoogleSignin";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const signup = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password, displayName } = data;
    // await signUp(email, password, displayName);
    console.log(data);
  };
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
        <h2 className="mb-5 font-bold text-2xl text-green">Signup</h2>
        <SignupForm onSubmit={onSubmit} />
        <GoogleSignin handleGoogleSignIn={handleGoogleSignIn} />
      </Card>

      <div className="mt-6">
        <Card>
          <p className="text-center">
            Already have an account ?
            <span className="font-bold text-green">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default signup;
