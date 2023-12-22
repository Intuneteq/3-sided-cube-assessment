"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Modal } from "./";
import { DeleteIcon, EditIcon } from "../atoms";

import { anonymous_Pro, poppins } from "@/fonts";
import { useDeleteNomination } from "@/lib/useNominations";
import { processValueToNumber } from "@/lib/utility";
import { ProcessValues } from "@/lib/constants";

type Props = {
  nominations: INomination[];
};

export default function NominationMobile({ nominations }: Props) {
  const [nomination, setNomination] = useState<INomination | null>(null);
  const router = useRouter();

  const options = {
    data: nomination as INomination,
    onSuccess: () => setNomination(null),
  };

  const { mutate, error, isError } = useDeleteNomination(options);

  if (isError) {
    throw new Error(error.message);
  }

  const handleEditNomination = (nomination: INomination) => {
    const process = processValueToNumber(nomination.process as ProcessValues);
    router.push(
      `/select-nominee?nominee=${nomination.nominee_id}&reason=${nomination.reason}&process=${process}&nomination_id=${nomination.nomination_id}`
    );
  };

  return (
    <div className="md:hidden w-full bg-light-grey">
      <div className="w-full py-3">
        <div className="px-[1.25rem] mb-3">
          <h2 className={`${poppins.className} text-base font-bold uppercase`}>
            Nominee
          </h2>
        </div>
        <div className="w-full border border-primary-white">
          {nominations.map((nomination) => (
            <div
              className="w-full py-4 px-6 bg-primary-white h-[5.4375rem] mb-[1px] flex items-center justify-between"
              key={nomination.nomination_id}
            >
              <div>
                <h6
                  className={`${anonymous_Pro.className} text-base font-bold`}
                >
                  {nomination.full_name}
                </h6>
                <p
                  className={`${anonymous_Pro.className} text-base font-normal`}
                >
                  {nomination.reason.length > 20
                    ? `${nomination.reason.substring(0, 20)}...`
                    : nomination.reason}
                </p>
              </div>
              <div className="flex justify-between items-center gap-[0.62rem]">
                <DeleteIcon
                  onClick={() => setNomination(nomination)}
                  className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey"
                />
                <EditIcon
                  onClick={() => handleEditNomination(nomination)}
                  className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {nomination && (
        <Modal
          confirmation="yes, delete"
          heading="Delete this nomination?"
          message="If you delete this nomination, the nominee will no longer be put forward by you."
          confirmationAction={() => {
            mutate();
          }}
          onClick={() => setNomination(null)}
        />
      )}
    </div>
  );
}
