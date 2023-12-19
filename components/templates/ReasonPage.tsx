"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { ContainerII, ReasonForm } from "./";

import { keys, useGetQueryData } from "@/lib/useNominees";

export default function ReasonPage() {
  const searchParams = useSearchParams();
  const nominees = useGetQueryData(keys.getNominees);

  const nominee_id = decodeURIComponent(searchParams.get("nominee") as string);

  const nominee = nominees?.find((item) => item.nominee_id === nominee_id);

  if (!nominees || !nominee) {
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
