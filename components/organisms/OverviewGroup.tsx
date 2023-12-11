"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button, LoaderIcon } from "../atoms";
import { OverviewCard } from "../molecules";

import { processPayload, processValue } from "@/lib/utility";
import { useGetQueryData, keys } from "@/lib/useNominees";
import { useCreateNomination } from "@/lib/useNominations";

export default function OverviewGroup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nominees = useGetQueryData(keys.getNominees);

  const nominee_id = decodeURIComponent(searchParams.get("nominee") as string);
  const val = decodeURIComponent(searchParams.get("process") as string);
  const reason = decodeURIComponent(searchParams.get("reason") as string);

  const nominee = nominees?.find((item) => item.nominee_id === nominee_id);
  const process = processPayload(parseInt(val));

  if (!nominees || !nominee) {
    throw new Error("no nominee");
  }

  const data = { nominee_id, process, reason };

  const options: NominationOptions = {
    data,
    onSuccess: router.push("/submitted"),
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
          path="/select-nominee"
        />
        <OverviewCard title="Reasoning" content={reason} path="/reason" />
        <OverviewCard
          title="Thoughts on Current Process"
          content={processValue(parseInt(val))}
          path="/process"
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
