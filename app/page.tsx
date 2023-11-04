/**
 * 1. Form UI incomplete
 * 2. Error UI
 * 3. Not found UI
 * 4. Select drop down fix
 * 5. Sticky button space issue
 */
import { Metadata } from "next";

import { Button, FormInput } from "@/components/atoms";
import { ContainerII, Sticker } from "@/components/molecules";
import { anonymous_Pro, poppins, roboto } from "@/fonts";
import { Modal, SelectNominee } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Home",
  description: "Cube of the Month Nominations",
};

export default function Home() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerII
        content="Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐"
        toDecorate="DAVID"
        heading="I’d like to nominate DAVID because..."
        img="/img3.png"
        inputTitle="Reasoning"
      >
        <div className="w-full">
          <FormInput
            type="textarea"
            placeholder="Reasoning"
            label="Reasoning"
            name="reasoning"
            hideLabel
          />
        </div>
      </ContainerII>
    </main>
  );
}
