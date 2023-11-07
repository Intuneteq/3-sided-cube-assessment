import React from "react";
import { Metadata } from "next";

import { FormInput } from "@/components/atoms";
import { ContainerII } from "@/components/molecules";

import { roboto } from "@/fonts";
import { Rhf } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Select Nominee",
  description: "Select your nominee",
};

export default async function SelectNominee() {
  const options = ["one", "two"];
  const submit = async () => {};
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerII
        content="  Please select a cube who you feel has done something honourable this
     month or just all round has a great work ethic."
        heading="I&rsquo;d like to nominate..."
        img="/select.png"
        progress="25%"
        nextPage="/reason"
      >
        <div className="flex-start w-full">
          <Rhf
            nextPage="/"
            type="select"
            options={options}
            placeholder="Nominee"
            label="Cube&rsquo;s name"
            name="nominee"
          />
        </div>
      </ContainerII>
    </main>
  );
}
