/**
 * 1. Form UI incomplete
 * 4. Select drop down fix
 * 5. Sticky button space issue
 */
import { Metadata } from "next";

import { Button } from "@/components/atoms";
import { StackCard } from "@/components/molecules";
import { ContainerI } from "@/components/templates";

export const metadata: Metadata = {
  title: "Home",
  description: "Cube of the Month Nominations",
};

export default function Home() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
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
            type="link"
            width="w-[17.875rem]"
            height="h-[3.125rem]"
            href="/select-nominee"
          >
            Get started
          </Button>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0">
          <StackCard stack="none">
            <Button
              scheme="primary"
              type="link"
              width="w-[17.875rem]"
              height="h-[3.125rem]"
              href="/"
            >
              Get started
            </Button>
          </StackCard>
        </div>
      </ContainerI>
    </main>
  );
}
