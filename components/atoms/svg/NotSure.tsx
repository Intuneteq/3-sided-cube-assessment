import React from "react";

export default function NotSure({ className }: Svg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="35"
      // height="35"
      viewBox="0 0 35 35"
      fill="none"
      className={className}
    >
      <path
        d="M0 17.5037C0 7.87793 7.875 0.00292969 17.5008 0.00292969C27.1266 0.00292969 35.0016 7.87793 35.0016 17.5037C35.0016 27.1295 27.1266 35.0045 17.5008 35.0045C7.875 35.0045 0 27.1295 0 17.5037Z"
        fill="black"
      />
      <circle cx="10.001" cy="12.5039" r="2" fill="#F8F8F8" stroke="#F8F8F8" />
      <circle cx="25.001" cy="12.5039" r="2" fill="#F8F8F8" stroke="#F8F8F8" />
      <line
        x1="9.00098"
        y1="23.5039"
        x2="26.001"
        y2="23.5039"
        stroke="#F8F8F8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
