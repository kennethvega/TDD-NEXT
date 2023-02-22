import classNames from "classnames";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
};

const Button = ({
  children,
  onClick,
  type,
  disabled,
  variant,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classNames(
        {
          "bg-green hover:bg-green2 py-2 px-5 rounded-md text-white w-full transition-all duration-300 flex  justify-center":
            variant === "primary",
        },
        {
          "bg-red hover:bg-red2 py-2 px-5 rounded-md text-white w-full transition-all duration-300 flex  justify-center":
            variant === "secondary",
        },
        {
          "bg-green hover:bg-green2  py-2 px-5 rounded-md text-white w-full transition-all duration-300 flex  justify-center":
            variant === undefined,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
