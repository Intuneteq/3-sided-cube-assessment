import React from "react";
import { Metadata } from "next";
// import { use } from "next/navigation";
import { NominationPage } from "@/components/templates";

export const metadata: Metadata = {
  title: "Nominations",
  description: "Your Closed Nominations",
};

export default function ClosedNominations() {
  return <NominationPage page="closed" />;
}
