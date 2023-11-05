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

  confirmationBtnType: BtnType;

  confirmationHref?: string;

  confirmationOnClick?: () => void;

  /** Action Decline - e.g "No" */
  revert: string;

  revertBtnType: BtnType;

  revertHref?: string;

  revertOnClick?: () => void;

  error?: boolean;
};

export default function ModalCard({
  heading,
  message,
  confirmation,
  confirmationBtnType,
  confirmationHref,
  revert,
  revertBtnType,
  revertHref,
  error,
  confirmationOnClick,
  revertOnClick,
}: Props) {
  const needHref = ["link", "anchor"];

  if (needHref.includes(confirmationBtnType) && !confirmationHref) {
    throw new Error(
      'Please provide an "Href" property when using a Link button.'
    );
  }

  if (needHref.includes(revertBtnType) && !revertHref) {
    throw new Error(
      'Please provide an "Href" property when using a Link button.'
    );
  }
  return (
    <div className="relative bg-primary-white w-[31.25rem] h-[21.25rem] px-4 pt-4 flex flex-col justify-start items-start gap-[2.125rem]">
      <h3
        className={`${
          poppins.className
        } text-primary-black text-lg font-bold uppercase ${
          error ? "text-[#FF0000]" : ""
        }`}
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
            type={confirmationBtnType}
            width="w-full"
            height="h-[3.08594rem]"
            href={confirmationHref}
            onClick={confirmationOnClick}
          >
            {confirmation}
          </Button>
          <Button
            scheme="secondary"
            type={revertBtnType}
            href={revertHref}
            width="w-full"
            height="h-[3.08594rem]"
            onClick={revertOnClick}
          >
            {revert}
          </Button>
        </StackCard>
      </div>
    </div>
  );
}
