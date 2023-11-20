import React from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});
const Banner = () => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-9 grid-cols-1 w-full pt-4 md:max-w-6xl md:mx-auto md:my-0 md:gap-x-2 gap-y-6 md:gap-y-0",
        headingFont.className
      )}
    >
      <div className="col-span-4 order-1 flex md:items-start items-center justify-start flex-col space-y-6">
        <div className="flex md:items-start items-center justify-center flex-col">
          <div
            className="mb-4 md:mt-6 flex items-center border shadow-sm p-4 
          bg-amber-100 text-amber-700 rounded-full uppercase"
          >
            <Medal className="h-6 w-6 mr-2 font-medium" />
            No 1 task managment
          </div>
          <h1
            className="text-3xl md:text-5xl md:text-start text-center
         text-slate-50 mb-6 font-medium"
          >
            Taskify helps team
          </h1>
          <div
            className="text-3xl md:text-5xl font-medium py-2 px-4 items-center flex bg-gradient-to-r
         from-pink-600 to-fuchsia-800 text-white w-fit rounded-sm"
          >
            Move work faster
          </div>
        </div>
        <Button
          className="mt-6 py-4 bg-blue-600 text-lg"
          size="lg"
          asChild
          variant={"default"}
        >
          <Link href="/sign-up">Get Taskify for Free</Link>
        </Button>
      </div>
      <div className="col-span-5 order-2 px-3 flex">
        <Image
          src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp"
          alt="Right Image"
          width={600}
          height={600}
          className="object-contain w-auto h-auto md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
