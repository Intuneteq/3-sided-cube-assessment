"use client";

import React from "react";

import { ContainerII, ReasonForm } from "./";

import useGetUrlStrings from "@/hooks/useGetUrlStrings";

export default function ReasonPage() {
  const { nominee } = useGetUrlStrings();

  if (!nominee) {
    throw new Error("no nominee");
  }

  return (
    <ContainerII
      content="Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐"
      heading={`I’d like to nominate ${nominee.first_name} because...`}
      toDecorate={nominee.first_name}
      img="/img3.png"
      progress="50%"
    >
      <div className="w-full">
        <ReasonForm />
      </div>
    </ContainerII>
  );
}
