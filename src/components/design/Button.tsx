import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type variants = "dark" | "light" | "success" | "danger";

const Button = ({
  children,
  variant,
  ...rest
}: { children: React.ReactNode; variant?: variants } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const { className, ...otherRest } = rest;

  const switchVariants = useMemo(() => {
    switch (variant) {
      case "dark":
        return "btn-dark";
      case "success":
        return "btn-success";
      case "danger":
        return "btn-danger";
      default:
        return "btn-primary";
    }
  }, [variant]);

  return (
    <button
      {...otherRest}
      type="button"
      className={twMerge(switchVariants, className)}
    >
      {children}
    </button>
  );
};

export default Button;
