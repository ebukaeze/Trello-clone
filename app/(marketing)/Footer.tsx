import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 z-10 border-t bg-gray-700">
      <div className="flex w-full md:max-w-7xl md:mx-auto my-0 px-3 md:px-0 ">
        <div className="flex flex-auto items-center justify-between h-14 gap-x-4">
          <div className="flex flex-1 gap-x-3 pt-3">
            {" "}
            <Logo color="text-slate-100" />
          </div>
          <div className="flex items-center gap-x-4 text-slate-100">
            <Button size="sm" variant="ghost" className="bg-transparent">
              Privacy Policy
            </Button>
            <div className="h-full pt-1">
              <Button size="sm" variant={"ghost"}>
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
