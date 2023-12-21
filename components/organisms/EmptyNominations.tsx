import React from "react";

import { Button, EmptyContentIcon } from "../atoms";
import { poppins } from "@/fonts";

export default function EmptyNominations() {
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
