import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nominations",
  description: "Your Nominations List",
};

export default function Nominations() {
  const nominations = []

  if(!nominations.length) {
    return (
      <main>
        
      </main>
    )
  }
  return <main>Nominations</main>;
}
