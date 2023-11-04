import React from "react";

import { StackCard } from "../";
import { anonymous_Pro, poppins } from "@/fonts";
import { Button } from "@/components/atoms";

type Props = {
  /** Modal Heading */
  heading: string;

  /** Modal message */
  message: string;

  /** Action confirmation - e.g "Yes" */
  confirmation: string;

  /** Action Decline - e.g "No" */
  revert: string;
};

export default function ModalCard({
  heading,
  message,
  confirmation,
  revert,
}: Props) {
  return (
    <div className="relative bg-primary-white w-[31.25rem] h-[21.25rem] px-4 pt-4 flex flex-col justify-start items-start gap-[2.125rem]">
      <h3
        className={`${poppins.className} text-primary-black text-lg font-bold uppercase`}
      >
        {heading}
      </h3>
      <p
        className={`${anonymous_Pro.className} font-normal text-base text-primary-black max-w-[27rem]`}
      >
        {message}
      </p>
      <div className="w-full absolute bottom-0 left-0 right-0">
        <StackCard stack="vertical">
          <Button
            scheme="secondary"
            type="button"
            width="w-full"
            height="h-[3.08594rem]"
          >
            {confirmation}
          </Button>
          <Button
            scheme="secondary"
            type="button"
            width="w-full"
            height="h-[3.08594rem]"
          >
            {revert}
          </Button>
        </StackCard>
      </div>
    </div>
  );
}
