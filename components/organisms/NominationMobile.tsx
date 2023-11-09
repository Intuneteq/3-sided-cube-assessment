"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { Modal } from "./";
import { DeleteIcon, EditIcon } from "../atoms";

import { axiosClient } from "@/api/axios";
import { anonymous_Pro, poppins } from "@/fonts";

type Props = {
  nomineeInfo: INomination[];
};

export default function NominationMobile({ nomineeInfo }: Props) {
  const [nomination, setNomination] = useState("");

  const queryClient = useQueryClient();
  const router = useRouter();

  const handleEditNomination = (id: string) => {
    const nominee = nomineeInfo.find((info) => info.nominee_id === id);

    const data: FormValues = {
      nomination_id: nominee?.nomination_id,
      nominee: nominee?.nominee_id!,
      reasoning: nominee?.reason!,
      rating: nominee?.process!,
    };

    queryClient.setQueryData(["formData"], (cachedData: FormValues) => {
      return {
        ...cachedData,
        ...data,
      };
    });

    router.push("/select-nominee");
  };

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return axiosClient.delete(`/nomination/${id}`);
    },
  });

  return (
    <div className="md:hidden w-full bg-light-grey">
      <div className="w-full py-3">
        <div className="px-[1.25rem] mb-3">
          <h2 className={`${poppins.className} text-base font-bold uppercase`}>
            Nominee
          </h2>
        </div>
        <div className="w-full border border-primary-white">
          {nomineeInfo?.map((nomination) => (
            <div
              className="w-full py-4 px-6 bg-primary-white h-[5.4375rem] mb-[1px] flex items-center justify-between"
              key={nomination.nomination_id}
            >
              <div>
                <h6
                  className={`${anonymous_Pro.className} text-base font-bold`}
                >
                  {nomination.fullName}
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
                  onClick={() => setNomination(nomination.nomination_id)}
                  className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey"
                />
                <EditIcon
                  onClick={() => handleEditNomination(nomination.nominee_id)}
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
            mutation.mutate(nomination);
            setNomination("");
          }}
          onClick={() => setNomination("")}
        />
      )}
    </div>
  );
}
