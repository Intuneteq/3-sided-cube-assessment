import React from "react";

import { Button, FormInput } from "../atoms";
import { ContainerII } from "../molecules";

export default function SelectNominee() {
  const options = ["one", "two"];
  return (
    <ContainerII
      content="  Please select a cube who you feel has done something honourable this
    month or just all round has a great work ethic."
      heading="I&rsquo;d like to nominate..."
      img="/img2.png"
      inputTitle="Cube&rsquo;s name"
    >
      <div className="flex-start w-full">
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
