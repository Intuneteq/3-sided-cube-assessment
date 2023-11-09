import { poppins } from "@/fonts";
import React from "react";
import { ControllerRenderProps } from "react-hook-form";

type Props = {
  rating: string;
  /** Emoji expected */
  children: React.ReactNode;

  field: any;

  onChange: (value: any) => void;

  value: number;
};

export default function MobileRating({
  rating,
  children,
  field,
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
        onChange={(e) => onChange(e.target.value)}
        checked={field.value == value}
      />
    </div>
  );
}
