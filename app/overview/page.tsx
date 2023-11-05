import React from "react";
import { Metadata } from "next";

import { ContainerII, OverviewCard } from "@/components/molecules";

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
        singleBtn
        progress="95%"
        nextPage="/"
      >
        <div className="w-full flex flex-col gap-2 justify-center items-center mb-[2.12rem]">
          <OverviewCard title="Cube's name" content="David" />
          <OverviewCard
            title="Reasoning"
            content="David always goes above and beyond with all the work that he does. He’s also a lovey person to work with!"
          />
          <OverviewCard
            title="Thoughts on Current Process"
            content="Very Fair"
          />
        </div>
      </ContainerII>
    </main>
  );
}
