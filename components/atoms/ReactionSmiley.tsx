import React from "react";

import { Fair } from "./";
import { anonymous_Pro } from "@/fonts";

type Props = {
  children: React.ReactNode;

  /** Reaction Name */
  name: string;
};

export default function ReactionSmiley({ children, name }: Props) {
  return (
    <button type="button" className="flex flex-col justify-center items-center  cursor-pointer">
      <div className="w-[3.75rem] h-[3.75rem] bg-light-grey flex justify-center items-center">
        {children}
      </div>
      <p className={`text-center ${anonymous_Pro.className} text-base font-bold capitalize mt-3`}>{name}</p>
    </button>
  );
}
