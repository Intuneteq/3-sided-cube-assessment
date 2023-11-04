"use client";

import React, { useEffect } from "react";
import { ModalCard } from "../molecules";

export default function Modal() {
  useEffect(() => {
    // Add the class to body when the modal is opened
    document.body.classList.add("no-scroll");

    // Remove the class from body when the modal is unmounted or closed
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="flex justify-center items-center top-0 right-0 left-0 bottom-0 z-[99] fixed inset-0 bg-primary-black bg-opacity-70 overflow-hidden">
      <ModalCard
        heading="Are you sure?"
        message="If you leave this page, you will lose any progress made."
        confirmation="Yes, leave page"
        revert="Cancel"
      />
    </div>
  );
}
