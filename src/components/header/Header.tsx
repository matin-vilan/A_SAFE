"use client";
import Button from "@/components/design/Button";
import { signOut } from "next-auth/react";
const Header = () => {
  return (
    <div className="w-full  bg-foreground text-background p-3 flex justify-between items-center">
      <Button onClick={() => signOut()} variant="danger">
        logout
      </Button>
    </div>
  );
};

export default Header;
