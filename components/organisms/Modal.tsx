"use client";

import React, { useEffect } from "react";

import { ModalCard } from "../molecules";

type Props = {
  heading: string;
  message: string;
  confirmation: string;
  confirmationAction: (data?: any) => void;
  onClick: () => void;
};

export default function Modal({
  heading,
  message,
  confirmation,
  onClick,
  confirmationAction,
}: Props) {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="flex justify-center items-end md:items-center md:top-0 right-0 left-0 bottom-0 z-[99] fixed inset-0 bg-primary-black bg-opacity-70 overflow-hidden">
      <ModalCard
        heading={heading}
        message={message}
        confirmation={confirmation}
        confirmationBtnType="button"
        confirmationOnClick={confirmationAction}
        revert="Cancel"
        revertBtnType="button"
        revertOnClick={onClick}
      />
    </div>
  );
}
