import { Metadata } from "next";

import { Rhf } from "@/components/organisms";
import { ContainerII } from "@/components/templates";
import ProcessForm from "@/components/templates/ProcessForm";

export const metadata: Metadata = {
  title: "Process",
  description: "What's your opinion on the process method",
};

export default function Fair() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerII
        heading="IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?"
        content="As you know, out the nominees chosen, we spin a wheel to pick the cube of the month. What’s your opinion on this method?"
        img="/ratings.png"
        progress="75%"
      >
        <div className="w-full"> 
          <ProcessForm />
         </div>
      </ContainerII>
    </main>
  );
}
