import React from "react";

import { Button } from "@/components/atoms";
import { ContainerI, StackCard } from "@/components/molecules";
import { anonymous_Pro, poppins } from "@/fonts";

export default function NominationIntro() {
  return (
    <ContainerI
      heading="CUBE OF THE MONTH NOMINATIONS"
      content=" At cube we’re passionate about recognising the great work that our
    cubes do. Each month one of our cubes are crowned cube of the month
    👑⭐. Please nominate who you think deserves this months title."
      img="/img1.png"
    >
      {/* Desktop button */}
      <div className="hidden md:block">
        <Button
          scheme="primary"
          type="button"
          width="w-[17.875rem]"
          height="h-[3.125rem]"
          textSize="md:text-[0.875rem]"
        >
          Get started
        </Button>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0">
        <StackCard stack="none">
          <Button
            scheme="primary"
            type="button"
            width="w-[17.875rem]"
            height="h-[3.125rem]"
          >
            Get started
          </Button>
        </StackCard>
      </div>
    </ContainerI>
  );
}
