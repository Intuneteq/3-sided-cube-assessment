import { ProgressBar } from "@/components/atoms";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;

  /** Image path */
  img: string;
};

export default function ContainerII({ children, img }: Props) {
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
      <article className="px-4 md:px-10 w-full">{children}</article>
    </section>
  );
}
