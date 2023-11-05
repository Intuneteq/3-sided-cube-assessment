"use client";

import React, { useState } from "react";
import Image from "next/image";

import {  Sticker } from "../";
import { Button, ProgressBar } from "@/components/atoms";
import { Modal } from "@/components/organisms";

import { anonymous_Pro, poppins } from "@/fonts";

type Props = {
  children: React.ReactNode;

  /** Image path */
  img: string;

  heading: string;

  content: string;

  /** Word in heading to decorate */
  toDecorate?: string;

  /** Center content - Default aligns to the left */
  center?: boolean;

  /** Single Button conatiner */
  singleBtn?: boolean;

  /** String in percentage. Add regex validation later */
  progress: string;
};

export default function ContainerII({
  children,
  img,
  heading,
  content,
  center,
  singleBtn,
  progress,
}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="w-full md:w-[50rem] min-h-[36.9375rem] md:py-10 bg-primary-white flex flex-col justify-start items-center">
        <div className="w-full mb-5 hidden md:block px-10">
          <ProgressBar progress={progress} />
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
        <article
          className={`px-4 md:px-10 w-full flex flex-col justify-start  ${
            center ? "items-center text-center" : "items-start"
          }`}
        >
          <h2 className={`${poppins.className} text-2xl font-bold uppercase`}>
            {heading}
          </h2>
          <p
            className={`${anonymous_Pro.className} mb-[2.12rem] text-secondary-dark text-base font-normal max-w-[37.5rem]`}
          >
            {content}
          </p>

          {children}
        </article>

        {/* Action buttons only visible on Desktop */}
        {singleBtn ? (
          <div className="w-full hidden md:flex justify-center items-center">
            <Button
              scheme="primary"
              type="button"
              width="w-[13.9375rem]"
              height="h-[3.125rem]"
            >
              Submit
            </Button>
          </div>
        ) : (
          <div className="justify-between items-center hidden md:flex px-4 md:px-10 w-full">
            <Button
              scheme="secondary"
              type="button"
              width="w-[6.5rem]"
              height="h-[3.125rem]"
              onClick={() => setShowModal(true)}
            >
              Back
            </Button>
            <Button
              scheme="primary"
              type="link"
              width="w-[13.9375rem]"
              height="h-[3.125rem]"
              href="/reason"
              // onClick={}
              // disable
              // inactive
            >
              next
            </Button>
          </div>
        )}

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
            Submit
          </Button>
        </Sticker>
      </section>
      {showModal && <Modal onClick={() => setShowModal(false)} />}
    </>
  );
}
