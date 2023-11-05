import React from "react";

export default function EditIcon({ className, stroke }: Svg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2.39735 15.0963C2.43564 14.7517 2.45478 14.5794 2.50691 14.4184C2.55316 14.2755 2.61851 14.1396 2.70118 14.0142C2.79436 13.8729 2.91694 13.7503 3.16209 13.5052L14.1673 2.49992C15.0878 1.57945 16.5802 1.57945 17.5007 2.49993C18.4211 3.4204 18.4211 4.91279 17.5007 5.83326L6.49542 16.8385C6.25027 17.0836 6.1277 17.2062 5.98639 17.2994C5.86102 17.3821 5.72506 17.4474 5.58219 17.4937C5.42115 17.5458 5.24887 17.5649 4.90429 17.6032L2.08398 17.9166L2.39735 15.0963Z"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
