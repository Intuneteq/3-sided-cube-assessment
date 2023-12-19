"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Modal } from "./";
import { DeleteIcon, EditIcon } from "../atoms";

import { anonymous_Pro, poppins } from "@/fonts";
import { useDeleteNomination } from "@/lib/useNominations";

type Props = {
  nominations: INomination[];
};

export default function NominationTable({ nominations }: Props) {
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

  /**
   *
   * @param id
   * Converting this to a hook later on
   */
  const handleEditNomination = (id: string) => {
    // const nominee = nomineeInfo.find((info) => info.nominee_id === id);
    // const data: FormValues = {
    //   nomination_id: nominee?.nomination_id,
    //   nominee: nominee?.nominee_id!,
    //   reasoning: nominee?.reason!,
    //   rating: nominee?.process!,
    // };
    // queryClient.setQueryData(["formData"], (cachedData: FormValues) => {
    //   return {
    //     ...cachedData,
    //     ...data,
    //   };
    // });
    // router.push("/select-nominee");
  };

  return (
    <div className="hidden md:block w-full max-w-[76rem] min-h-[38.1875rem] shadow-strong bg-primary-white border border-primary-white">
      <table className="min-w-full">
        <thead>
          <tr className={`w-full bg-light-grey ${poppins.className}`}>
            <th className="px-6 py-3 text-primary-black text-left">NOMINEE</th>
            <th className="px-6 py-3 text-primary-black text-left">
              DATE SUBMITTED
            </th>
            <th className="px-6 py-3 text-primary-black text-left">
              CLOSING DATE
            </th>
            <th className="px-6 py-3 text-primary-black text-left">REASON</th>
            <th className="px-6 py-3 text-primary-black text-left">PROCESS</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={`${anonymous_Pro.className}`}>
          {nominations?.map((nomination, i) => (
            <tr key={nomination.nomination_id + i}>
              <td className="table-data">{nomination.full_name}</td>
              <td className="table-data">{nomination.date_submitted}</td>
              <td className="table-data">{nomination.closing_date}</td>
              <td className="table-data max-w-[24.9rem] whitespace-nowrap">
                {nomination.reason.length > 20
                  ? `${nomination.reason.substring(0, 20)}...`
                  : nomination.reason}
              </td>
              <td className="table-data">{nomination.process}</td>
              <td className="w-[2.5rem]">
                <DeleteIcon
                  onClick={() => setNomination(nomination)}
                  className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey"
                />
              </td>
              <td className="w-[2.5rem]">
                <EditIcon
                  onClick={() => handleEditNomination(nomination.nominee_id)}
                  className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
