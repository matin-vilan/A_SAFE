import React from "react";
import { twMerge } from "tailwind-merge";

const Flex = ({
  vertical = false,
  children,
  ...rest
}: {
  vertical?: boolean;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const { className, ...otherRest } = rest;
  return (
    <div
      {...otherRest}
      className={twMerge(
        vertical ? "flex flex-col items-center" : "flex items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
