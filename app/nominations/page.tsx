import React from "react";
import { Metadata } from "next";

import { Button, EmptyContentIcon } from "@/components/atoms";
import { NominationTable } from "@/components/organisms";

import { anonymous_Pro, poppins } from "@/fonts";

export const metadata: Metadata = {
  title: "Nominations",
  description: "Your Nominations List",
};

export default function Nominations() {
  const nominations = ["food"];

  if (!nominations.length) {
    return (
      <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
        <section className="w-full max-w-[76rem] h-[38.1875rem] flex flex-col justify-center items-center gap-[4.19rem] bg-light-grey shadow-strong">
          <EmptyContentIcon className="w-[5.5rem] h-[5.5rem]" />
          <h1
            className={`${poppins.className} w-[25rem] text-center uppercase text-2xl font-bold`}
          >
            once you submit a nomination, you will be able to view and edit it
            here.
          </h1>
          <Button
            type="button"
            scheme="primary"
            width="w-[17.25rem]"
            height="h-[3.125rem]"
          >
            CREATE NEW NOMINATION
          </Button>
        </section>
      </main>
    );
  }
  return (
    <main className="flex justify-start items-start w-full md:min-h-screen flex-col md:py-5">
      <h1
        className={`${poppins.className} text-[2rem] font-bold text-primary-black uppercase mb-[2.12rem]`}
      >
        YOUR Nominations
      </h1>
      <div
        className={`${anonymous_Pro.className} flex justify-start items-center gap-3 mb-[1.19rem]`}
      >
        <button className="w-[8.5rem] h-[3.125rem] text-primary-black bg-primary-green flex justify-center items-center capitalize text-base font-normal shadow-light">
          current
        </button>
        <button className="w-[8.5rem] h-[3.125rem] bg-light-grey text-primary-black flex justify-center items-center capitalize text-base font-bold shadow-strong">
          closed
        </button>
      </div>
      <div className="w-full max-w-[76rem] h-[38.1875rem] shadow-strong bg-primary-white border border-primary-white">
        <NominationTable />
      </div>
    </main>
  );
}
