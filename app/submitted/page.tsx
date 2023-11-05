import { Metadata } from "next";

import { Button } from "@/components/atoms";
import { ContainerI, StackCard } from "@/components/molecules";

export const metadata: Metadata = {
  title: "Submitted",
  description: "Nomination submitted page",
};

export default function Submitted() {
  return (
    <ContainerI
      heading="NOMINATION SUBMITTED"
      content="Thank you for taking the time to fill out this form! Why not nominate another cube?"
      img="/img4.png"
    >
      {/* Desktop button */}
      <div className="hidden md:flex justify-center items-center gap-3">
        <Button
          scheme="secondary"
          type="button"
          width="w-[13.9375rem]"
          height="h-[3.125rem]"
          // textSize="text-[0.5rem]"
        >
         VIEW nominations
        </Button>
        <Button
          scheme="secondary"
          type="button"
          width="w-[13.9375rem]"
          height="h-[3.125rem]"
          textSize="md:text-[0.875rem]"
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
  );
}
