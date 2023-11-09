import React from "react";

import { anonymous_Pro } from "@/fonts";

type Props = {
  children: React.ReactNode;

  /** Reaction Name */
  name: string;

  onClick: () => void;

  value: number;

  inputValue: number;
};

export default function ReactionSmiley({ children, name, onClick, value, inputValue }: Props) {
  // const isDefault = value === 1
  // console.log(value, isDefault);
  

  return (
    <button onClick={onClick} type="button" className="flex flex-col justify-center items-center  cursor-pointer">
      <div className={`w-[3.75rem] h-[3.75rem] bg-light-grey flex justify-center items-center hover:bg-mid-grey ${value === inputValue && "bg-mid-grey"}`}>
        {children}
      </div>
      <p className={`text-center ${anonymous_Pro.className} text-base font-bold capitalize mt-3`}>{name}</p>
    </button>
  );
}
