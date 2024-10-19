"use client";
import Button from "@/components/design/Button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Header = () => {
  const { status } = useSession();
  const router = useRouter();
  const logout = () => {
    signOut();
    router.push("/");
  };
  const login = () => {
    router.push("/api/auth/signin");
  };
  return (
    <div className="w-full  bg-foreground text-background p-3 flex justify-between items-center">
      {status === "authenticated" ? (
        <Button onClick={() => logout()} variant="danger">
          logout
        </Button>
      ) : (
        <Button onClick={() => login()} variant="danger">
          Login
        </Button>
      )}
    </div>
  );
};

export default Header;
