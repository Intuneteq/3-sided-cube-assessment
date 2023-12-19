"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button, LoaderIcon } from "../atoms";
import { OverviewCard } from "../molecules";

import { useCreateNomination, useEditNomination } from "@/lib/useNominations";
import useGetUrlStrings from "@/hooks/useGetUrlStrings";

export default function OverviewGroup() {
  const router = useRouter();
  const { reason, nominee, process, state, nomination_id } = useGetUrlStrings();

  if (!nominee) {
    throw new Error("no nominee");
  }

  const data = {
    nominee_id: nominee.nominee_id,
    process: process.payload,
    reason,
  };

  const editData = {
    nominee_id: nominee.nominee_id,
    process: process.payload,
    reason,
    nomination_id,
  };

  const options: NominationOptions = {
    data,
    onSuccess: () => router.push("/submitted"),
  };

  const editOptions: NominationOptions = {
    data: editData,
    onSuccess: () => router.push("/nominations"),
  };

  const { mutate, error, isError, isPending } = useCreateNomination(options);

  const {
    mutate: editMutate,
    error: editError,
    isError: editIsError,
    isPending: editIsPending,
  } = useEditNomination(editOptions);

  if (isError) {
    throw new Error(error.message);
  }

  if (editIsError) {
    throw new Error(editError.message);
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
          onClick={nomination_id ? () => editMutate() : () => mutate()}
          disable={isPending || editIsPending}
        >
          {isPending || editIsPending ? (
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
