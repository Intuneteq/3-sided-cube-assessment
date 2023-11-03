import React from "react";

export default function LoaderIcon({ className, stroke }: Svg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 26"
      fill="none"
    >
      <path
        d="M12 0.5V6.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M12 25.5V19.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M24 13H18"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M0 13H6"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M20.5 4.14551L16.25 8.57259"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M3.5 21.8538L7.75 17.4268"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M20.5 21.8538L16.25 17.4268"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M3.5 4.14551L7.75 8.57259"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
