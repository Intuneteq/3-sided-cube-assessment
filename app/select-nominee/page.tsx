import React from "react";
import { Metadata } from "next";

import { FormInput } from "@/components/atoms";
import { ContainerII } from "@/components/molecules";

import { roboto } from "@/fonts";

export const metadata: Metadata = {
  title: "Select Nominee",
  description: "Select your nominee",
};

export default function SelectNominee() {
  const options = ["one", "two"];
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerII
        content="  Please select a cube who you feel has done something honourable this
     month or just all round has a great work ethic."
        heading="I&rsquo;d like to nominate..."
        img="/img2.png"
        progress="25%"
        nextPage="/reason"
      >
        <div className="flex-start w-full">
          <p className={`${roboto.className} text-base font-bold mb-2`}>
            <span className="text-secondary-pink">*</span> Cube&rsquo;s name
          </p>
          <div className="mb-8 max-w-[24.0625rem]">
            <FormInput
              type="select"
              options={options}
              placeholder="Country"
              label="Country"
              name="country"
              hideLabel
            />
          </div>
        </div>
      </ContainerII>
    </main>
  );
}
