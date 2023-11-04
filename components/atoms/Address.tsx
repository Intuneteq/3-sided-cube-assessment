import React from "react";


import { anonymous_Pro, poppins } from "@/fonts";

type Props = {
   city: string;
   addressLine: string;
}

export default function Address({ city, addressLine }: Props) {
  return (
    <div className="text-primary-white text-[0.75rem]">
      <h6 className={`${poppins.className} font-bold uppercase`}>
        {city}
      </h6>
      <p
        className={`max-w-[9.4375rem] ${anonymous_Pro.className} font-normal leading-[1.125rem]`}
      >
        {addressLine}
      </p>
    </div>
  );
}
