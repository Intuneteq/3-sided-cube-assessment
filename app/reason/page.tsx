import { Metadata } from "next";

import { ReasonPage } from "@/components/templates";

export const metadata: Metadata = {
  title: "Reason",
  description: "Reason for Nomination",
};

export default function Reason() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ReasonPage />
    </main>
  );
}
