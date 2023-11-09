"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { Button, LoaderIcon } from "../atoms";
import { OverviewCard } from "../molecules";

import { axiosClient } from "@/api/axios";
import { processPayload, processValue } from "@/lib/utility";

export default function OverviewGroup() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const nominee = queryClient.getQueryData<Nominee>(["nominee"]);

  const formValue = queryClient.getQueryData<FormValues>(["formData"]);

  if (!nominee || !formValue) throw new Error("Nominee not Found");

  const mutation = useMutation({
    mutationFn: (formValue: FormValues) => {
      const payload = {
        nominee_id: formValue.nominee,
        reason: formValue.reasoning,
        process: processPayload(parseInt(formValue.rating)),
      };
      if (formValue.nomination_id) {
        return axiosClient.patch(
          `/nomination/${formValue.nomination_id}`,
          payload
        );
      } else {
        return axiosClient.post("/nomination", payload);
      }
    },
  });

  const { isSuccess, isPending, isError, error } = mutation;

  if (isError) {
    throw new Error(error.message);
  }

  if (isSuccess) {
    // clear form value cache
    queryClient.invalidateQueries({ queryKey: ["formData"] });

    router.push("/submitted");
  }

  return (
    <>
      <div className="w-full flex flex-col gap-2 justify-center items-center mb-[2.12rem]">
        <OverviewCard
          title="Cube's name"
          content={nominee.first_name}
          path="/select-nominee"
        />
        <OverviewCard
          title="Reasoning"
          content={formValue.reasoning}
          path="/reason"
        />
        <OverviewCard
          title="Thoughts on Current Process"
          content={processValue(parseInt(formValue.rating))}
          path="/process"
        />
      </div>
      <div>
        <Button
          scheme="primary"
          type="button"
          width="w-[13.9375rem]"
          height="h-[3.125rem]"
          onClick={() => mutation.mutate(formValue)}
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
