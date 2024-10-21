import Flex from "@design/Flex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

const SidebarItem = ({ title, link }: { title: string; link: string }) => {
  const pathname = usePathname();

  return (
    <Link href={`/dashboard/${link}`} className="w-full">
      <Flex
        className={twMerge(
          "p-4 border-foreground hover:border-background text-foreground hover:text-background hover:bg-foreground w-full",
          pathname.includes(link) ? "bg-foreground text-background" : ""
        )}
      >
        {title}
      </Flex>
    </Link>
  );
};

const sidebarItems = [
  { title: "POSTS", link: "posts", id: 1 },
  { title: "LARGE DATA", link: "large-data", id: 2 },
  { title: "CHART", link: "chart", id: 3 },
];
const Sidebar = () => {
  return (
    <Flex vertical>
      {sidebarItems.map((item) => (
        <SidebarItem key={item.id} {...item} />
      ))}
    </Flex>
  );
};

export default Sidebar;
