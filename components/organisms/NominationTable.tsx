"use client";

import React, { useState } from "react";

import { DeleteIcon, EditIcon } from "../atoms";

import { anonymous_Pro, poppins } from "@/fonts";
import { Modal } from ".";

export default function NominationTable() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
          <tr>
            <td className="table-data">David Jones</td>
            <td className="table-data">21/10/23</td>
            <td className="table-data">29/10/23</td>
            <td className="table-data max-w-[24.9rem] whitespace-nowrap">
              Lorem ipsum dolor sit amet, consecet desu...
            </td>
            <td className="table-data">Fair</td>
            <td className="w-[2.5rem]">
              <DeleteIcon
                onClick={() => setShowModal(true)}
                className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey"
              />
            </td>
            <td className="w-[2.5rem]">
              <EditIcon className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey" />
            </td>
          </tr>
        </tbody>
      </table>
      {showModal && (
        <Modal
          confirmation="yes, delete"
          heading="Delete this nomination?"
          message="If you delete this nomination, the nominee will no longer be put forward by you."
          onClick={() => setShowModal(false)}
        />
      )}
    </>
  );
}
