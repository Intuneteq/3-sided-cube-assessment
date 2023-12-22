"use client";

import React from "react";

import { Button } from "@/components/atoms";
import { NominationNav, Sticker } from "../molecules";
import {
  EmptyNominations,
  NominationMobile,
  NominationTable,
} from "@/components/organisms";

import { useGetNomiations } from "@/lib/useNominations";

type Props = {
  page: "current" | "closed";
};

export default function NominationPage({ page }: Props) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { data: nominations, error, isError } = useGetNomiations();

  if (isError && error) {
    throw new Error(error.message);
  }

  if (!nominations || !nominations?.length) {
    return <EmptyNominations />;
  }

  let content;

  if (page === "current") {
    content = nominations.filter((nomination) => {
      const closing_date = new Date(nomination.closing_date);
      return closing_date >= today;
    });
  }

  if (page === "closed") {
    content = nominations.filter((nomination) => {
      const closing_date = new Date(nomination.closing_date);
      return closing_date < today;
    });
  }
  

  return (
    <main className="flex justify-start items-start w-full md:min-h-screen flex-col pt-[1.31rem] md:py-5 bg-primary-gradient">
      <NominationNav />

      {/* Desktop screen */}
      <NominationTable nominations={content as INomination[]} />

      {/* Mobile screen */}
      <NominationMobile nominations={content as INomination[]} />

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
