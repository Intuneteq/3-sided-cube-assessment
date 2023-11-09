"use client";

import React from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

import { anonymous_Pro } from "@/fonts";
import { DesktopLogo, Logo, PlusIcon, InboxIcon } from "@/components/atoms";

export default function Navbar() {
  const queryClient = useQueryClient();

  const nominations = queryClient.getQueryData<Nomination[]>(["nominations"]);
  return (
    <nav className="w-full min-h-[4.5rem] py-4 px-[1.31rem] md:px-9 flex items-center justify-center bg-primary-black border md:border-none border-primary-black">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center w-full h-full">
        <Link href={"/"}>
          <DesktopLogo className="w-[14.88706rem] h-[2.3125rem]" />
        </Link>
        <Link
          href={"/nominations"}
          className={`${anonymous_Pro.className} text-base font-bold tracking-[0.02rem] underline text-primary-white `}
        >
          {`Your Nominations (${nominations?.length ?? 0})`}
        </Link>
      </div>

      {/* Mobile view */}
      <div className="w-full h-full flex items-center md:hidden justify-between">
        <Link href={"/"}>
          <Logo className="w-[14.88706rem] h-[2.3125rem]" />
        </Link>
        <div className="flex justify-between items-center gap-[1rem]">
          <Link href={"/select-nominee"}>
            <PlusIcon className="w-[1.4375rem] h-[1.4375rem]" />
          </Link>
          <Link href={"/nominations"}>
            <InboxIcon className="w-[1.6875rem] h-[1.6875rem]" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
