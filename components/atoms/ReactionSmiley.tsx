import React from "react";

import { anonymous_Pro } from "@/fonts";

type Props = {
  children: React.ReactNode;

  /** Reaction Name */
  name: string;

  onClick: () => void;

  /** button Value */
  value: number;

  /** Input Value */
  inputValue: number;
};

export default function ReactionSmiley({
  children,
  name,
  onClick,
  value,
  inputValue,
}: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex flex-col justify-center items-center  cursor-pointer"
    >
      <div
        className={`w-[3.75rem] h-[3.75rem] bg-light-grey flex justify-center items-center hover:border-4 hover:border-primary-green ${
          value === inputValue && "border-4 border-primary-green"
        }`}
      >
        {children}
      </div>
      <p
        className={`text-center ${anonymous_Pro.className} text-base font-bold capitalize mt-3`}
      >
        {name}
      </p>
    </button>
  );
}
