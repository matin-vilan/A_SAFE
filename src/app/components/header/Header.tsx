"use client";
import Button from "@design/Button";
import { signOut } from "next-auth/react";
const Header = () => {
  return (
    <div className="w-full h-10 bg-red">
      <Button onClick={() => signOut()} variant="danger">
        logout
      </Button>
    </div>
  );
};

export default Header;
