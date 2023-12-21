"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { anonymous_Pro, poppins } from "@/fonts";

export default function NominationNav() {
  const pathname = usePathname();
  return (
    <>
      <h1
        className={`${poppins.className} text-2xl md:text-[2rem] font-bold text-primary-black uppercase mb-[1.16rem] md:mb-[2.12rem] px-[1.25rem] md:px-0`}
      >
        YOUR Nominations
      </h1>
      <div
        className={`${anonymous_Pro.className} flex justify-start items-center gap-3 mb-[1.19rem] px-[1.25rem] md:px-0`}
      >
        <Link
          href={"/nominations"}
          className={`w-[7rem] md:w-[8.5rem] h-[1.875rem] md:h-[3.125rem] text-primary-black bg-primary-green flex justify-center items-center capitalize text-base font-normal shadow-light hover:shadow-strong ${
            pathname === "/nominations" ? "shadow-strong" : ""
          }`}
        >
          current
        </Link>
        <Link
          href={"/nominations/closed"}
          className={`w-[7rem] md:w-[8.5rem] h-[1.875rem] md:h-[3.125rem] bg-light-grey text-primary-black flex justify-center items-center capitalize text-base font-bold shadow-light hover:shadow-strong ${
            pathname === "/nominations/closed" ? "shadow-strong" : ""
          }`}
        >
          closed
        </Link>
      </div>
    </>
  );
}
