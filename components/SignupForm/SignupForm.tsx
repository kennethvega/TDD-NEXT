import React, { useState } from "react";
import classNames from "classnames";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineError } from "react-icons/md";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../utility/button/Button";
import Spinner from "../utility/spinner/Spinner";
import Error from "../utility/error/Error";

type SignupFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  error?: any;
  isPending?: boolean;
};

const SignupForm = ({ onSubmit, error, isPending }: SignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  // const isPending = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[20rem] ">
      <label
        htmlFor="displayName"
        className={classNames({ "text-red": errors.displayName })}
      >
        {errors.displayName
          ? errors.displayName.message?.toString()
          : "Display name"}
      </label>
      <input
        id="displayName"
        {...register("displayName", {
          required: "Display name is required",
          minLength: {
            value: 3,
            message: "Display name must be at least 3 characters",
          },
        })}
        type="text"
        placeholder="Display name"
        className={classNames("mb-3 mt-1", {
          "input-error": errors.displayName,
          input: !errors.displayName,
        })}
      />

      <label
        htmlFor="email"
        className={classNames({ "text-red": errors.email })}
      >
        {errors.email ? errors.email.message?.toString() : "Email"}
      </label>
      <input
        id="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
          },
        })}
        type="text"
        placeholder="Email"
        className={classNames("mb-3 mt-1", {
          "input-error": errors.email,
          input: !errors.email,
        })}
      />

      <label
        htmlFor="Password"
        className={classNames({ "text-red": errors.password })}
      >
        {errors.password ? errors.password.message?.toString() : "Password"}
      </label>
      <div className="relative flex items-center">
        <input
          id="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={classNames("mb-3 mt-1", {
            "input-error": errors.password,
            input: !errors.password,
          })}
        />

        <button
          type="button"
          className="absolute right-3 top-2  text-small text-green"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {/* Firebase Errors */}
      {error && (
        <Error>
          <MdOutlineError size={23} />
          {error}
        </Error>
      )}
      {/* Graphql Errors */}
      {/* {createUserResult?.error && (
        <Error>
          <>
            <MdOutlineError size={23} />
            {createUserResult.error}
          </>
        </Error>
      )} */}
      <div className="mt-5">
        <Button disabled={isPending}>
          {isPending ? <Spinner /> : "Signup"}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
