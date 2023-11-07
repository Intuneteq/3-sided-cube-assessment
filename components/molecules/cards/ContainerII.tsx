"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Sticker } from "../";
import { Button, ProgressBar } from "@/components/atoms";
import { Modal, SelectNominee } from "@/components/organisms";

import { anonymous_Pro, poppins } from "@/fonts";

type Props = {
  children: React.ReactNode;

  /** Image path */
  img: string;

  /** Container heading */
  heading: string;

  /** Description content */
  content: string;

  /** Word in heading to decorate */
  toDecorate?: string;

  /** Center content - Default aligns to the left */
  center?: boolean;

  /** Single Button conatiner */
  singleBtn?: boolean;

  /** String in percentage. Add regex validation later */
  progress: string;

  /** Path url for next button */
  nextPage: string;
};

export default function ContainerII({
  children,
  img,
  heading,
  content,
  center,
  singleBtn,
  progress,
  nextPage,
}: Props) {


  return (
    <>
      <section className="w-full md:w-[50rem] min-h-[36.9375rem] md:py-10 bg-primary-white flex flex-col justify-start items-center">
        {/* Progress bar */}
        <div className="w-full mb-5 hidden md:block px-10">
          <ProgressBar progress={progress} />
        </div>

        {/* Container Image */}
        <div className="md:px-10">
          <Image
            src={img}
            alt="image"
            sizes="(min-width: 780px) 719px, 100vw"
            priority
            width={800}
            height={187}
            className="w-full h-[13.47081rem] md:h-[11.6875rem] mb-8"
          />
        </div>

        {/* Container Title and Content */}
        <article
          className={`px-4 md:px-10 w-full flex flex-col justify-start ${
            center ? "items-center text-center" : "items-start"
          }`}
        >
          <h2
            className={`${poppins.className} text-2xl font-bold uppercase max-w-[37.5rem]`}
          >
            {heading}
          </h2>
          <p
            className={`${anonymous_Pro.className} mb-[2.12rem] text-secondary-dark text-base font-normal max-w-[37.5rem]`}
          >
            {content}
          </p>
        </article>

        <div className="w-full px-4 md:px-10 flex flex-col justify-start items-center">
        {children}

        </div>

      </section>

     
    </>
  );
}
