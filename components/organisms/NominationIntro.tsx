import React from "react";

import { Button } from "@/components/atoms";
import { ContainerI, StackCard } from "@/components/molecules";
import { anonymous_Pro, poppins } from "@/fonts";

export default function NominationIntro() {
  return (
    <ContainerI img="/img1.png">
      <div className="flex flex-col justify-center items-center text-primary-black px-4">
        <h1
          className={`${poppins.className} text-[2rem] font-bold uppercase text-center leading-[3rem]`}
        >
          CUBE OF THE MONTH NOMINATIONS
        </h1>
        <p
          className={`${anonymous_Pro.className} max-w-[37.5rem] text-base font-normal text-center mb-8`}
        >
          At cube we’re passionate about recognising the great work that our
          cubes do. Each month one of our cubes are crowned cube of the month
          👑⭐. Please nominate who you think deserves this months title.
        </p>

        {/* Desktop button */}
        <div className="hidden md:block">
          <Button
            scheme="primary"
            type="button"
            width="w-[17.875rem]"
            height="h-[3.125rem]"
            textSize="0.875rem"
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
              textSize="0.875rem"
            >
              Get started
            </Button>
          </StackCard>
        </div>
      </div>
    </ContainerI>
  );
}
