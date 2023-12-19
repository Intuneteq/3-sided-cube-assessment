"use client";

import React, { useState } from "react";

import { Button, EmptyContentIcon } from "@/components/atoms";
import { Sticker } from "../molecules";
import { NominationMobile, NominationTable } from "@/components/organisms";

import { anonymous_Pro, poppins } from "@/fonts";
import { useGetNomiations } from "@/lib/useNominations";

export default function NominationPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [isCurrent, setIsCurrent] = useState(true);

  const { data: nominations, error, isError } = useGetNomiations();

  if (isError && error) {
    throw new Error(error.message);
  }

  if (!nominations) {
    throw new Error("Error Fetching Nominations");
  }
  

  const { closed, current } = nominations.reduce(
    (acc, nomination) => {
      const closing_date = new Date(nomination.closing_date);
      if (closing_date < today) {
        acc.closed.push(nomination);
      } else {
        acc.current.push(nomination);
      }
      return acc;
    },
    { closed: [] as any , current: [] as any }
  );

  if (!nominations || !nominations?.length) {
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
    <main className="flex justify-start items-start w-full md:min-h-screen flex-col pt-[1.31rem] md:py-5 bg-primary-gradient">
      <h1
        className={`${poppins.className} text-2xl md:text-[2rem] font-bold text-primary-black uppercase mb-[1.16rem] md:mb-[2.12rem] px-[1.25rem] md:px-0`}
      >
        YOUR Nominations
      </h1>
      <div
        className={`${anonymous_Pro.className} flex justify-start items-center gap-3 mb-[1.19rem] px-[1.25rem] md:px-0`}
      >
        <button
          onClick={() => setIsCurrent(true)}
          type="button"
          className={`w-[7rem] md:w-[8.5rem] h-[1.875rem] md:h-[3.125rem] text-primary-black bg-primary-green flex justify-center items-center capitalize text-base font-normal shadow-light hover:shadow-strong ${
            isCurrent && "shadow-strong"
          }`}
        >
          current
        </button>
        <button
          onClick={() => setIsCurrent(false)}
          className={`w-[7rem] md:w-[8.5rem] h-[1.875rem] md:h-[3.125rem] bg-light-grey text-primary-black flex justify-center items-center capitalize text-base font-bold shadow-light hover:shadow-strong ${
            !isCurrent && "shadow-strong"
          }`}
        >
          closed
        </button>
      </div>

      {/* Desktop screen */}
      <NominationTable nominations={isCurrent ? current : closed} />

      {/* Mobile screen */}
      {/* <NominationMobile nomineeInfo={isCurrent ? currentInfor : closedInfo} /> */}

      {/* Action Buttons only visible on mobile */}
      <Sticker stack="none">
        <Button
          scheme="secondary"
          type="link"
          width="w-[20.4375rem]"
          height="h-[3.125rem]"
          textSize="text-[0.875rem]"
          href="/select-nominee"
        >
          create new nomination
        </Button>
      </Sticker>
    </main>
  );
}
