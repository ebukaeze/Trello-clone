import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import local from "next/font/local";

const logoFont = local({
  src: "../public/fonts/font.woff2",
});
interface Props {
  color: string;
}
const Logo = ({ color }: Props) => {
  return (
    <Link href="/">
      <div
        className={cn(
          "hover:opacity-70 transition items-center flex h-12 md:flex gap-x-2",
          logoFont.className
        )}
      >
        <Image src={"/logo.svg"} alt="Logo" height={30} width={30} />
        <p className={`${color ? color : "text-neutral-700"} text-lg mt-1.5`}>
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
