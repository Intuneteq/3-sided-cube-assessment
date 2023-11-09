import { Metadata } from "next";

import { Button } from "@/components/atoms";
import { StackCard } from "@/components/molecules";
import { ContainerI } from "@/components/templates";

export const metadata: Metadata = {
  title: "Submitted",
  description: "Nomination submitted page",
};

export default function Submitted() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerI
        heading="NOMINATION SUBMITTED"
        content="Thank you for taking the time to fill out this form! Why not nominate another cube?"
        img="/img4.png"
      >
        {/* Desktop button */}
        <div className="hidden md:flex justify-center items-center gap-3">
          <Button
            scheme="secondary"
            type="link"
            width="w-[13.9375rem]"
            height="h-[3.125rem]"
            href="/nominations"
          >
            VIEW nominations
          </Button>
          <Button
            scheme="secondary"
            type="link"
            width="w-[13.9375rem]"
            height="h-[3.125rem]"
            href="/select-nominee"
          >
            CREATE NEW NOMINATION
          </Button>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0">
          <StackCard stack="none">
            <Button
              scheme="secondary"
              type="button"
              width="w-[20.4375rem]"
              height="h-[3.125rem]"
              textSize="text-[0.875rem]"
            >
              Nomination submitted
            </Button>
          </StackCard>
        </div>
      </ContainerI>
    </main>
  );
}
