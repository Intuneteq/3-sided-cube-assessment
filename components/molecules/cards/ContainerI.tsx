import React from "react";
import Image from "next/image";

import { anonymous_Pro, poppins } from "@/fonts";

type Props = {
  children: React.ReactNode;

  /** Container heading */
  heading: string;

  /** Container body content */
  content: string;

  /** Container Image */
  img: string;
};

export default function ContainerI({ children, heading, content, img }: Props) {
  return (
    <section className="w-full md:w-[50rem] min-h-[36.9375rem] bg-primary-white md:shadow-light pb-10">
      <div className="w-full h-[13.47081rem] md:h-[19.0625rem] mb-8">
        <Image
          src={img}
          alt="image"
          style={{
            objectFit: "cover",
          }}
          sizes="29.875rem"
          priority
          width={800}
          height={304}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-primary-black px-4">
        <h1
          className={`${poppins.className} text-[2rem] font-bold uppercase text-center leading-[3rem]`}
        >
          {heading}
        </h1>
        <p
          className={`${anonymous_Pro.className} max-w-[37.5rem] text-base font-normal text-center mb-8`}
        >
          {content}
        </p>

        {children}
      </div>
    </section>
  );
}
