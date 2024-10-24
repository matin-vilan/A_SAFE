"use client";
import Button from "@/components/design/Button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
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
    <div className="w-full  bg-foreground text-background p-3 flex justify-between items-center px-10">
      {pathname !== "/" ? (
        <Link href="/">
          <div className="p-2 bg-background text-foreground rounded-md cursor-pointer hover:bg-foreground hover:text-background border border-background hover:border-background">
            HOME
          </div>
        </Link>
      ) : (
        <></>
      )}
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
