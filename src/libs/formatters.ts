import { DateType } from "react-tailwindcss-datepicker";

export const formatDate = (
  date?: DateType,
  seperator: "/" | "-" = "/"
): string | null => {
  if (!date) return null;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${seperator}${month}${seperator}${day}`;
};
