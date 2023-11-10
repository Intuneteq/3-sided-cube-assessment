"use client";

import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Button, EmptyContentIcon } from "@/components/atoms";
import { Sticker } from "../molecules";
import { NominationMobile, NominationTable } from "@/components/organisms";

import { getNomineesInfo } from "@/lib/utility";
import { anonymous_Pro, poppins } from "@/fonts";
import { getNominations } from "@/app/nominations/actions";

export default function NominationPage() {
  const queryClient = useQueryClient();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [isCurrent, setIsCurrent] = useState(true);

  const {
    data: nominations,
    error,
    isError,
  } = useQuery({
    queryKey: ["nominations"],
    queryFn: getNominations,
  });

  const nominees = queryClient.getQueryData<Nominee[]>(["nominees"]);

  if (isError) {
    throw new Error(error?.message);
  }

  if (!nominees) {
    throw new Error("Error Fetching Nominees");
  }

  const nomineeInfo = getNomineesInfo(nominations!, nominees);

  const closedInfo = nomineeInfo.filter((item) => {
    const closing_date = new Date(item.closing_date);

    return closing_date < today;
  });

  const currentInfor = nomineeInfo.filter((item) => {
    const closing_date = new Date(item.closing_date);

    return closing_date >= today;
  });

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
          onClick={() => setIsCurrent(!isCurrent)}
          type="button"
          className={`w-[7rem] md:w-[8.5rem] h-[1.875rem] md:h-[3.125rem] text-primary-black bg-primary-green flex justify-center items-center capitalize text-base font-normal shadow-light hover:shadow-strong ${
            isCurrent && "shadow-strong"
          }`}
        >
          current
        </button>
        <button
          onClick={() => setIsCurrent(!isCurrent)}
          className={`w-[7rem] md:w-[8.5rem] h-[1.875rem] md:h-[3.125rem] bg-light-grey text-primary-black flex justify-center items-center capitalize text-base font-bold shadow-light hover:shadow-strong ${
            !isCurrent && "shadow-strong"
          }`}
        >
          closed
        </button>
      </div>

      {/* Desktop screen */}
      <NominationTable nomineeInfo={isCurrent ? currentInfor : closedInfo} />

      {/* Mobile screen */}
      <NominationMobile nomineeInfo={isCurrent ? currentInfor : closedInfo} />

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
