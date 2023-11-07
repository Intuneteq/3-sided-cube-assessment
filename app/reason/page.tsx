import { Metadata } from "next";

import { Rhf } from "@/components/organisms";
import { ContainerII } from "@/components/templates";

export const metadata: Metadata = {
  title: "Reason",
  description: "Reason for Nomination",
};

export default function Reason() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerII
        content="Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐"
        toDecorate="DAVID"
        heading="I’d like to nominate DAVID because..."
        img="/img3.png"
        progress="50%"
      >
        <div className="w-full">
          <Rhf
            nextPage="/"
            type="textarea"
            placeholder="Reasoning"
            label="Reasoning"
            name="reasoning"
          />
        </div>
      </ContainerII>
    </main>
  );
}
