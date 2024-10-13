import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type variants = "dark" | "light" | "success" | "danger";

const darkButton =
  "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
const primaryButton =
  "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
const greenButton =
  "text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
const redButton =
  "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";

const Button = ({
  children,
  variant,
  ...rest
}: { children: React.ReactNode; variant: variants } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const switchVariants = useMemo(() => {
    switch (variant) {
      case "dark":
        return darkButton;
      case "success":
        return greenButton;
      case "danger":
        return redButton;
      default:
        return primaryButton;
    }
  }, [variant]);

  return (
    <button
      {...rest}
      type="button"
      className={twMerge(switchVariants, rest.className)}
    >
      {children}
    </button>
  );
};

export default Button;
