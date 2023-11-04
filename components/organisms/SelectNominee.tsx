import React from "react";

import { Button, FormInput } from "../atoms";
import { ContainerII, Sticker } from "../molecules";

import { anonymous_Pro, poppins, roboto } from "@/fonts";

export default function SelectNominee() {
  const options = ["one", "two"];
  return (
    <ContainerII img="/img2.png">
      <div className="flex-start w-full">
        <h2 className={`${poppins.className} text-2xl font-bold`}>
          I&rsquo;d like to nominate...
        </h2>
        <p
          className={`${anonymous_Pro.className} mb-[2.12rem] text-secondary-dark text-base font-normal max-w-[37.5rem]`}
        >
          Please select a cube who you feel has done something honourable this
          month or just all round has a great work ethic.
        </p>
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
  );
}
