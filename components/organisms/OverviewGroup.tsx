"use client";

import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { OverviewCard } from "../molecules";

import { processValue } from "@/lib/utility";

export default function OverviewGroup() {
  const queryClient = useQueryClient();

  const nominee = queryClient.getQueryData<Nominee>(["nominee"]);

  const formValue = queryClient.getQueryData<FormValues>(["formData"]);

  if (!nominee || !formValue) throw new Error("Nominee not Found");

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center mb-[2.12rem]">
      <OverviewCard title="Cube's name" content={nominee.first_name} path='/select-nominee' />
      <OverviewCard title="Reasoning" content={formValue.reasoning} path='/reason' />
      <OverviewCard
        title="Thoughts on Current Process"
        content={processValue(parseInt(formValue.rating))}
        path='/rating'
      />
    </div>
  );
}
