import React from "react";
import { Metadata } from "next";

import { OverviewGroup } from "@/components/organisms";
import { ContainerII } from "@/components/templates";

export const metadata: Metadata = {
  title: "Overview",
  description: "Your Nomination Overview",
};

export default function Overview() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerII
        img="/img5.png"
        heading="nomination overview"
        content="Thank you for taking the time to nominate a fellow cube. Please check your answers before submitting."
        center
        progress="95%"
      >
        <OverviewGroup />
      </ContainerII>
    </main>
  );
}
