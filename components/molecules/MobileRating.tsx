import React from "react";

import { poppins } from "@/fonts";

type Props = {
  rating: string;
  /** Emoji expected */
  children: React.ReactNode;

  inputValue: number;

  onChange: (value: number) => void;

  value: number;
};

export default function MobileRating({
  rating,
  children,
  inputValue,
  onChange,
  value,
}: Props) {
  return (
    <div className="w-full h-[3.125rem] border border-mid-grey flex items-center justify-between py-[0.375rem] px-3">
      <div className="flex justify-start items-center gap-[0.88rem]">
        {children}
        <p className={`${poppins.className} font-bold text-base capitalize`}>
          {rating}
        </p>
      </div>
      <input
        type="radio"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        checked={inputValue === value}
      />
    </div>
  );
}
