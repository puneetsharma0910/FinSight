import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-blue-100 shadow-sm transition-all duration-200">
      <nav className="container mx-auto flex items-center justify-between py-2 px-2 md:px-0">
        <Link href="/">
          <span className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-blue-700 select-none hover:text-blue-900 transition-colors duration-200">
            <svg
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              className="h-9 w-9 drop-shadow-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="28" height="28" rx="8" fill="#2563eb" />
              <path
                d="M12 22V10h8M12 16h6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            FinSight
          </span>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button
                variant="outline"
                className="flex items-center gap-2 border-blue-200 hover:border-blue-400 transition-all"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"}>
              <Button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white shadow-md transition-all">
                <PenBox size={18} />
                <span className="hidden md:inline">Create Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="border-blue-200 hover:border-blue-400 transition-all">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-2 ring-blue-200 hover:ring-blue-400 transition-all",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;