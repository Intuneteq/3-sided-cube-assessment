import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
  img: string;
};

export default function ContainerI({ children, img }: Props) {
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
      {children}
    </section>
  );
}
