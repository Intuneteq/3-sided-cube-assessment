import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ReactionSmileyGroup({ children }: Props) {
  return (
    <div className="w-full flex justify-center items-center gap-[5.25rem] mt-7">
      {children}
    </div>
  );
}
