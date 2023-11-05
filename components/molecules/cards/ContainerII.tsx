import React from "react";
import Image from "next/image";

import { Sticker } from "../";
import { Button, ProgressBar } from "@/components/atoms";

import { anonymous_Pro, poppins, roboto } from "@/fonts";

type Props = {
  children: React.ReactNode;

  /** Image path */
  img: string;

  heading: string;

  content: string;

  /** Word in heading to decorate */
  toDecorate?: string;
};

export default function ContainerII({
  children,
  img,
  heading,
  content,
}: Props) {
  return (
    <section className="w-full md:w-[50rem] min-h-[36.9375rem] md:py-10 bg-primary-white flex flex-col justify-start items-center">
      <div className="w-full mb-5 hidden md:block px-10">
        <ProgressBar progress="25%" />
      </div>
      <div className="md:px-10">
        <div className="w-full h-[13.47081rem] md:h-[11.6875rem] mb-8 liner">
          <Image
            src={img}
            alt="image"
            style={{
              objectFit: "cover",
            }}
            sizes="29.875rem"
            priority
            width={800}
            height={187}
          />
        </div>
      </div>
      <article className="px-4 md:px-10 w-full">
        <h2 className={`${poppins.className} text-2xl font-bold`}>{heading}</h2>
        <p
          className={`${anonymous_Pro.className} mb-[2.12rem] text-secondary-dark text-base font-normal max-w-[37.5rem]`}
        >
          {content}
        </p>
        
        {children}
      </article>

      {/* Action buttons only visible on Desktop */}
      <div className="justify-between items-center hidden md:flex px-4 md:px-10 w-full">
        <Button
          scheme="secondary"
          type="button"
          width="w-[6.5rem]"
          height="h-[3.125rem]"
        >
          Back
        </Button>
        <Button
          scheme="primary"
          type="button"
          width="w-[13.9375rem]"
          height="h-[3.125rem]"
          disable
          inactive
        >
          next
        </Button>
      </div>

      {/* Action Buttons only visible on mobile */}
      <Sticker stack="horizontal">
        <Button
          scheme="secondary"
          type="button"
          width="w-[6.25rem]"
          height="h-[3.08594rem]"
          textSize="text-[0.875rem]"
        >
          Back
        </Button>
        <Button
          scheme="primary"
          type="button"
          width="w-[13.3125rem]"
          height="h-[3.0625rem]"
          textSize="text-[0.875rem]"
        >
          next
        </Button>
      </Sticker>
    </section>
  );
}
