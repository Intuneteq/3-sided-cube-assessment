"use client";

import React from "react";
import { useRouter } from 'next/navigation'

import { EditIcon } from "@/components/atoms";
import { anonymous_Pro, poppins } from "@/fonts";

type Props = {
  /** Card Title */
  title: string;

  /** Card content */
  content: string;

  path: string;
};

export default function OverviewCard({ title, content, path }: Props) {
  const router = useRouter()

  return (
    <div className="w-full bg-light-grey p-5">
      <div className="flex justify-between items-start">
        <p
          className={`${poppins.className} text-base font-bold text-primary-black`}
        >
          {title}
        </p>
        <EditIcon
          onClick={() => router.push(path)}
          className="w-5 h-5 cursor-pointer stroke-primary-black hover:stroke-dark-grey"
        />
      </div>
      <p
        className={`${anonymous_Pro.className} text-base text-[#333] font-normal text-left max-w-[18.375rem] md:max-w-[35.6875rem]`}
      >
        {content}
      </p>
    </div>
  );
}
