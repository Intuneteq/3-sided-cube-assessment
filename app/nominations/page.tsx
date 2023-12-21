import React from "react";
import { Metadata } from "next";
// import { use } from "next/navigation";
import { NominationPage } from "@/components/templates";

export const metadata: Metadata = {
  title: "Nominations",
  description: "Your Nominations List",
};

export default function Nominations() {
  return <NominationPage page="current" />;
}
