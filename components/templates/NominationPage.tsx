"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Button, EmptyContentIcon } from "@/components/atoms";
import { NominationTable } from "@/components/organisms";

import { anonymous_Pro, poppins } from "@/fonts";
import { getNomineesInfo } from "@/lib/utility";

export default function NominationPage() {
  const queryClient = useQueryClient();
  
  const today = new Date();
  today.setHours(0, 0, 0, 0)

  const [isCurrent, setIsCurrent] = useState(true);

  const nominations = queryClient.getQueryData<Nomination[]>(["nominations"]);

  const nominees = queryClient.getQueryData<Nominee[]>(["nominees"]);

  if (!nominations || !nominees) {
    throw new Error("Error Fecting Nominations");
  }

  const nomineeInfo = getNomineesInfo(nominations, nominees);

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
    <main className="flex justify-start items-start w-full md:min-h-screen flex-col md:py-5">
      <h1
        className={`${poppins.className} text-[2rem] font-bold text-primary-black uppercase mb-[2.12rem]`}
      >
        YOUR Nominations
      </h1>
      <div
        className={`${anonymous_Pro.className} flex justify-start items-center gap-3 mb-[1.19rem]`}
      >
        <button
          onClick={() => setIsCurrent(!isCurrent)}
          type="button"
          className={`w-[8.5rem] h-[3.125rem] text-primary-black bg-primary-green flex justify-center items-center capitalize text-base font-normal shadow-light hover:shadow-strong ${isCurrent && 'shadow-strong'}`}
        >
          current
        </button>
        <button
          onClick={() => setIsCurrent(!isCurrent)}
          className={`w-[8.5rem] h-[3.125rem] bg-light-grey text-primary-black flex justify-center items-center capitalize text-base font-bold shadow-light hover:shadow-strong ${!isCurrent && 'shadow-strong'}`}
        >
          closed
        </button>
      </div>
      <div className="w-full max-w-[76rem] h-[38.1875rem] shadow-strong bg-primary-white border border-primary-white">
        {/* Dynamic data should be passed here and default should be current */}
        <NominationTable nomineeInfo={isCurrent ? currentInfor : closedInfo} />
      </div>
    </main>
  );
}
