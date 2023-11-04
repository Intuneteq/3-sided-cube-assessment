import React from "react";
import Link from "next/link";

import { anonymous_Pro } from "@/fonts";
import {
  DesktopLogo,
  Logo,
  PlusIcon,
  InboxIcon,
  ProgressBar,
} from "@/components/atoms";

export default function Navbar() {
  return (
    <nav className="w-full min-h-[4.5rem] py-4 px-[1.31rem] md:px-9 flex items-center justify-center bg-primary-black">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center w-full h-full">
        <Link href={"/"}>
          <DesktopLogo className="w-[14.88706rem] h-[2.3125rem]" />
        </Link>
        <Link
          href={"/nominations"}
          className={`${anonymous_Pro.className} text-base font-bold tracking-[0.02rem] underline text-primary-white `}
        >
          Your Nominations (3)
        </Link>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col gap-[2.12rem] items-start justify-between md:hidden w-full h-full">
        <div className="w-full h-full flex items-center justify-between">
          <Link href={"/"}>
            <Logo className="w-[14.88706rem] h-[2.3125rem]" />
          </Link>
          <div className="flex justify-between items-center gap-[1rem]">
            <PlusIcon className="w-[1.4375rem] h-[1.4375rem]" />
            <InboxIcon className="w-[1.6875rem] h-[1.6875rem]" />
          </div>
        </div>
        <div className="w-full">
          <ProgressBar progress="25%" />
        </div>
      </div>
    </nav>
  );
}
