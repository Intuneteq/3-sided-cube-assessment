"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { ModalCard } from "../molecules";

type Props = {
  heading: string;
  message: string;
  confirmation: string;
  onClick: () => void;
};

export default function Modal({ heading, message, confirmation, onClick }: Props) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="flex justify-center items-center top-0 right-0 left-0 bottom-0 z-[99] fixed inset-0 bg-primary-black bg-opacity-70 overflow-hidden">
      <ModalCard
        heading={heading}
        message={message}
        confirmation={confirmation}
        confirmationBtnType="button"
        confirmationOnClick={() => router.back()}
        revert="Cancel"
        revertBtnType="button"
        revertOnClick={onClick}
      />
    </div>
  );
}
