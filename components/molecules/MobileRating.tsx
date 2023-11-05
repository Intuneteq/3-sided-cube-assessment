import { poppins } from "@/fonts";
import React from "react";

type Props = {
  rating: string;
  /** Emoji expected */
  children: React.ReactNode;
};

export default function MobileRating({ rating, children }: Props) {
  return (
    <div className="w-full h-[3.125rem] border border-mid-grey flex items-center justify-between py-[0.375rem] px-3">
      <div className="flex justify-start items-center gap-[0.88rem]">
        {children}
        <p className={`${poppins.className} font-bold text-base capitalize`}>
          {rating}
        </p>
      </div>
      <input type="radio" name="rating" value={1} />
    </div>
  );
}
