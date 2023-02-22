import SignupForm from "@/components/SignupForm/SignupForm";
import Card from "@/components/utility/card/Card";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const signup = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password, displayName } = data;
    // await signUp(email, password, displayName);
    console.log(data);
  };

  return (
    <div className="mt-3 p-3">
      <Card>
        <h2 className="mb-5 font-bold text-2xl text-green">Signup</h2>
        <SignupForm onSubmit={onSubmit} />
      </Card>
    </div>
  );
};

export default signup;
