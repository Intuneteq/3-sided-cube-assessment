"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button, LoaderIcon } from "../atoms";
import { OverviewCard } from "../molecules";

import { useCreateNomination } from "@/lib/useNominations";
import useGetUrlStrings from "@/hooks/useGetUrlStrings";

export default function OverviewGroup() {
  const router = useRouter();
  const { reason, nominee, process, state } = useGetUrlStrings();

  if (!nominee) {
    throw new Error("no nominee");
  }

  const data = {
    nominee_id: nominee.nominee_id,
    process: process.payload,
    reason,
  };

  const options: NominationOptions = {
    data,
    onSuccess: () => router.push("/submitted"),
  };

  const { mutate, error, isError, isPending } = useCreateNomination(options);

  if (isError) {
    throw new Error(error.message);
  }

  return (
    <>
      <div className="w-full flex flex-col gap-2 justify-center items-center mb-[2.12rem]">
        <OverviewCard
          title="Cube's name"
          content={nominee.first_name}
          path={`/select-nominee?${state}`}
        />
        <OverviewCard
          title="Reasoning"
          content={reason}
          path={`/reason?${state}`}
        />
        <OverviewCard
          title="Thoughts on Current Process"
          content={process.label}
          path={`/process?${state}`}
        />
      </div>
      <div>
        <Button
          scheme="primary"
          type="button"
          width="w-[13.9375rem]"
          height="h-[3.125rem]"
          onClick={() => mutate()}
          disable={isPending}
        >
          {isPending ? (
            <LoaderIcon
              className="w-[24px] h-[26px] animate-spin-slow"
              stroke="white"
            />
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </>
  );
}
