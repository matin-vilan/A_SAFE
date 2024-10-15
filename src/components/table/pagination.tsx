import Flex from "@design/Flex";
import Typography from "@design/Typography";
import React from "react";
import { twMerge } from "tailwind-merge";

const Pagination = ({
  totalPage,
  currentPage,
  onChange,
}: {
  totalPage: number;
  currentPage: number;
  onChange: (page: number) => void;
}) => {
  const handleChangePage = (page: number) => {
    return onChange(page);
  };
  return (
    <Flex className="gap-2 py-2">
      {Array(totalPage)
        .fill("")
        .map((item, i) => (
          <Typography
            variant="description"
            className={twMerge(
              "rounded-full p-4 bg-foreground text-background w-[20px] h-[20px] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white",
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            )}
            onClick={() => handleChangePage(i + 1)}
          >
            {i + 1}
          </Typography>
        ))}
    </Flex>
  );
};

export default Pagination;
