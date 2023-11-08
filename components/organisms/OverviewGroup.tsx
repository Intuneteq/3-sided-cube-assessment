"use client";

import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { OverviewCard } from "../molecules";

export default function OverviewGroup() {
  const queryClient = useQueryClient();

  const formData = queryClient.getQueryData<FormValues>(["formData"]);

  // const nominees = queryClient.getQueryData<Nominee[]>(["nominees"]);

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center mb-[2.12rem]">
      <OverviewCard title="Cube's name" content="David" />
      <OverviewCard
        title="Reasoning"
        content="David always goes above and beyond with all the work that he does. He’s also a lovey person to work with!"
      />
      <OverviewCard title="Thoughts on Current Process" content="Very Fair" />
    </div>
  );
}
