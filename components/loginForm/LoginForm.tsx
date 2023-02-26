import React, { useState } from "react";
import Button from "../utility/button/Button";
import classNames from "classnames";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Error from "../utility/error/Error";
import { MdOutlineError } from "react-icons/md";
import Spinner from "../utility/spinner/Spinner";

type LoginFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  error?: any;
  isPending?: boolean;
};

const LoginForm = ({ onSubmit, error, isPending }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[20rem] ">
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
        <Button disabled={isPending} variant="primary">
          {isPending ? <Spinner /> : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
