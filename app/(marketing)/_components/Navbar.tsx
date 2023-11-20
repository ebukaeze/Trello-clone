import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-10 h-[3.8rem] border-b shadow-sm bg-gray-100">
      <div className="flex w-full md:max-w-7xl md:mx-auto my-0 px-3 md:px-0 ">
        <div className="flex flex-auto items-center justify-between h-14 gap-x-4">
          <div className="flex flex-1 gap-x-3 pt-3">
            {" "}
            <Logo color="" />
            <div className="hidden md:flex">nav items</div>
          </div>
          <div className="flex items-center gap-x-4">
            <Button
              size="sm"
              asChild
              variant="outline"
              className="bg-transparent"
            >
              <Link
                href={"/"}
                className="text-lg font-medium hover:text-blue-500"
              >
                Log In
              </Link>
            </Button>
            <div className="h-full pt-1">
              <Button
                className="py-0 bg-blue-600 text-lg h-14 md:h-[3.9rem] rounded-none"
                size="lg"
                asChild
                variant={"default"}
              >
                <Link href="/sign-up">Get Taskify for Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
