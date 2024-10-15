import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export type Variants = "title" | "normal" | "description";
const Typography = ({
  children,
  variant,
  ...rest
}: {
  children?: string | number;
  variant?: Variants;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  const { className, ...otherRest } = rest;
  const switchVariants = useMemo(() => {
    switch (variant) {
      case "title":
        return "text-title";
      case "normal":
        return "text-normal";
      case "description":
        return "text-description";
      default:
        return "text-normal";
    }
  }, [variant]);

  return (
    <p {...otherRest} className={twMerge(switchVariants, className)}>
      {children}
    </p>
  );
};

export default Typography;
